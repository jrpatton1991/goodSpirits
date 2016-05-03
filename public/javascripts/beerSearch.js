

//global vars
var beerName = [];
var beerId = [];

// on dom load
$(document).ready(function() {
  //ajax call to get the list of beers
  getBeers();
  // keypress event listener for search
  $('#searchForBeer').keyup(function(e){
    updateBeerList();
  });


});

function updateBeerList(){
  string = $('#searchForBeer').val();
  var newRegexpSearch = new RegExp(string, 'gi')
  //searchedBeers = beerName;
  var searchedBeers = [];
  for (var i = 0, j = 0; i < beerName.length; i++) {
    if (beerName[i].match(new RegExp(string, "gi"))){
      searchedBeers[j] = beerName[i]
      j++;
    }
  }
  console.log(searchedBeers)

  $('#beerList').html(null)
  listArr(searchedBeers)
}
function listArr(list){
  console.log(list[0]);
  for(i = 0; i < list.length; i++){

    $('#beerList').append('<li>' + list[i] + ' <button class="hidden button" data-id="' + beerId[i] + '">Like!</button></li>'  );

  };
  setEventForLike();
}


function getBeers(){
  $('#beerList').html('loading...');
  $.ajax({
    url: '/drinks/beers',
    method:'get',
    dataType:'json'
  })
  .done(function(data, textStatus){
    for( var i = 0; i < data.length; i++){
      beerName.push(data[i].name);
      beerId.push(data[i].id);
    }
    $('#beerList').html(null);
    for(i = 0; i < beerName.length; i++){
      $('#beerList').append('<li>' + beerName[i] + ' <button class="hidden button" data-id="' + beerId[i] + '">Like!</button></li>');
    };
    // event listener for like btns
    setEventForLike();
  })
  .fail(function(err, textStatus){
    console.log(err);
  })
}

//function to add likes to db
function setEventForLike(){
  $('.button').click(function(e){
    var beerId = $(this).data('id');
    console.log('working');
    // function postLikes(){
      $.ajax({
        url: '/likes',
        method:'POST',
        dataType:'json',
        data:{ id : beerId }
      })
      .done(function(data, textStatus){
        console.log(data + " : " + textStatus)
      })
      .fail(function(err, textStatus){
        console.log(err);
      })
    // }
  })
}


