var express = require('express');
var passport = require('passport');
var User = require('../models/user');
var router = express.Router();
var Likes = require('../models/likes');
var mongoose = require('mongoose');

/* Post Likes */
router.post('/', function(req, res, next) {
  var userId = req.user._id;
  var beerId = req.body.id;
  var username = req.user.username;
  var likes = new Likes({ userId: userId, beerId: beerId, username: username });

  Likes.find({ "userId": userId, "beerId": beerId }, function(error, data) {
    // console.log(data);
    console.log(error);
    if (data.length === 0) {
     likes.save(likes, function(error) {
       if (error) {
        res.send(error);
       } else {
        res.json(likes);
      }
    })
    }else {
       console.log('NO!');
    }
  })
});

router.get('/user', function(req, res, next) {
  var userId = req.user._id;

  Likes.find({ "userId": userId }, function(error, data) {

  res.send(data)
})
});

module.exports = router;
