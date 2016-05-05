var express = require('express');
var passport = require('passport');
var User = require('../models/user');
var router = express.Router();
var Likes = require('../models/likes');
var mongoose = require('mongoose');
var Likes = require('../models/likes');

/* login authentication function */
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect('/');
  }
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('front_page', {loggedIn :req.isAuthenticated(), page:'home'});
});

/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('login', {loggedIn :req.isAuthenticated(), page:'login'});
});

router.post('/login', passport.authenticate('local'),function(req, res, err) {
   res.redirect('users/profile');
  });

/* GET search page. */
router.get('/search', function(req, res, next) {
  res.render('search', {loggedIn :req.isAuthenticated(), page:'search'});
});

/* GET signup page. */
router.get('/signup', function(req, res, next) {
  res.render('signup', {loggedIn :req.isAuthenticated(), page:'signUp'});
});

/* POST signup page */
router.post('/signup', function(req, res, next){
  var user = new User({ username: req.body.username });
  User.register(user, req.body.password, function(error) {
    if (error) {
      res.send(error);
    } else {
      req.login(user, function(loginError) {
        if (loginError) {
          res.send(loginError);
        } else {
          res.redirect('/users/profile');
        }
      });
    }
  });
});

router.get('/beers/:id', function(req, res, next) {
  res.render('beer', {loggedIn :req.isAuthenticated(), page:'beerPage'});
})

module.exports = router;
