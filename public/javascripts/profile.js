 var beerList = [];
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


  for (var i = 0; i < arrLikes.length; i++) {
    $.ajax({
    url:'/api/beers/' + arrLikes[i].beerId,
    method:'GET',
    dataType:'JSON'
    })
    .done(function(data, textStatus){
      beerList.push(data);
    })
    .fail(function(data, textStatus){
      console.log(data)
      console.log("ERROR getting beers. status: " + textStatus);
    });
  }
}


