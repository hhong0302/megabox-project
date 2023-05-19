/************상단바************/
var movieNM;

$(function(){
    $(window).scroll(function(){
      const navHeight = $(window).height();
      console.log(navHeight);
      if($(window).scrollTop() > 100){
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
  console.log("버튼 클릭 : " + scr);
  if(scr == '1'){
          $('#scr-mov1').css('display','block');
          $('#scr-mov2').css('display','none');
          $('#scr-mov3').css('display','none');
          $('.scr-cho._one').css({'background-color':'#fff',
                                 'color':'#351f66', //#351f66
                                 'border-right':'none'});
          $('._movie').css({"background": "url(/images/ico-tab-movie-on.png) no-repeat",
                        'border-right':'none'}); //영화별
          $('._thea').css("background","url(../images/ico-tab-theater.png)no-repeat");//극장별 
          $('._spec').css("background","url(../images/ico-tab-special.png)no-repeat");//특별관                             
          $('.scr-cho._two').css({'color':'#444',
                                'background-color':'#f2f4f5'});
          $('.scr-cho._thr').css({'color':'#444',
                                 'background-color':'#f2f4f5'});
  }else if(scr == '2'){
          $('#scr-mov1').css('display','none');
          $('#scr-mov2').css('display','block');
          $('#scr-mov3').css('display','none');
          $('._thea').css({"background":"url(../images/ico-tab-theater-on.png)no-repeat",
                        'border-right':'none'}); 
          $('._movie').css("background","url(../images/ico-tab-movie.png)no-repeat"); 
          $('._spec').css("background","url(../images/ico-tab-special.png)no-repeat"); 
          $('.scr-cho._one').css({'background-color':'#f2f4f5',
                                 'color':'#444'}); 
          $('.scr-cho._two').css({'background-color':'#fff',
                                 'color':'#351f66'}); //#351f66
          $('.st').css('border-right', 'none');
          $('.scr-cho._thr').css({'background-color':'#f2f4f5',
                                 'color':'#444'});
  }else if(scr == '3'){
          $('#scr-mov1').css('display','none');
          $('#scr-mov2').css('display','none');
          $('#scr-mov3').css('display','block');
          $('._movie').css({"background": "url(/images/ico-tab-movie.png) no-repeat",
                        'border-right':'none'}); //영화별
          $('._thea').css("background","url(../images/ico-tab-theater.png)no-repeat");//극장별 
          $('._spec').css("background","url(../images/ico-tab-special-on.png)no-repeat");//특별관                             
          $('.scr-cho._one').css({'background-color':'#f2f4f5',
                                 'color':'#444'});
          $('.scr-cho._two').css({'background-color':'#f2f4f5',
                                 'color':'#444'});
          $('.scr-cho._thr').css({'background-color':'#fff',
                                 'color':'#351f66', //#351f66
                                 'border-right': 'none'});
  }
});


/**********오른쪽 클릭부분*****************/
$(document).on("click" , ".scr-list-under", function(){
  let scr = $(this).attr("value");
  
  if(scr == '1'){
          $('#under1').css('border-bottom','2px solid #444');
          $('#under2').css('border-bottom','none'); 
          $('#scr-list-sub').css('display','block');
          $('#scr-list-sub1').css('display','none');
  }else if(scr == '2'){
          $('#under1').css('border-bottom','none');     
          $('#under2').css('border-bottom','2px solid #444');
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
        let arr =['슈퍼','드림','슬램덩크','존윅','스즈메','무명'];
        
        for(let i=1; i<=arr.length; i++){
                if(scr2==arr[i-1]){
                        $('#img1').css('display','none');
                        $('#img2').css('display','none');
                        $('#img3').css('display','none');
                        $('#img4').css('display','none');
                        $('#img5').css('display','none');
                        $('#img6').css('display','none');
                        $('#img'+i).css('display','block');
                }
                
        }
        movieNM = scr2;
      });

      /***********스즈메 무대인사 *************/

        $(document).on("click" , ".btn", function(){
        let scr3 = $(this).attr("value");
        console.log(scr3);
        
        if(scr3 == '스즈메'){
                $('.scr-moon1').css('display','block');
                $('.scr-moon-1').css('display','block');
                $('.scr-moon-0').css('display','none');
                $('.scr-moon-2').css('display','none');
                $('.scr-moon-3').css('display','none');
                $('.scr-mo-list-first-moon').css('display','block');
                // $('.scr-mo-list-first-ma').css('display','none');


        }else if(scr3 != '스즈메'){
                $('.scr-moon1').css('display','none');
                $('.scr-moon-1').css('display','none');
                $('.scr-moon-0').css('display','block');
                $('.scr-moon-2').css('display','none');
                $('.scr-moon-3').css('display','none');
                // $('.scr-mo-list-first-moon').css('display','none');
                // $('.scr-mo-list-first-ma').css('display','block');
        }   
      });

      /***********클릭시 배경색 변경*****************/
      $('.scr-list-box-btn').click(function(){
        let id = $(this).attr("id");
    });
    /***********클릭시클래스 변경****************/
    $(document).on("click" , ".btn222", function(){
        let scr6 = $(this).attr("value");
        console.log(scr6);
        
        let arr2=['상영서울','상영경기','상영인천','상영대전','상영부산','상영광주','상영강원'];
        for(let c=1;c<=arr2.length;c++){
                if(scr6==arr2[c-1]){
                $('#box1').css({'color':'#444',
                               'background':'#fff'});
                $('#box2').css({'color':'#444',
                                'background':'#fff'});
                $('#box3').css({'color':'#444',
                                'background':'#fff'});
                $('#box4').css({'color':'#444',
                                'background':'#fff'});
                $('#box5').css({'color':'#444',
                                'background':'#fff'});
                $('#box6').css({'color':'#444',
                                'background':'#fff'});
                $('#box7').css({'color':'#444',
                                'background':'#fff'});
                $('#box'+c).css({'color':'#fff',
                                'background':'#444'});
                }
        }
});
    /***************상영시간표******************/
    $(document).on("click" ,".scr-list-box-btn", function(){
        let scr4 = $(this).attr("value");
        console.log(scr4);
        console.log(movieNM);

        let arr1 =['상영서울','상영경기','상영인천'];
        
        for(let i=1; i<=arr1.length; i++){
                if(movieNM == "슈퍼"){
                        //alert(1);
                        if(scr4==arr1[i-1]){
                                $('#mo-chan1').css('display','none');
                                $('#mo-chan2').css('display','none');
                                $('#mo-chan3').css('display','none');
                                $('#mo-chan'+i).css('display','block');
                        }
                }
                if(movieNM == "스즈메"){
                        console.log(2);
                        if(scr4==arr1[i-1]){
                                $('#mo-chan111').css('display','none');
                                $('#mo-chan112').css('display','none');
                                $('#mo-chan113').css('display','none');
                                $('#mo-chan11'+i).css('display','block');
                        }

                }
        
        }
});

/****************달력 변경********************/
function btn(e, color){
        const Btn = document.getElementsByClassName('bee-btn');
      
        for(let i = 0; i<Btn.length; i++){
          Btn[i].style.backgroundColor = "";
          Btn[i].style.borderBottom = "none";
        }
        e.style.backgroundColor = "#f7f8f9";
        e.style.borderBottom = "3px solid #503396";
      }
      document.getElementById('btn-chan');

      /*****************클릭시 변경**********************/
      $(document).on("click", ".btn", function() {
        $('.btn').css({'background': '', 
                                'color': '' 
        });
        $(this).css({'background': '#444',
                        'color': '#fff'
        });
        
      });

      /***************상여시간표 hover*********************/
//       $(document).ready(function() {
//         $('.scr-time-box').hover(
//             function() { 
//                 $(this).hide();
//                 $(this).siblings('.scr-time-box1').show();
//             },
//             function() { 
//                 $(this).siblings('.scr-time-box1').hide();
//                 $(this).show();
//             }
//         );
//     });
    /****************극장별************************/
    $(document).on("click", ".scr-list-under", function() {
        $('.scr-list-under').css('border-bottom', 'none',);
        $(this).css('border-bottom','2px solid #444'
        );
        
      });

      /**************극장별***************/

      $(document).on("click" , ".btn", function(){
        let scr3 = $(this).attr("value");
        console.log(scr3);
        
        if(scr3 == '강남'){
                $('.scr-moon-0').css('display','none');
                $('.scr-moon-1').css('display','none');
                $('.scr-moon-2').css('display','block');
                $('.scr-moon-3').css('display','none');
                $('.scr-cinema-sub').css('display','block');
                $('#mo-chan1').css('display','none');
                $('#mo-chan2').css('display','none');
                $('#mo-chan3').css('display','none');
                $('#mo-chan113').css('display','none');
                $('#mo-chan112').css('display','none');
                $('#mo-chan111').css('display','none');
                $('.scr-list-box').css('display','none');

        }if(scr3 == '성수'){
                $('.scr-moon-0').css('display','none');
                $('.scr-moon-1').css('display','none');
                $('.scr-moon-2').css('display','none');
                $('.scr-moon-3').css('display','block');
                $('.scr-cinema-sub').css('display','block');
                $('#mo-chan1').css('display','none');
                $('#mo-chan2').css('display','none');
                $('#mo-chan3').css('display','none');
                $('#mo-chan113').css('display','none');
                $('#mo-chan112').css('display','none');
                $('#mo-chan111').css('display','none');
                $('.scr-list-box').css('display','none');

        }if(scr3 == '슈퍼'){
                $('.scr-cinema-sub').css('display','none');
                $('.scr-list-box').css('display','block');
                $('.scr-mo-list-first-ma').css('display','block');
                $('.scr-mo-list-first-moon').css('display','none');
               

        }if(scr3 == '스즈메'){
                $('.scr-cinema-sub').css('display','none');
                $('.scr-mo-list-first-ma').css('display','none');
                $('.scr-mo-list-first-moon').css('display','block');
                $('.scr-list-box').css('display','block');
        }          
      });

      /************hover할때******************/
/*$(document).on("mouseover", "#test1", function(){
        //console.log(111);
        console.log(111);
        //$('.scr-time-box').css({'background-color':'red'});
        
        $('#test1').hide();
        $('#test2').show();
});

$(document).on("mouseout", "#test2", function(){
        //$('.scr-time-box').css({'background-color':'#fff'});
        console.log(2222);
        $('#test1').show();
        $('#test2').hide();
});*/

function test(){
        console.log('testFunction');

}