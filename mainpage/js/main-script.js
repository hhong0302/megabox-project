/* hong */

//fetch
fetch('data/hong-map-list.json')
.then((res)=> res.json())
.then((res)=>{
    let rs1 = res.map1;
    let rs2 = res.map2;
    let li1 = '';
    let li2 = '';
       for(let i = 0 ; i < rs1.length ; i++)
       {
           li1 += `<li id="${'hong-map-lists'+i}"><span>${rs1[i].number}</span><a href="javascript:void(0)" onmouseover="hong_map_mouseenter('${rs1[i].value}')" class="hong_map_link" id="${'hong_map_link'+i}" value="${rs1[i].value}">${rs1[i].name}</a></li>`;
       }
       for(let i = 0 ; i < rs2.length ; i++)
       {
           li2 += `<li id="${'hong-map-lists'+(i+5)}"><span>${rs2[i].number}</span><a href="javascript:void(0)" onmouseover="hong_map_mouseenter('${rs2[i].value}')" class="hong_map_link" id="${'hong_map_link'+(i+5)}" value="${rs2[i].value}">${rs2[i].name}</a></li>`;
       }
       document.getElementsByClassName('hong-search-map-list')[0].innerHTML = li1;
       document.getElementsByClassName('hong-search-map-list')[1].innerHTML = li2;
   })
   .catch((error)=>console.log(error));

//광고 x 버튼 누르면 광고 닫히기
function hong_delete()
{
    document.getElementsByClassName("hong-advertisement")[0].classList.add('hong-ad-none');
}


//hamburger 버튼 클릭 시 사이트맵 나왔다 들어갔다

    const hong_st = document.getElementsByClassName("hong-sitemap")[0];
    const hong_xbtn1 = document.getElementsByClassName("hong-btn-close")[0];
    const hong_search = document.getElementsByClassName('hong-search-map')[0];
    const hong_xbtn2 = document.getElementsByClassName("hong-btn-close")[1];
    const hong_member = document.getElementsByClassName('hong-member-map')[0];
    const hong_xbtn3 = document.getElementsByClassName("hong-btn-close")[2];

function hong_sitemap_onout()
{
    if(hong_st.style.display=="block")
    {
        hong_st.style.display="none";
        hong_xbtn1.style.display="none";
    }
    else
    {
        hong_st.style.display = "block";
        hong_xbtn1.style.display="block";
        if(hong_search.style.display=="block")
        {
            hong_search.style.display="none";
            hong_xbtn2.style.display="none";
        }
        if(hong_member.style.display=="block")
        {
            hong_member.style.display="none";
            hong_xbtn3.style.display="none";
        }
    }
}

//search 버튼 클릭 시 search맵 나왔다 들어갔다

function hong_search_onout()
{
    if(hong_search.style.display=="block")
    {
        hong_search.style.display="none";
        hong_xbtn2.style.display="none";
    }
    else
    {
        hong_search.style.display="block";
        hong_xbtn2.style.display="block";
        document.getElementById("hong-btn-ticket-rank").click();
        if(hong_st.style.display=="block")
        {
            hong_st.style.display="none";
            hong_xbtn1.style.display="none";
        }
        if(hong_member.style.display=="block")
        {
            hong_member.style.display="none";
            hong_xbtn3.style.display="none";
        }
    }
}

//member 버튼 클릭 시 member맵 나왔다 들어갔다
function hong_member_onout()
{

    if(hong_member.style.display=="block")
    {
        hong_member.style.display="none";
        hong_xbtn3.style.display="none";
    }
    else
    {
        hong_member.style.display = "block";
        hong_xbtn3.style.display="block";
        if(hong_st.style.display=="block")
        {
            hong_st.style.display="none";
            hong_xbtn1.style.display="none";
        }
        if(hong_search.style.display=="block")
        {
            hong_search.style.display="none";
            hong_xbtn2.style.display="none";
        }
    }
}

//네비게이션 메뉴에 갖다대면 바뀌는 그거


function hong_onmouse()
{
    const hong_list = document.getElementsByClassName('hong-navbar');
    const hong_navbar_list = document.getElementsByClassName('hong-navbar-list');
    const hong_nav_list = document.getElementsByClassName('hong-nav-list');
    const hong_nav_store = document.getElementsByClassName('hong-nav-store')[0];
    for(let i=0;i<hong_list.length;i++)
    {
        hong_list[i].onmouseover = ()=>
        {
            for(let j=0;j<hong_navbar_list.length;j++)
            {
                hong_navbar_list[j].style.display='none';
                hong_nav_list[j].classList.remove('hong-nav-after');
            }
            hong_navbar_list[i].style.display='block';
            hong_nav_list[i].classList.add('hong-nav-after');
        }
    }
    document.querySelector('.hong-header-all').onmouseleave = ()=>
    {
        for(let i=0;i<hong_navbar_list.length;i++)
        {
        hong_navbar_list[i].style.display='none';
        hong_nav_list[i].classList.remove('hong-nav-after');
        }
    }
    hong_nav_store.onmouseover =()=>
    {
        for(let i=0;i<hong_navbar_list.length;i++)
        {
        hong_navbar_list[i].style.display='none';
        hong_nav_list[i].classList.remove('hong-nav-after');
        }
    }
}

//이미지에 마우스 갖다대면 바뀌는 그거

const hong_map_link = document.getElementsByClassName('hong_map_link');

function hong_map_mouseenter(hong_attr)
{
    document.getElementsByClassName('hong_map_image')[0].setAttribute("src" , "images/hong-images/hong-map-"+hong_attr+".jpg");
    document.getElementsByClassName('hong_map_image')[1].setAttribute("src" , "images/hong-images/hong-map-"+hong_attr+".jpg");
}

//search-map ticket과 client 누르면 바뀌기
const hong_ticket = document.getElementsByClassName('hong-search-map-left-bottom-ticket')[0];
    const hong_client = document.getElementsByClassName('hong-search-map-left-bottom-client')[0];
    const hong_ticket_underline = document.getElementById("hong-ticket-rank");
    const hong_client_underline = document.getElementById("hong-client-rank");

function hong_map_ticket()
{
    hong_ticket.style.display="block";
    hong_ticket_underline.classList.add("hong-btn-underline");
    hong_client.style.display="none";
    hong_client_underline.classList.remove("hong-btn-underline");
    document.getElementsByClassName('hong_map_image')[0].setAttribute("src" , "images/hong-images/hong-map-"+hong_map_link[0].getAttribute('value')+".jpg");
}

function hong_map_client()
{
    hong_ticket.style.display="none";
    hong_ticket_underline.classList.remove("hong-btn-underline");
    hong_client.style.display="block";
    hong_client_underline.classList.add("hong-btn-underline");
    document.getElementsByClassName('hong_map_image')[1].setAttribute("src" , "images/hong-images/hong-map-"+hong_map_link[5].getAttribute('value')+".jpg");
}

/* hong */





/* jonghyeon */
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

$(function(){
    $('.jpuclose').click(function(){
        $('.jpopup').fadeOut(500);
    });
});
/* jonghyeon */





/* jiwon */
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

/* jiwon */





/* eunbee */

/* eunbee */





/* woodybo2 */

/* woodybo2 */