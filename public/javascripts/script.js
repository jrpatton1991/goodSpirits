//global vars
var beerName = [];

// on dom load
$(document).ready(function() {
  //ajax call to get the list of beers
  getBeers();
  // keypress event listener for search
  $('#searchForBeer').keypress(function(e){
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

  $('#beerList').html(null)
  listArr(searchedBeers)
}
function listArr(list){
  console.log(list[0]);
  for(i = 0; i < list.length; i++){
    $('#beerList').append('<li>' + list[i] + '</li>');
  };
}




function getBeers(){
  $.ajax({
    url: '/drinks/beers',
    method:'get',
    dataType:'json'
  })
  .done(function(data, textStatus){
    for( var i = 0; i < data.length; i++){
      beerName.push(data[i].name);
    }

  })
  .fail(function(err, textStatus){
    console.log(err);
  })
}
