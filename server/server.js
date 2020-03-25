const express = require('express')
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const mongoose = require('mongoose')
const faker = require('faker')
const cookieSession = require('cookie-session')
const cors = require("cors");
const User = require('./models/user')
const Comment = require('./models/comment')
const Task = require('./models/task')
const Group = require('./models/group')
const Todo = require('./models/todo')
const bodyParser = require('body-parser')
const ObjectId = require('mongoose').Types.ObjectId

const app = express()

mongoose.connect('mongodb://localhost/homebase')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static('client/build'));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.use(
    cookieSession({
      maxAge: 30 * 24 * 60 * 60 * 1000,
      keys: ['helloworld']
    })
)


// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
//   res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// set up cors to allow us to accept requests from our client
app.use(
  cors({
    origin: "http://localhost:3000", // allow to server to accept request from different origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true // allow session cookie from browser to pass through
  })
);


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
      clientID: '678475023348-tlm6ikrgeublvh5o3gbihpf1o7ddoqsd.apps.googleusercontent.com',
      clientSecret: 'jsyrZ37mfbOFn--PkSDJHlDo',
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
        // console.log(profile)
        User.findOne({ google_id: profile.id }).then(existingUser => {
          console.log("access token: ", accessToken);
          console.log("refresh token: ", refreshToken);
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

const ensureAuthenticated = (req, res, next) => {
    if (!req.user) {
      res.status(401).json({
        authenticated: false,
        message: "user has not been authenticated"
      });
    } else {
      next();
    }
  };

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
  passport.authenticate('google', { failureRedirect: '/' }),
  function(req, res) {
    res.redirect('http://localhost:3000/home');
     res.end()
});




app.get('/logout', (req, res) => {
  req.logout();
  req.session = null;
  res.redirect('http://localhost:3000');
  res.end()
});

//get current user's full profile
app.get('/api/current_user', (req, res) => {
    const id = req.user
    User
    .findById(id).exec((error, user) => {
      if (error){
        res.writeHead(404);	
        return response.end("No user is signed in.");
      } else{
        return res.send(user)
      }
    })
});


//GET route for /groups/groupId
app.get('/groups/:groupId', ensureAuthenticated, (req, res, next) => {
  Group.findOne({ _id: req.params.groupId})
      .populate(
          {path:'people'})
      .populate({path: 'comments', populate: {path: 'author'}})
      .populate({path: 'todos', populate: {path:'comments'}, populate: {path:'tasks', 
      populate: {path:'assigned_to'}}})
      .exec((err, group) => {
        if (err) {
            return next(err)
        } if(group) {
            res.send(group)
        } else {
          res.status(404);
          return res.end(`group with id ${req.params.groupId} not found`);
      }
      });
    })

//GET route for /groups/groupId
app.get('/groups/:groupId', isLoggedIn, ensureAuthenticated, (req, res, next) => {
    Group.findOne({ _id: req.params.groupId})
        .populate(
            {path:'people'})
        .populate({path: 'comments', populate: {path: 'author'}})
        .populate({path: 'todos', populate:  {path:'tasks', 
        populate:{path:'assigned_to'}}, populate: {path:'comments', populate: {path:'author'}}})
        .exec((err, group) => {
          if (err) {
              return next(err)
          } if(group) {
              res.send(group)
          } else {
            res.status(404);
            return res.end(`group with id ${req.params.groupId} not found`);
        }
        });
      })
  

app.put ('/groups/:groupId', isLoggedIn, ensureAuthenticated, (req, res, next) => {
    Group.findByIdAndUpdate(req.params.groupId, {name: req.body.group_name, type: req.body.group_type }, function(err, group){
        if (err) {
            return next(err)
        }if(group) {
            group.save()
            res.end()
    } else {
        res.status(404);
        return res.end(`group with id ${req.params.groupId} not found`);
    }
    });
})


//POST route for /groups/groupId
app.post('/groups/:groupId', isLoggedIn, ensureAuthenticated, (req, res, next) => {
    let newGroup = new Group()


    newGroup.name = req.body.name
    newGroup.type = req.body.type
    newGroup.date_created = new Date ()
    newGroup.todos = []
    newGroup.comments = []
    newGroup.people = []
    

    newGroup.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Group Created successfully')
    })
})


//route for getting a single todo list page 
app.get('/groups/:groupId/todos/:todo', isLoggedIn, ensureAuthenticated, (req, res, next) =>{
    
    Todo.findOne({ _id: req.params.todo})
    .populate(
        {path:'tasks', 
        populate:{path:'assigned_to'}})
    .populate({path: 'comments', populate: {path: 'author'}})
      .exec((err, todo) => {
          if (err) {
              return next(err)
          } if(todo) {
              res.send(todo)
          } else {
            res.status(404);
            return res.end(`todo with id ${req.params.todo} not found`);
        }
        });
      })
  


