var express = require('express');
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
})

/* GET profile page. */
router.get('/profile', isLoggedIn, function(req, res, next) {
  res.render('profile');
})

/* GET search page. */
router.get('/search', function(req, res, next) {
  res.render('search');
})

/* GET signin page. */
router.get('/signin', function(req, res, next) {
  res.render('signin');
})

module.exports = router;
