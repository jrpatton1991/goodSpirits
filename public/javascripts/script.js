$(document).ready(function() {
  $.ajax({
    url: '/drinks/beers',
    method:'get',
    dataType:'json'
  })
  .done(function(data, textStatus){
    for( var i = 0; i < data.length; i++){
      $('#beerList').append('<li>' + data[i].name + '</li>')
    }

  })
  .fail(function(err, textStatus){
    console.log(err);
  })

});
