$(function(){

    let interval = setInterval(slideInOut, 3000);

   

    function slideInOut(){
        $('.slidein').animate({
            'left':'-385px'
        }, 500, function(){
            $('.slidein img:eq(0)').clone().appendTo('.slidein');
            $('.slidein img:eq(0)').remove();
            $('.slidein').css('left', 0);
        });
    }


    let interval2 = setInterval(slideInOut2, 3000);



    function slideInOut2(){
        $('.slidein2').animate({
            'top':'-230px'
        }, 500, function(){
            $('.slidein2 img:eq(0)').clone().appendTo('.slidein2');
            $('.slidein2 img:eq(0)').remove();
            $('.slidein2').css('top', 0);
        });
    }







    $('.benebtn-stop').click(function(){
        clearInterval(interval);
    });
    $('.benebtn-stop').click(function(){
        clearInterval(interval2);
    });


    







});




