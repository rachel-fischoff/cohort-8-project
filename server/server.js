const express = require('express')
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const mongoose = require('mongoose')
const faker = require('faker')
const cookieSession = require('cookie-session')
const User = require('./models/user')
const Comment = require('./models/comment')
const Task = require('./models/task')
const Todo = require('./models/todo')
const Group = require('./models/group')


const app = express()

mongoose.connect('mongodb://localhost/homebase')

app.use(
    cookieSession({
      maxAge: 30 * 24 * 60 * 60 * 1000,
      keys: ['helloworld']
    })
)

app.use(passport.initialize())
app.use(passport.session())

passport.serializeUser((user, done) => {
    done(null, user._id)
})

passport.deserializeUser((id, done) => {
    done(null, id)
})

passport.use(
  new GoogleStrategy(
    {
      clientID: '1096879772481-ekikp4fo6uo40lbnmo9i6ut4673p6uug.apps.googleusercontent.com',
      clientSecret: 'DwIABfYy4gwD6CYWT3gw49iI',
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
        // console.log(profile)
        User.findOne({ googleId: profile.id }).then(existingUser => {
          if (existingUser) {
            // we already have a record with the given profile ID
            done(null, existingUser)
          } else {
            // we don't have a user record with this ID, make a new record!
            new User({
              google_id: profile.id,
              profile_name: profile.displayName,
              email: profile.emails[0].value,
              profile_pic_url: profile.photos[0].value,
              date_created: new Date()
            })
            .save()
            .then(user => done(null, user))
          }
        })
    }
  )
)

//route middleware to ensure user is logged in
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated())
      return next();
  res.status(400).json({
      'message': 'access denied'
  });
}

const googleAuth = passport.authenticate('google',
  { scope: ['profile', 'email']
})

app.get('/generate-fake-users', (req, res) => {
    //Generate fake users
    for (let i = 0; i < 90; i++) {
        let user = new User()

        user.google_id = faker.random.alphaNumeric()
        user.email = faker.internet.email()
        user.profile_name = faker.internet.userName()
        user.date_created = faker.date.past()
        user.profile_pic_url = faker.internet.avatar()

        user.save((err) => {
            if (err) throw err
          })

    }

    res.end()
})

app.get('/generate-fake-comments', (req, res) => {
    //Generate fake comments
    for (let i = 0; i < 1000; i++) {
        let comment = new Comment()

        comment.title = faker.lorem.words()
        comment.description = faker.lorem.sentences()
        comment.date_created = faker.date.past()

        const tags = []

        for (var j = 0; j < 3; j++) {
            const tag = faker.lorem.word()
            tags.push(tag)
        }

        comment.tags = tags

        const num_comments = Math.round((Math.random() * 10)/3)
        const comment_comments = []

        for (var k = 0; k < num_comments; k ++) {
            const comment_comment = faker.lorem.sentence()
            comment_comments.push(comment_comment)
        }

        comment.comments = comment_comments

        User.aggregate(
            [ { $sample: { size: 1 } } ]
          ).exec((error, user) => {
            comment.author = user[0]
            comment.save((err) => {
                if (err) throw err
            })
        })

    }

    res.end()
})

app.get('/generate-fake-tasks', (req, res) => {
    //Generate fake tasks
    for (let i = 0; i < 100; i++) {
        let task = new Task()

        task.title = faker.lorem.words()
        task.date_created = faker.date.past()
        task.due_date = faker.date.future()

        if (i < 50) {
            task.completed = true
        } else {
            task.completed = false
        }

        User.aggregate(
            [ { $sample: { size: 1 } } ]
          ).exec((error, user) => {
            task.assigned_to = user[0]
            task.save((err) => {
                if (err) throw err
            })
        })
    }

    res.end()
})

app.get('/generate-fake-todos', (req, res) => {
    //Generate fake todos
    for (let i = 0; i < 20; i++) {
        let todo = new Todo()

        todo.name = faker.lorem.words()
        todo.date_created = faker.date.past()
        todo.description = faker.lorem.sentence()

        const num_task = Math.round((Math.random() * 10))
        todo.num_task = num_task
        let num_completed = 0

        const num_comments = Math.round((Math.random() * 10))

        Task.aggregate(
            [ { $sample: { size: num_task } } ]
          ).exec((error, tasks) => {
              for (var j = 0; j < num_task; j++) {
                todo.tasks.push(tasks[j])
              }
              for (var k = 0; k < num_task; k++) {
                  if (tasks[k].completed == true) {
                      num_completed ++
                  }
              }
              todo.num_completed = num_completed
              Comment.aggregate(
                [ { $sample: { size: num_comments } } ]
              ).exec((error, comments) => {
                  for (var l = 0; l < num_comments; l++) {
                    todo.comments.push(comments[l])
                  }
                  todo.save((err) => {
                    if (err) throw err
                })
            })
        })
    }

    res.end()
})

app.get('/generate-fake-groups', (req, res) => {
    //Generate fake groups
    for (let i = 0; i < 10; i++) {
        let group = new Group()

        group.group_name = faker.company.companyName()

        if (i < 5) {
            group.group_type = "project"
        } else {
            group.group_type = "team"
        }

        const num_people = Math.round(Math.random() * 10)
        const num_comments = Math.round(Math.random() * 15)
        const num_todos = Math.round(Math.random() * 10/3)

        User.aggregate(
            [ { $sample: { size: num_people } } ]
          ).exec((error, people) => {
              for (var j = 0; j < num_people; j++) {
                group.people.push(people[j])
              }
              Comment.aggregate(
                [ { $sample: { size: num_comments } } ]
              ).exec((error, comments) => {
                  for (var l = 0; l < num_comments; l++) {
                    group.comments.push(comments[l])
                  }
                  Todo.aggregate(
                    [ { $sample: { size: num_todos } } ]
                  ).exec((error, todos) => {
                    for (var m = 0; m < num_todos; m++) {
                        group.todos.push(todos[m])
                      }
                    group.save((err) => {
                        if (err) throw err
                    })  
                  }) 
            })
        })

    }

    res.end()
})


app.get('/auth/google', googleAuth)

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/auth/google' }),
  function(req, res) {
    res.redirect('/home');
});

app.get('/home', (req, res) => {
  return res.send(req.user)
})

app.get('/current_user', (req, res) => {
    //will send back the userId given by mongo DB
    //you can search current user by this id to get
    //their full profile!
    if(req.user == undefined){
        res.send('No user is currently signed in')
    }

    return res.send(req.user)
});
  
app.get('/logout', (req, res) => {
    req.logout()
    res.send(req.user)
})

app.listen(5000, () => {
    console.log("Server listening on port 5000")
})
