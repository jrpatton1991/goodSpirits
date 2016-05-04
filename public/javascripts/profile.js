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
      $("#beerlikes").html(null);
      listLikes();
    })
    .fail(function(data, textStatus){
      console.log(data)
      console.log("ERROR getting beers. status: " + textStatus);
    });
  }
}

function listLikes(){
  for(i = 0; i < beerList.length; i++){
    $('#beerlikes').append('<li>' + beerList[i].name + '</li>');
  }
};
