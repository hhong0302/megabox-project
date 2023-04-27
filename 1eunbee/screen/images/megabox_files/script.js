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

  /********항목 클릭**********/

// $(document).on('click', '.scr-cho',function(){
    
//   let scr = $('#st1').val();


//   console.log(scr);

//   if(scr == '1'){
//       $('#scr-mov1').css('display','block');
//       $('#scr-mov2').css('display','none');
//   // }else if(scr == '2'){
//   //     $('#scr-mov1').css('display','none');
//   //     $('#scr-mov2').css('display','block');
//   // }else if(chk == '3'){
//   //   $('#login-id3').css('display','none');
//   //   $('#login-id2').css('display','block');
// }
// });

        /***************영화별, 극장별, 특별관 부분****************/
$(document).on("click" , ".st", function(){
  let scr = $(this).attr("value");
  console.log(scr);
  
  if(scr == '1'){
          $('#scr-mov1').css('display','block');
          $('#scr-mov2').css('display','none');
          $('#scr-mov3').css('display','none');
          $('#st1').css('')
  }else if(scr == '2'){
          $('#scr-mov1').css('display','none');
          $('#scr-mov2').css('display','block');
          $('#scr-mov3').css('display','none');
  }else if(scr == '3'){
          $('#scr-mov1').css('display','none');
          $('#scr-mov2').css('display','none');
          $('#scr-mov3').css('display','block');
  }
});

/**********오른쪽 클릭부분*****************/
$(document).on("click" , ".scr-list-under", function(){
  let scr = $(this).attr("value");
  console.log(scr);
  
  if(scr == '1'){
          $('#scr-list-sub').css('display','block');
          $('#scr-list-sub1').css('display','none');
  // }else if(scr == '2'){
  //         $('#scr-mov1').css('display','none');
  //         $('#scr-mov2').css('display','block');
  //         $('#scr-mov3').css('display','none');
  // }else if(scr == '3'){
  //         $('#scr-mov1').css('display','none');
  //         $('#scr-mov2').css('display','none');
  //         $('#scr-mov3').css('display','block');
  // }
});
