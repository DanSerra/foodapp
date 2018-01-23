//st-screen
//st-function effect
function loadPage() {
  $("#nd-screen").hide(5000,
    function (){
    $("#nd-screen").show();
  });
}
//nd-function effect
  $("#st-screen").hide();
  $("#st-screen").fadeIn(5000,
  function(){
    $ ("#st-screen").hide();
  });
//nd-screen
//input
function loadPage() {
 $("#searcher").keyup(filterRestaurante);
}
//crear elemento Dom
console.log(restaurante);
var $newRestaurante = $("<article />", {
 "class": "card-panel hoverable"
});
var $containerRestauranteName = $("<h4 />");
