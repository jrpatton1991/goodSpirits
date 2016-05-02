$(document).ready(function(){
$.ajax({
  url:'/drinks/beers',
  method:'GET',
  dataType:'JSON'
})
.done(function(data, textStatus){
    beerList = data;
    console.log(beerList);
  })
  .fail(function(data, textStatus){
    console.log("ERROR getting likes. status: " + textStatus);
  });
});
