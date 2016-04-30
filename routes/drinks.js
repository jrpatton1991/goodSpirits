var express = require('express');
var router = express.Router();
var request = require('request');
var apiKey = process.env.LCBO_KEY;
/* GET users listing. */


router.get('/beers', function(req,res,next){
  var beers = []
  for( var i = 1; i <= 11 ; i ++){
    request.get( 'http://www.lcboapi.com/products?per_page=100&page='+ i +'&q=beer&access_key=' + apiKey,
     function(err, data){
       var beerList = JSON.parse(data.body);
       beers = beers.concat(beers, beerList);
       console.log(beerList.pager.is_final_page)

       if(beerList.pager.is_final_page){
         console.log(beerList.pager.is_final_page)
         res.json(beers);
       };
    });
  };
});




module.exports = router;
