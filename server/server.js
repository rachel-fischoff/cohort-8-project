const express = require('express')
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const mongoose = require('mongoose')
const faker = require('faker')
const cookieSession = require('cookie-session')
const User = require('./models/user')

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
    done(null, user.id)
  })

passport.deserializeUser((id, done) => {
    done(null, user._id)
})

passport.use(
    new GoogleStrategy({
        clientID: '812786725020-6t9b7b4b2j6n6vvtjajc0333ku9bpp0u.apps.googleusercontent.com',
        clientSecret: 'q50xXvFYNCb1e38ewnfeZYrV',
        callbackURL: '/auth/google/callback'
        },
        (accessToken, refreshToken, profile, done) => {
        User.findOne({ googleId: profile.id }).then(existingUser => {
            if (existingUser) {
            // we already have a record with the given profile ID
            done(null, existingUser)
            } else {
            // we don't have a user record with this ID, make a new record!
            new User({
                googleId: profile.id,
                name: profile.displayName,
                email: profile.emails[0].value
            })
                .save()
                .then(user => done(null, user))
            }
        })
        }
    )
)
  
const googleAuth = passport.authenticate('google',
  { scope: ['profile', 'email']
})

app.get('/generate-fake-data', (req, res) => {
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

    //Generate fake comments
    for (let i = 0; i < 1000; i++) {
        let comment = new Comment()

        comment.title = faker.lorem.words()
        comment.description = faker.lorem.sentences()
        comment.date_created = faker.date.past()

        const tags = []

        for (var j = 0; j < 3; j++) {
            const tag = faker.lorem.word
            tags.push(tag)
        }

        comment.tags = tags

        User.aggregate(
            [ { $sample: { size: 1 } } ]
          ).exec((error, user) => {
            comment.author = user[0]._id
        })

        const num_comments = Math.round((Math.random() * 10)/3)
        const comment_comments = []

        for (var k = 0; k < num_comments; k ++) {
            const comment_comment = faker.lorem.sentence
            comment_comments.push(comment_comment)
        }

        comment.comments = comment_comments

        comment.save((err) => {
            if (err) throw err
        })
    }    

    //Generate fake tasks

    //Generate fake todos

    //Generate fake groups

    res.end()
})

app.get('/auth/google', googleAuth)

app.get('/auth/google/callback', googleAuth, (req, res) => {
    res.send('Your logged in via Google!')
})

app.get('/api/current_user', (req, res) => {
    console.log(req.user)
    res.send(req.user)
});
  
app.get('/api/logout', (req, res) => {
    req.logout()
    res.send(req.user)
})

app.listen(5000)