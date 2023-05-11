$(document).ready(function(){
  $(".banner").cycle('scrollLeft'); 
  
  
  
  $("#bar_icon").click(function(){
    $(" .media_menu  ").toggle(1000);
  });





  $("#discription_read").click(function(){
    $(" .discription_lorem  ").css("display", "block");
  });

  $("#service_read").click(function(){
    $(" .service_lorem  ").css("display", "block");
  });






$('.btn-like').click(function() {
    $('.badge').html(function(i, val) { return val*1+1 });
});

$('.btn-dislike').click(function() {
  $('.badge').html(function(i, val) { return val*1-1 });
});






  $('.slick-carousel').slick({
    slidesToShow: 3, 
    slidesToScroll: 1, 
    autoplay: true,
    autoplayspeed: 2000,
    nextArrow: $('.next'),
    prevArrow: $('.prev'),  
  });
});




