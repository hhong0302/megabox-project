/************상단바************/
$(function(){
  $(window).scroll(function(){
    const navHeight = $(window).height();
    console.log(navHeight);
    if($(window).scrollTop() > 60){
      $('#sto').addClass('drop');
    }else{
      $('#sto').removeClass('drop');
    }
  })
});

/***********top버튼************/
$(function(){
    $(window).on('scroll', function(){
        if( $(window).scrollTop() > 300){
         $('.sto-angletop').fadeIn();
        }else{
         $('.sto-angletop').fadeOut();
        }
      });


      $('.sto-angletop').click(function(e){
         e.preventDefault();
         $('html,body').animate({
            scrollTop:'0'
         }, 300);
      })

});