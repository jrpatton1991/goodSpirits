//global vars
var beerName = [];
var beerId = [];

// on dom load
$(document).ready(function() {
  //ajax call to get the list of beers
  getBeers();
  // keypress event listener for search
  $('#searchForBeer').keyup(function(e){
    console.log('good')
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
<<<<<<< HEAD
  $('ul').html(null)
=======
  console.log(searchedBeers)

  $('#beerList').html(null)
>>>>>>> master
  listArr(searchedBeers)
}
function listArr(list){
  console.log(list[0]);
  for(i = 0; i < list.length; i++){
<<<<<<< HEAD
    $('ul').append('<li>' + list[i] + ' <a class="hidden button" href="/likes/' + beerId[i] + '" >Like!</a></li>'  );
=======
    $('#beerList').append('<li>' + list[i] + '</li>');
>>>>>>> master
  };
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
<<<<<<< HEAD
      $('ul').append('<li>' + beerName[i] + ' <a class="hidden button" href="/likes/' + beerId[i] + '" >Like!</a></li>');
=======
      $('#beerList').append('<li>' + beerName[i] + '</li>');
>>>>>>> master
    };
  })
  .fail(function(err, textStatus){
    console.log(err);
  })
}
