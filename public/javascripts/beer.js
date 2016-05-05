var listOfPeople = [];
var beerId = window.location.pathname.split('/');
  beerId = beerId[beerId.length - 1];

$(document).ready(function() {

getUsers(beerId);
getBeerInfo();

});


function getUsers(beerId){
  $.ajax({
  url:'/api/likes/beers/' + beerId,
  method:'GET',
  dataType:'JSON'
  })
  .done(function(data, textStatus){
    getUserNames(data);
  })
  .fail(function(data, textStatus){
    console.log("ERROR getting likes. status: " + textStatus);
  });
}

function getUserNames(likes) {
  for(i = 0; i < likes.length; i++){
  var userId = likes[i].userId;
  $.ajax({
    url: '/api/users/' + userId,
    method: 'GET',
    dataType: 'JSON'
  })
  .done(function(data, textStatus){
    listOfPeople.push(data);
    $('#usersList').html(null);
    listUsers();
  })
  .fail(function(data, textStatus){
    console.log("ERROR getting likes. status: " + textStatus);
  });
}
}

function getBeerInfo() {
  $.ajax({
    url: '/api/beers/' + beerId,
    method: "GET",
    JSON: 'JSON'
  })
  .done(function(data, textStatus){
    getBeerImg(data);
    $('#beerheader').text(data.name);
  })
  .fail(function(data, textStatus){
    console.log("ERROR getting likes. status: " + textStatus);
  });
}

function getBeerImg(beerInfo) {
  $('#beerimg').attr('src', beerInfo.image_thumb_url);
}

function listUsers(){
  for(i = 0; i < listOfPeople.length; i++){
    console.log(listOfPeople[i]);
    $('#usersList').append('<li><a href="/users/'+ listOfPeople[i]._id + '">' + listOfPeople[i].username + '</li>');
  }
}
