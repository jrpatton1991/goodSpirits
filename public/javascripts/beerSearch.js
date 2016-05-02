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
  console.log(searchedBeers)

  $('ul').html(null)
  listArr(searchedBeers)
}

function listArr(list){
  console.log(list[0]);
  for(i = 0; i < list.length; i++){
    $('ul').append('<li>' + list[i] + ' <a href="/likes/' + beerId[i] + '" >Like!</a></li>'  );
  };
}

function getBeers(){
  $('ul').html('loading...');
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
    $('ul').html(null);
    for(i = 0; i < beerName.length; i++){
      $('ul').append('<li>' + beerName[i] + ' <a href="/likes/' + beerId[i] + '" >Like!</a></li>');
    };
  })
  .fail(function(err, textStatus){
    console.log(err);
  })
}
