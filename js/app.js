$(document).ready(function() {
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
      $("#st-screen").hide();
    });

    showPlaces (places);
    $('#search').keyup(filterPlaces);
    $('.modal').modal ();

});

//nd-screen
//input

// filter for each places
function filterPlaces() {
 if ($("#searcher").val().trim().length > 0){
   var searchedPlaces = $('#search'). val().toLowerCase();
   var filteredPlace = places.filter (function(item) {
   return item.name.toLowerCase().indexOf(searchedPlaces) >= 0;
   })
 showPlaces (filteredPlace);
}else {
$ ("#places-list").empty ();
 showPlaces(places);
}
};

//paint modal
function paintMondal() {
  var name = $(this).data('name');
  $(document).on('click', 'modales', paintMondal);
  $(document).ready(loadPage);
}
