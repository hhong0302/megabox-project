function openPage(pageName, e, color){
    const tabcontent = document.getElementsByClassName('cinema-tabcontent');
    const tablink = document.getElementsByClassName('cinema-tablink');
    let i;

    for(i = 0; i<tabcontent.length; i++){
        tabcontent[i].style.display = "none";
    }
    for(let i = 0; i<tablink.length; i++){
        tablink[i].style.backgroundColor = "";
        tablink[i].style.color='#444';
    }
    document.getElementById(pageName).style.display = "block";
    e.style.backgroundColor = color;
    e.style.color='#fff';

}

document.getElementById('default').click();





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







/************cinemalogin-fade***********/
$(function(){
    $('.cineLogin-popup').click(function(e){
        e.preventDefault();
        $('.cinemalogin-fade').show();
        $('body').css('overflow', 'hidden');
    
    });
    $('.cinemalogin-close').click(function(){
        $('.cinemalogin-fade').hide();
        $('body').css('overflow', 'auto');
    });







/********cinema-angletop************/
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





/**********button 비확성화********/



const idForm = document.querySelector('#user_id');
const pwForm = document.querySelector('#user_pw');
const loginButton = document.querySelector('#btn_login');



const pushValue = () => {
    pwForm.addEventListener('keyup', () => {
      if(idForm.value && pwForm.value){
        loginButton.disabled = false;
        $("#btn_login").css("background","#503396");
        $("#btn_login").css("color","#fff");
      } else {
        loginButton.disabled = true;
        $("#btn_login").css("background","#e0e0e0");
        $("#btn_login").css("color","#777");
      }
    });
  }
  
  pushValue();
