const express = require('express')
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const User = require('./models/user')

const app = express()

mongoose.connect('mongodb://localhost/cohort-project-google-auth')

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
              googleId: profile.id,
              user_name: profile.displayName,
              profile_name: profile.emails[0].value,
              profile_pic_url: profile.photos[0].value
            //   groups: groups
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

app.get('/auth/google', googleAuth)

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/home');
});

app.get('/home', (req, res) => {
   return res.send('this will be a homepage when we build it out')
})

app.get('/api/current_user', (req, res) => {
    //will send back the userId given by mongo DB
    //you can search current user by this id to get
    //their full profile!
    if(req.user == undefined){
        res.send('No user is currently signed in')
    }

    return res.send(req.user)
});
  
app.get('/api/logout', (req, res) => {
    req.logout()
    res.send(req.user)
})

app.listen(5000)

