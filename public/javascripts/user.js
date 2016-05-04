 var beerList = [];
$(document).ready(function(){
getLikes();


});


function getLikes(){
  var userId = window.location.pathname.split('/');
  userId = userId[userId.length - 1];
  console.log(userId);
  $.ajax({
  url:'/api/likes/users/' + userId,
  method:'GET',
  dataType:'JSON'
  })
  .done(function(data, textStatus){
    console.log(data);
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
    $('#beerlikes').append('<li><a href="/beers/'+beerList[i].id + '">' + beerList[i].name + '</a></li>');
  }
};
