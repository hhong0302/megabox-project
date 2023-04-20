//광고 x 버튼 누르면 광고 닫히기
function hong_delete()
{
    document.getElementsByClassName("hong-advertisement")[0].classList.add('hong-ad-none');
}


//hamburger 버튼 클릭 시 사이트맵 나왔다 들어갔다

function hong_sitemap_onout()
{
    const hong_st = document.getElementsByClassName("hong-sitemap")[0];
    const hong_xbtn1 = document.getElementsByClassName("hong-btn-close")[0];
    const hong_search = document.getElementsByClassName('hong-search-map')[0];
    const hong_xbtn2 = document.getElementsByClassName("hong-btn-close")[1];
    const hong_member = document.getElementsByClassName('hong-member-map')[0];
    const hong_xbtn3 = document.getElementsByClassName("hong-btn-close")[2];
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
    const hong_st = document.getElementsByClassName("hong-sitemap")[0];
    const hong_xbtn1 = document.getElementsByClassName("hong-btn-close")[0];
    const hong_search = document.getElementsByClassName('hong-search-map')[0];
    const hong_xbtn2 = document.getElementsByClassName("hong-btn-close")[1];
    const hong_member = document.getElementsByClassName('hong-member-map')[0];
    const hong_xbtn3 = document.getElementsByClassName("hong-btn-close")[2];
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
    const hong_st = document.getElementsByClassName("hong-sitemap")[0];
    const hong_xbtn1 = document.getElementsByClassName("hong-btn-close")[0];
    const hong_search = document.getElementsByClassName('hong-search-map')[0];
    const hong_xbtn2 = document.getElementsByClassName("hong-btn-close")[1];
    const hong_member = document.getElementsByClassName('hong-member-map')[0];
    const hong_xbtn3 = document.getElementsByClassName("hong-btn-close")[2];

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
    document.getElementsByClassName('hong_map_image')[0].setAttribute("src" , "login-form/images/hong-map-"+hong_attr+".jpg");
    document.getElementsByClassName('hong_map_image')[1].setAttribute("src" , "login-form/images/hong-map-"+hong_attr+".jpg");
}

//search-map ticket과 client 누르면 바뀌기


function hong_map_ticket()
{
    const hong_ticket = document.getElementsByClassName('hong-search-map-left-bottom-ticket')[0];
    const hong_client = document.getElementsByClassName('hong-search-map-left-bottom-client')[0];
    const hong_ticket_underline = document.getElementById("hong-ticket-rank");
    const hong_client_underline = document.getElementById("hong-client-rank");
    hong_ticket.style.display="block";
    hong_ticket_underline.classList.add("hong-btn-underline");
    hong_client.style.display="none";
    hong_client_underline.classList.remove("hong-btn-underline");
    document.getElementsByClassName('hong_map_image')[0].setAttribute("src" , "login-form/images/hong-map-"+hong_map_link[0].getAttribute('value')+".jpg");
}

function hong_map_client()
{
    const hong_ticket = document.getElementsByClassName('hong-search-map-left-bottom-ticket')[0];
    const hong_client = document.getElementsByClassName('hong-search-map-left-bottom-client')[0];
    const hong_ticket_underline = document.getElementById("hong-ticket-rank");
    const hong_client_underline = document.getElementById("hong-client-rank");
    hong_ticket.style.display="none";
    hong_ticket_underline.classList.remove("hong-btn-underline");
    hong_client.style.display="block";
    hong_client_underline.classList.add("hong-btn-underline");
    document.getElementsByClassName('hong_map_image')[1].setAttribute("src" , "login-form/images/hong-map-"+hong_map_link[5].getAttribute('value')+".jpg");
}
