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


router.get('/beer/:id', function(req, res, next) {
  var beerId = req.params.id;

  Likes.find({ "beerId": beerId }, function(error, data) {
    var nameList = [];

    for (var i = 0; i < data.length; i++) {
       console.log(" user data: " +data[0].userId);
       var userId = data[i].userId;
      User.find({'_id': data[i].userId}, function (err, foundById) {
        console.log(" id username: " + foundById);
        nameList.push(foundById);
      })
    }
    while( data.length !== nameList.length){
      console.log(nameList);
    res.render('beer', {users: nameList})
    }


})
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
