var express = require('express');
var router = express.Router();
var request = require('request');
var apiKey = process.env.LCBO_KEY;
/* GET users listing. */


router.get('/beers', function(req,res,next){
  request.get( 'http://www.lcboapi.com/products?per_page=5&q=beer&access_key=' + apiKey,
   function(err, data){
    var beers =  JSON.parse(data.body);
    res.json(beers.result[4])
  })
  console.log
})




module.exports = router;
