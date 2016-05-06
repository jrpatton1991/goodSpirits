//front_page.js

$(document).ready(function() {
  displayBeersLiked();
});

function displayBeersLiked(){

//use the beerId to display all beers
//use a for loop to scan through all beer Id's
//pull beer id's which have been liked

  $.ajax({
    url: 'api/likes',
    type: 'GET',
    dataType: 'JSON'
  })
  .done(function(data, textStatus) {
    for (var i = 0; i < 10; i++) {
      // console.log(data[i])
      var beerId = data[i].beerId
      getBeerName(beerId);
    }
    // console.log(data[i].beerId);
    // var beerId = data[i].beerId;
  })
  .fail(function() {
    console.log("error");
  })
}

function getBeerName(beerId){
  $.ajax({
    url: 'api/beers/'+ beerId,
    type: 'GET',
    dataType: 'JSON'
  })
  .done(function(data, textStatus) {
    console.log(data.name);
    $('#beerlikes').append('<li>' + data.name + '</li>');
    var seen = {};

  $('li').each(function() {
    var txt = $(this).text();
    if (seen[txt])
        $(this).remove();
    else
        seen[txt] = true;
});
  })
  .fail(function(err, textStatus) {
    console.log(err);
  })
}
