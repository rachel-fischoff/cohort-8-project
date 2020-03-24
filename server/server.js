const express = require('express')
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const User = require('./models/user')

const app = express()

mongoose.connect('mongodb://localhost/basecampDB')

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
                    profile_name: profile.displayName,
                    profile_email: profile.emails[0].value,
                    profile_pic_url: profile.profileUrl,
                    groups: []
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

app.get('/auth/google/callback', googleAuth, (req, res) => {
    res.send('Your logged in via Google!')
    //res.redirect("http://localhost:3000/");
    // Successful authentication, redirect home
    //res.redirect('/')
    console.log('user from server: ', req.user)
    //res.redirect(`http://localhost:3000`);
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