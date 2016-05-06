var express = require('express');
var router = express.Router();
var passport = require('passport');
var User = require('../models/user');
var Likes = require('../models/likes');
var mongoose = require('mongoose');

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect('/');
  }
}

/* GET profile page. */
router.get('/profile', isLoggedIn, function(req, res, next) {
  res.render('profile', {"userId":req.user.username, loggedIn :req.isAuthenticated(), page: 'profile'});
});

router.get('/:id', function(req, res, next) {
  res.render('user', {loggedIn :req.isAuthenticated(), page: 'singleUser'});
})



module.exports = router;
