

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
  for(i = 0; i < list.length; i++){
    appendToList(beerId[i] , list[i])
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
    console.log('clicked');
    $(this).next().slideToggle();
  })
  $('.submit-review').click(function(){
      console.log('clicked Submit');
      var submitBtn = $(this);
      var beerId = submitBtn.data('id');
      var textBox = $(this).prev()
      var userReview = textBox.val();
      console.log(userReview);
      $.ajax({
        url: '/api/likes',
        method:'POST',
        dataType:'json',
        data:{ id : beerId, review: userReview}
      })
      .done(function(data, textStatus){
        textBox.val(null)
        submitBtn.attr('disabled', true)
      })
      .fail(function(err, textStatus){
        console.log(err);
      })
  })
}

function appendToList(id , name){
  var textArea = '<div  class="showOnClick hideOnLoad" ><textarea class="comment-box" name="textarea" rows="7" cols="25" placeholder="Write a quick review here"></textarea> <button class="submit-review"  data-id="' + id + '" >Submit Review</button> </div>'
  $('#beerList').append('<li><a href="/beers/' + id + '" >' + name + '</a><button class="hideOnLoad button" data-id="' + id + '">Like!</button> ' + textArea + '</li>');
}
