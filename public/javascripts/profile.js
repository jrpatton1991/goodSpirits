 var beerList = [];
 var likeList = [];
$(document).ready(function(){
getLikes();


});


function getLikes(){
  var url = ""
  var urlPathName = window.location.pathname.split('/');
  urlPathName = urlPathName[urlPathName.length - 1];
  if (urlPathName == "profile"){
    url = '/api/me';
  }else{
    url = '/api/likes/users/' + urlPathName;
  }
  console.log(url);
  $.ajax({
  url: url,
  method:'GET',
  dataType:'JSON'
  })
  .done(function(data, textStatus){
    likeList = data;
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
    var like = likeList[i].review;
    console.log(like == true)
    if (like) {
      like = '"' + like + '"';
    }
    $('#beerlikes').append('<div class="well well-sm col-sm-3"><a href="/beers/'+beerList[i].id + '">' + beerList[i].name + '</a><p>'+ like +'</p></div>');
  }
};
