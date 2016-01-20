$(document).ready(function(){
  var menuToggle = $('#mobile-menu-button').unbind();
  var moreToggle = $('.more').unbind();
  
  $('#nav-menu').removeClass("show");

  menuToggle.on('click', function(e){
    e.preventDefault();
    $('#nav-menu').slideToggle(function(){
      if($('#nav-menu').is(':hidden')) {
        $('#nav-menu').removeAttr('style');
      }
    });
  });
  
  moreToggle.on('click', function(e){
    $(this).find('#sub-menu').slideToggle(function(){
      if($('#sub-menu').is(':hidden')) {
        $('#sub-menu').removeAttr('style');
      }
    });
  }); 
});