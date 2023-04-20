
$(function(){
    $('.cineLogin-popup').click(function(e){
        e.preventDefault();
        $('.cinemalogin-fade').show();
    });
    $('.cinemalogin-close').click(function(){
        $('.cinemalogin-fade').hide();
    });
});

$(function(){
    $(window).on('scroll', function(){
        if( $(window).scrollTop() > 200){
         $('.cinema-angletop').fadeIn();
        }else{
         $('.cinema-angletop').fadeOut();
        }
      });


      $('.cinema-angletop').click(function(e){
         e.preventDefault();
         $('html,body').animate({
            scrollTop:'0'
         }, 300);
      })






});