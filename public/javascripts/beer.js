var listOfPeople = [];
var beerId = window.location.pathname.split('/');
  beerId = beerId[beerId.length - 1];
var likes = [];

$(document).ready(function() {
$('.like').data('id', beerId);
getUsers(beerId);
getBeerInfo();
setEventForLike();

});


function getUsers(beerId){
  $.ajax({
  url:'/api/likes/beers/' + beerId,
  method:'GET',
  dataType:'JSON'
  })
  .done(function(data, textStatus){
    likes = data;
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
    $('#usersList').append('<div class="well well-sm col-sm-3"><a href="/users/'+ listOfPeople[i]._id + '">' + listOfPeople[i].username + '</a><p>"' + likes[i].review + '"</p></div>');
  }
}

//function to add likes to db
function setEventForLike(){
  $('.like').click(function(e){
    console.log('clicked');
    $(this).next().slideToggle();
  })
  $('.like').click(function(){
      console.log('clicked Submit');
      var submitBtn = $(this);
      var beerId = submitBtn.data('id');
      var textBox = $('#review');
      var userReview = textBox.val();
      console.log(userReview);
      $.ajax({
        url: '/api/likes',
        method:'POST',
        dataType:'json',
        data:{ id : beerId, review: userReview}
      })
      .done(function(data, textStatus){
        textBox.val(null);
        submitBtn.attr('disabled', true);
        submitBtn.parent().slideToggle();
      })
      .fail(function(err, textStatus){
        console.log(err);
      })
  })
}

