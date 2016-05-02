var express = require('express');
var passport = require('passport');
var User = require('../models/user');
var router = express.Router();

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
    console.log(err)
   res.redirect('/profile');
  });

/* GET profile page. */
router.get('/profile', isLoggedIn, function(req, res, next) {
  res.render('profile');
})

/* GET search page. */
router.get('/search', function(req, res, next) {
  res.render('search');
})

/* GET signup page. */
router.get('/signup', function(req, res, next) {
  res.render('signup');
})

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
  })
});

/* Post Likes */
router.post('likes/:id', isLoggedIn, function(req, res, next) {
  var userId = req.body.username;
  var beerId = req.params.id;

  var likes = new Likes({ userId: userId });
    Likes.insert(likes, beerId, function(error) {
      if (error) {
        res.send(error);
      } else {
        likes.save(function(err, user) {
          if (err) console.log(err);
        })
          res.json(likes);
          res.send('Beer Liked!');
        }
    })
})

module.exports = router;