//route to update the single todo by name and description 
app.put('/groups/:groupId/todos/:todo', isLoggedIn, ensureAuthenticated, (req, res, next) => {
    
    Todo.findByIdAndUpdate(req.params.todo, {name: req.body.name, description: req.body.description }, function(err, todo){
            if (err) {
                return next(err)
            }if(todo) {
                todo.save()
                res.end()
        } else {
            res.status(404);
            return res.end(`todo with id ${req.params.todo} not found`);
        }
        });
    })


//route creates a new todo in the database
app.post('/groups/:groupId/todos/:todo', isLoggedIn, ensureAuthenticated,  (req, res, next) => {
    
    let newTodo = new Todo()


    newTodo.name = req.body.name
    newTodo.description = req.body.description
    newTodo.num_tasks= req.body.num_tasks
    newTodo.num_completed = req.body.num_completed
    newTodo.date_created = new Date ()
    newTodo.tasks = []
    newTodo.comments = []
    

    newTodo.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Todo Created successfully')
    })
})

//returns the comments from each to do 
app.get('/groups/:groupId/todos/:todo/comments', isLoggedIn, ensureAuthenticated, (req, res, next) => {
    
    Todo
    .findById(req.params.todo)
    .populate({path: 'comments', populate: {path: 'author'}})
    .exec((err, todo) => {
        if (err) return next(err)
        if (todo) {
            res.send(todo.comments) 
         } else{
                res.status(404);
                return res.end(`todo with id ${req.params.todo} not found`);
            } 
        })
    })

//route creates a new comment for the todo
app.post('/groups/:groupId/todos/:todo/comments', isLoggedIn, ensureAuthenticated,  (req, res, next) => {
    
    Todo
    .findById(req.params.todo)
    .populate({path: 'comments', populate: {path: 'author'}})
    .exec((err, todo) => {
        if (err) return next(err)
        if (todo) {
            let comment = new Comment()
            comment.title = req.body.title
            comment.description = req.body.description
            comment.date_created = new Date ()
            comment.author = req.user.profile_name
            comment.save()
            todo.comments.push(comment)
            todo.save()
            res.end()
        } else {
            res.status(404);
            return res.end(`todo with id ${req.params.todo} not found`);
        }
    })

})


//returns a single task  
app.get('/groups/:groupId/todos/:todo/tasks/:task', isLoggedIn, ensureAuthenticated,  (req, res, next) => {
    
    Task
    .findById(req.params.task)
    .populate({path: 'assinged_to'})
    .exec((err, task) => {
        if (err) return next(err)
        if (task) {
            res.send(task) 
         } else{
                res.status(404);
                return res.end(`task with id ${req.params.task} not found`);
            } 
        })
    })

//create a new task 
app.post('/groups/:groupId/todos/:todo/tasks/:task', isLoggedIn, ensureAuthenticated, (req, res, next) => {
    Todo
    .findById(req.params.todo)
    .populate({path: 'tasks', populate: {path: 'assigned_to'}})
    .exec((err, todo) => {
        if (err) return next(err)
        if (todo) {
            let task = new Task()
            task.title = req.body.title
            task.date_created = new Date ()
            task.assigned_to = //TO DO HELPER FUNCTION User.find({})
            req.user.profile_name
            task.save()
            todo.tasks.push(task)
            todo.save()
            res.end()
        } else {
            res.status(404);
            return res.end(`task with id ${req.params.task} not found`);
        }
    })

})

// This returns all the Todos in the DB
app.get('/groups/:groupId/todos', isLoggedIn, ensureAuthenticated, (req, res, next) => {

  Group
    .findById(req.params.groupId)
    .populate({path: 'todos', populate: {path: 'tasks', populate: {path: 'assigned_to'}}})
    .exec((err, Group) => {
      if (err) return next(err)
        if (Group) {
          res.send({Group})
        } else {
          res.status(404);
          return res.end(`group with id ${req.params.groupId} not found`);
        }

    
    })

//route for getting a groups tasks for one month
app.get('/groups/:groupdId/schedule', ensureAuthenticated, (req, res) => {
  const currentMonth = parseInt(req.body.currentMonth)
  const currentYear = parseInt(req.body.currentYear)
  const nextMonth = currentMonth + 1

  Group
    .findById(req.params.groupId)
    .populate({path: 'todos', populate: {path: 'tasks'}})
    .exec((err, groups) => {
      if (err) {
        res.send(err)
      } else {
        tasks = []
        groups.todos.forEach((todo) => {
          todo.tasks.forEach((task) => {
            const month = task.due_date.getMonth()
            const year = task.due_date.getFullYear()
            if ((month == currentMonth || month == nextMonth) && year == currentYear) {
              tasks.push(task)
            }
          })
        })
        res.send({tasks, currentMonth, currentYear, nextMonth})
      }
    })
})

app.listen(5000, () => {
  console.log("Server listening on port 5000")
})
