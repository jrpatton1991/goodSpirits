

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
  var searchedId = [];
  var searchedBeers = [];
  for (var i = 0, j = 0; i < beerName.length; i++) {
    if (beerName[i].match(new RegExp(string, "gi"))){
      searchedBeers[j] = beerName[i]
      searchedId[j] = beerId[i]
      j++;
    }
  }
  $('#beerList').html(null)
  listArr(searchedBeers, searchedId)
}

function listArr(list , id){
  for(i = 0; i < list.length; i++){
    let currentBeerId = id[i] || beerId[i];
    appendToList(currentBeerId, list[i])
  };
  setEventForLike();
}


function getBeers(){
  $('#beerList').html('loading...');
  $.ajax({
    url: '/api/beers',
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
      appendToList(beerId[i] , beerName[i])
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
    $(this).next().slideToggle();
  })
  $('.submit-review').click(function(){
      var submitBtn = $(this);
      var beerId = submitBtn.data('id');
      var textBox = $(this).prev();
      var userReview = textBox.val();
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

function appendToList(id , name){
  var textArea = '<div  class="showOnClick hideOnLoad" ><textarea class="comment-box" name="textarea" rows="5" cols="25" placeholder="Write a quick review here"></textarea> <button class="submit-review"  data-id="' + id + '" >Submit Review</button> </div>'
  $('#beerList').append('<div class="well well-sm col-sm-3"><a href="/beers/' + id + '" >' + name + '</a><button class="hideOnLoad button" data-id="' + id + '">Like!</button> ' + textArea + '</div>');
}
