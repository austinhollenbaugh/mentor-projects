//normally you'd do all passport login stuff in a separate file, and then require it in this file (much cleaner)

var express = require('express'),
    session = require('express-session'),
    passport = require('passport'),
    config = require('./config'),
    FacebookStrategy = require('passport-facebook').Strategy;
    //all strategies are constructor functions

var app = express();

//express session must be initialized before passport session
app.use(session({
  secret: 'some-random-string',
  resave: true,
  saveUninitialized: false
}));

//passport session
app.use(passport.initialize());
app.use(passport.session());

//this can go wherever we want
passport.use(new FacebookStrategy({
  clientID: config.fbId,
  clientSecret: config.fbSecret,
  callbackURL: config.baseUrl + '/auth/facebook/callback'
  //this url needs to get changed when you host it
}, function(token, refreshToken, profile, done) {
  console.log('user logged in');
  //go to database and look for profile.id?
  //create user using profile.id
  return done(null /* error */, profile /* info that goes on the session */);
}));

app.get('/auth/facebook', passport.authenticate('facebook'));
//passport authenticate using the facebook Strategy

//this one uses the callback that comes back when you login
app.get('/auth/facebook/callback', passport.authenticate('facebook', {
    successRedirect: '/me',
  	failureRedirect: '/login'
  }), function(req, res) {
    //this is for error handling
  	console.log(req.session);
  });

//these help with sessions
//preps data to put on session
passport.serializeUser(function(user, done) {
  console.log('ser user');
  done(null, user);
});

//gets data from session and preps for req.user
passport.deserializeUser(function(obj, done) {
  console.log('des user');
  done(null, obj);
});

app.get('/me', function(req, res, next){
  console.log(req.user);
  res.json(req.user);
});



var port = 3000;
app.listen(port, function() {
  console.log("listening on port", port);
});
