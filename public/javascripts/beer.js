var listOfPeople = [];

$(document).ready(function() {

var beerId = window.location.pathname.split('/');
  beerId = beerId[beerId.length - 1];

getUsers(beerId);

});


function getUsers(beerId){
  $.ajax({
  url:'/api/likes/beers/' + beerId,
  method:'GET',
  dataType:'JSON'
  })
  .done(function(data, textStatus){
    getUserNames(data)
  })
  .fail(function(data, textStatus){
    console.log("ERROR getting likes. status: " + textStatus);
  });
}

function getUserNames(likes) {
  var userId = likes[0].userId;
  $.ajax({
    url: '/api/users/' + userId,
    method: 'GET',
    dataType: 'JSON'
  })
  .done(function(data, textStatus){
    listOfPeople.push(data);
  })
  .fail(function(data, textStatus){
    console.log("ERROR getting likes. status: " + textStatus);
  });
}
