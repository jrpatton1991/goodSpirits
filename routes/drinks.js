var express = require('express');
var router = express.Router();
var request = require('request');


router.get('/:id', function(req, res, next) {
  var beerId = req.params.id;

  res.render('beer', {page: 'singleBeer'});
})

module.exports = router;
