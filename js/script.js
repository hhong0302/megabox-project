//광고 x 버튼 누르면 광고 닫히기

function hong_delete()
{
    document.getElementsByClassName("hong-advertisement")[0].classList.add('hong-ad-none');
}

const hong_st = document.getElementsByClassName("hong-sitemap")[0];
const hong_xbtn1 = document.getElementsByClassName("hong-btn-close")[0];
const hong_search = document.getElementsByClassName('hong-search-map')[0];
const hong_xbtn2 = document.getElementsByClassName("hong-btn-close")[1];

//hamburger 버튼 클릭 시 사이트맵 나왔다 들어갔다

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
    }
}

//이미지에 마우스 갖다대면 바뀌는 그거

const hong_map_link = document.getElementsByClassName('hong_map_link');

for(let i = 0 ; i<hong_map_link.length ; i++)
{
    hong_map_link[i].addEventListener('mouseenter',function()
    {
        document.getElementsByClassName('hong_map_image')[0].setAttribute("src" , "images/hong-map-"+hong_map_link[i].getAttribute('value')+".jpg");
        document.getElementsByClassName('hong_map_image')[1].setAttribute("src" , "images/hong-map-"+hong_map_link[i].getAttribute('value')+".jpg");
    });
}

//search-map ticket과 client 누르면 바뀌기

const hong_ticket = document.getElementsByClassName('hong-search-map-left-bottom-ticket')[0];
const hong_client = document.getElementsByClassName('hong-search-map-left-bottom-client')[0];
const hong_ticket_underline = document.getElementsByClassName("hong-ticket-rank-underline")[0];
const hong_client_underline = document.getElementsByClassName("hong-client-rank-underline")[0];
function hong_map_ticket()
{
    hong_ticket.style.display="block";
    hong_ticket_underline.style.display="block";
    hong_client.style.display="none";
    hong_client_underline.style.display="none";
    document.getElementsByClassName('hong_map_image')[0].setAttribute("src" , "images/hong-map-"+hong_map_link[0].getAttribute('value')+".jpg");
}

function hong_map_client()
{
    hong_ticket.style.display="none";
    hong_ticket_underline.style.display="none";
    hong_client.style.display="block";
    hong_client_underline.style.display="block";
    document.getElementsByClassName('hong_map_image')[1].setAttribute("src" , "images/hong-map-"+hong_map_link[5].getAttribute('value')+".jpg");
}

/* //search-map 다른 공간 클릭하면 창 닫기
const hong_body = document.querySelector("body");
hong_body.addEventListener('click',hong_click_search_event);

function hong_click_search_event(event)
{
    let hong_target = event.target;

    if(hong_target == event.currentTarget.querySelectorAll(".hong-search-map-box"))
    {
        return;
    }
    
    if(hong_search.style.display=="block")
    {
        console.log(hong_target);
        hong_search.style.display="none";
        hong_xbtn2.style.display="none";
    }
} */