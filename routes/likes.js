var express = require('express');
var passport = require('passport');
var User = require('../models/user');
var router = express.Router();
var Likes = require('../models/likes');
var mongoose = require('mongoose');

/* Post Likes */
router.post('/', function(req, res, next) {
  var userId = req.user._id;
  var beerId = req.params.id;
  console.log(userId);
  var likes = new Likes({ userId: userId, beerId: beerId });
    likes.save(likes, function(error) {
      if (error) {
        res.send(error);
      } else {
        res.json(likes);
        res.send('Beer Liked!');
        }
    })
})

// var liked = req.user._id;

// liked.find({ userId: userId, beerId: beerId });


module.exports = router;
