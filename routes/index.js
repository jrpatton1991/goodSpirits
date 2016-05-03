var express = require('express');
var passport = require('passport');
var User = require('../models/user');
var router = express.Router();
var Likes = require('../models/likes');
var mongoose = require('mongoose');

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
  res.render('front_page');
});

/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('login');
});

router.post('/login', passport.authenticate('local'),function(req, res, err) {
    console.log(err);
   res.redirect('/profile');
  });

/* GET profile page. */
router.get('/profile', isLoggedIn, function(req, res, next) {
  res.render('profile', {"userId":req.user.username});
});

/* GET search page. */
router.get('/search', function(req, res, next) {
  res.render('search');
});

/* GET signup page. */
router.get('/signup', function(req, res, next) {
  res.render('signup');
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
          res.redirect('/profile');
        }
      });
    }
  });
});

/* Post Likes */
// router.post('/likes', function(req, res, next) {
//   var userId = req.user._id;
//   var beerId = req.params.id;
//   console.log(userId);
//   var likes = new Likes({ userId: userId });
//     likes.save(likes, beerId, function(error) {
//       if (error) {
//         res.send(error);
//       } else {
//         res.json(likes);
//         res.send('Beer Liked!');
//         }
//     });
// });

module.exports = router;
