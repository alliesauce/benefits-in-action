(function($){
  console.log("jquery loaded");
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $(".dropdown-button").dropdown(
      { hover: false }
    ); // activates drodown option in NAV menu

  }); // end of document ready
})(jQuery); // end of jQuery name space
