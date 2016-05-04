$(document).ready(function(){
getLikes();

});


function getLikes(){
  $.ajax({
  url:'/api/me',
  method:'GET',
  dataType:'JSON'
  })
  .done(function(data, textStatus){
    getBeers(data)
  })
  .fail(function(data, textStatus){
    console.log("ERROR getting likes. status: " + textStatus);
  });
}

function getBeers(arrLikes){
  var beerList = [];

  $.ajax({
  url:'/api/beers/' + arrLikes[0].beerId,
  method:'GET',
  dataType:'JSON'
  })
  .done(function(data, textStatus){
    console.log(data);
  })
  .fail(function(data, textStatus){
    console.log(data)
    console.log("ERROR getting beers. status: " + textStatus);
  });
}
