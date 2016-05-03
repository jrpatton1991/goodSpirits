$(document).ready(function(){
 getBeer();
 // getLikes();


 }


//function to get Beer data from API

function getBeer() {
  $.ajax({
    url: '/beer/:id',
    type: 'GET',
    dataType: 'JSON',
    // data: {param1: ''},
  })
  .done(function() {
    console.log(data);
  })
  .fail(function() {
    console.log("error");
  })

}



function getLikes() {
//Likes from our own DB
  $.ajax({
    url: '/user',
    type: 'GET',
    dataType: 'JSON',
    data: {id: userId , beerId: beerId },
  })
  .done(function() {
    console.log("success");
  })
  .fail(function() {
    console.log("error");
  })
  .always(function() {
    console.log("complete");
  });
  }

