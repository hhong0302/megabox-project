
/***************fixedTop**************/
let header = document.querySelector("#cinema");
let headerHeight = header.offsetHeight;

window.onscroll = function () {
  let windowTop = window.scrollY;
  if (windowTop >= headerHeight) {
    header.classList.add("drop");
  } 
  else {
    header.classList.remove("drop");
  }
};
/******************************************/





/*************air-angletop****************/
$(function(){
  $(window).on('scroll', function(){
    if( $(window).scrollTop() > 200){
    $('.air-angletop').fadeIn();
    }else{
    $('.air-angletop').fadeOut();
    }
  });


  $('.air-angletop').click(function(e){
    e.preventDefault();
    $('html,body').animate({
        scrollTop:'0'
    }, 300);
  })

});