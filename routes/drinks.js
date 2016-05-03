var express = require('express');
var router = express.Router();
var request = require('request');
var apiKey = process.env.LCBO_KEY;
/* GET users listing. */

router.get('/likes', function(req,res,next){
  console.log('the get likes endpoint has been hit');
});

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




module.exports = router;




module.exports = router;
