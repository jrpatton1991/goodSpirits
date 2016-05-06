var express = require('express');
var passport = require('passport');
var User = require('../models/user');
var router = express.Router();
var Likes = require('../models/likes');
var mongoose = require('mongoose');
var Likes = require('../models/likes');
var apiKey = process.env.LCBO_KEY;
var request = require('request');


/* GET profile page. */
router.get('/users/:id', function(req, res, next) {
  var userId = req.params.id;
  User.find({ "_id": userId }, function(error, data) {
    console.log(data);
    res.json(data[0]);
  })
});

//Get all beers from external API
router.get('/beers', function(req,res,next){
  var beers = [];
  for( var i = 1; i <= 11 ; i ++){

    request.get('http://www.lcboapi.com/products?per_page=100&page='+ i +'&q=beer&access_key=' + apiKey,
     function(err, data){
       var beerList = JSON.parse(data.body);
       Array.prototype.push.apply(beers, beerList.result);
       console.log(beers.length);
       if(beers.length >= 1022){
         res.json(beers);
       }
    });
  }
});

/* Post Likes to our DB */
router.post('/likes', function(req, res, next) {
  var userId = req.user._id;
  var beerId = req.body.id;
  var review = req.body.review;
  var likes = new Likes({ userId: userId, beerId: beerId, review:review });

  Likes.find({ "userId": userId, "beerId": beerId }, function(error, data) {
    console.log(data);
    console.log(error);
    if (data.length === 0) {
     likes.save(likes, function(error) {
       if (error) {
        res.send(error);
       } else {
        console.log(likes);
        res.json(likes);
      }
    })
    }else {
       console.log('NO!');
    }
  })
});




//Get Individual Beers from API
router.get('/beers/:id', function(req, res, next) {
  var beerId = req.params.id;
  console.log("beerId------------------- " + beerId);
  request.get('http://www.lcboapi.com/products/' + beerId, function(err, data){
    res.json(JSON.parse(data.body).result);
  });
});

//Get Individual User Likes
router.get('/me', function(req, res, next) {
  var userId = req.user._id;

  Likes.find({ "userId": userId }, function(error, data) {

  res.json(data);
})
});

//Get Who Likes Individual Beer
router.get('/likes/beers/:id', function(req, res, next) {
  var beerId = req.params.id;
  Likes.find({"beerId": beerId}, function(err, data) {
    res.json(data);
  })
})

//Get likes of individual user
router.get('/likes/users/:id', function(req, res, next) {
  var userId = req.params.id;
  Likes.find({"userId": userId}, function(err, data) {
    res.json(data);
  })
})

//Get likes of individual beers

router.get('/likes', function(req,res,next){
  var beerId = req.params.id;
  Likes.find({}, function(err, data) {
    res.json(data);
  })
})

module.exports = router;
