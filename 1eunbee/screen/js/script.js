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


        /***************영화별, 극장별, 특별관 부분****************/
$(document).on("click" , ".st", function(){
  let scr = $(this).attr("value");
  console.log(scr);
  
  if(scr == '1'){
          $('#scr-mov1').css('display','block');
          $('#scr-mov2').css('display','none');
          $('#scr-mov3').css('display','none');
          $('.scr-cho._one').css('background-color','#fff');
          $('.scr-cho._one').css('color','#351f66');
          $('.scr-cho._one').css('border-right','none');
          $('.st').css({"background":"url(../images/ico-tab-movie-on.png)"}); 
          $('.st').css('border-right','none');
          $('.scr-cho._two').css('color','#444');
          $('.scr-cho._two').css('background-color','#f2f4f5');
          $('.scr-cho._thr').css('color','#444');
          $('.scr-cho._thr').css('background-color','#f2f4f5');

  }else if(scr == '2'){
          $('#scr-mov1').css('display','none');
          $('#scr-mov2').css('display','block');
          $('#scr-mov3').css('display','none');
          $('.scr-cho._one').css('background-color','#f2f4f5');
          $('.scr-cho._one').css('color','#444');
          $('.scr-cho._two').css('background-color','#fff');
          $('.scr-cho._two').css('color','#351f66');
          $('.st').css('border-right', 'none');
          $('.scr-cho._thr').css('background-color','#f2f4f5');
          $('.scr-cho._thr').css('color','#444');
  }else if(scr == '3'){
          $('#scr-mov1').css('display','none');
          $('#scr-mov2').css('display','none');
          $('#scr-mov3').css('display','block');
          $('.scr-cho._one').css('background-color','#f2f4f5');
          $('.scr-cho._one').css('color','#444');
          $('.scr-cho._two').css('background-color','#f2f4f5');
          $('.scr-cho._two').css('color','#444');
          $('.scr-cho._thr').css('background-color','#fff');
          $('.scr-cho._thr').css('color','#351f66');
          $('.scr-cho._thr').css('border-right', 'none');
  }
});

/**********오른쪽 클릭부분*****************/
$(document).on("click" , ".scr-list-under", function(){
  let scr = $(this).attr("value");
  
  if(scr == '1'){
          $('#scr-list-sub').css('display','block');
          $('#scr-list-sub1').css('display','none');
  }else if(scr == '2'){
          $('#scr-list-sub').css('display','none');
          $('#scr-list-sub1').css('display','block');
  }
});
/************극장별**************/
$(document).on("click" , ".scr-list-under", function(){
  let scr1 = $(this).attr("value");
  console.log(scr1);
  
  if(scr1 == '서울'){
          $('#scr-list-two').css('display','block');
          $('#scr-list-two1').css('display','none');
          $('#scr-list-two2').css('display','none');
          $('#scr-list-two3').css('display','none');
          $('#scr-list-two4').css('display','none');
          $('#scr-list-two5').css('display','none');
          $('#scr-list-two6').css('display','none');
  }else if(scr1 == '경기'){
          $('#scr-list-two').css('display','none');
          $('#scr-list-two1').css('display','block');
          $('#scr-list-two2').css('display','none');
          $('#scr-list-two3').css('display','none');
          $('#scr-list-two4').css('display','none');
          $('#scr-list-two5').css('display','none');
          $('#scr-list-two6').css('display','none');
  }else if(scr1 == '인천'){
          $('#scr-list-two').css('display','none');
          $('#scr-list-two1').css('display','none');
          $('#scr-list-two2').css('display','block');
          $('#scr-list-two3').css('display','none');
          $('#scr-list-sub4').css('display','none');
          $('#scr-list-two5').css('display','none');
          $('#scr-list-two6').css('display','none');
  }else if(scr1 == '대전'){
          $('#scr-list-two').css('display','none');
          $('#scr-list-two1').css('display','none');
          $('#scr-list-two2').css('display','none');
          $('#scr-list-two3').css('display','block');
          $('#scr-list-two4').css('display','none');
          $('#scr-list-two5').css('display','none');
          $('#scr-list-two6').css('display','none');
  }else if(scr1 == '부산'){
          $('#scr-list-two').css('display','none');
          $('#scr-list-two1').css('display','none');
          $('#scr-list-two2').css('display','none');
          $('#scr-list-two3').css('display','none');
          $('#scr-list-two4').css('display','block');
          $('#scr-list-two5').css('display','none');
          $('#scr-list-two6').css('display','none');
  }else if(scr1 == '광주'){
          $('#scr-list-two').css('display','none');
          $('#scr-list-two1').css('display','none');
          $('#scr-list-two2').css('display','none');
          $('#scr-list-two3').css('display','none');
          $('#scr-list-two4').css('display','none');
          $('#scr-list-two5').css('display','block');
          $('#scr-list-two6').css('display','none');
  }else if(scr1 == '강원'){
          $('#scr-list-two').css('display','none');
          $('#scr-list-two1').css('display','none');
          $('#scr-list-two2').css('display','none');
          $('#scr-list-two3').css('display','none');
          $('#scr-list-two4').css('display','none');
          $('#scr-list-two5').css('display','none');
          $('#scr-list-two6').css('display','block');
  };
});

/***********이미지 변경 *************/

$(document).on("click" , ".btn", function(){
        let scr2 = $(this).attr("value");
        console.log(scr2);
        
        if(scr2 == '슈퍼'){
                $('#img1').css('display','block');
                $('#img2').css('display','none');
                $('#img3').css('display','none');
                $('#img4').css('display','none');
                $('#img5').css('display','none');
                $('#img6').css('display','none');
        }else if(scr2 == '드림'){
                $('#img1').css('display','none');
                $('#img2').css('display','block');
                $('#img3').css('display','none');
                $('#img4').css('display','none');
                $('#img5').css('display','none');
                $('#img6').css('display','none');
        }else if(scr2 == '슬램덩크'){
                $('#img1').css('display','none');
                $('#img2').css('display','none');
                $('#img3').css('display','block');
                $('#img4').css('display','none');
                $('#img5').css('display','none');
                $('#img6').css('display','none');
        }else if(scr2 == '존윅'){
                $('#img1').css('display','none');
                $('#img2').css('display','none');
                $('#img3').css('display','none');
                $('#img4').css('display','block');
                $('#img5').css('display','none');
                $('#img6').css('display','none');
        }else if(scr2 == '스즈메'){
                $('#img1').css('display','none');
                $('#img2').css('display','none');
                $('#img3').css('display','none');
                $('#img4').css('display','none');
                $('#img5').css('display','block');
                $('#img6').css('display','none');
        }else if(scr2 == '무명'){
                $('#img1').css('display','none');
                $('#img2').css('display','none');
                $('#img3').css('display','none');
                $('#img4').css('display','none');
                $('#img5').css('display','none');
                $('#img6').css('display','block');
        }
      });