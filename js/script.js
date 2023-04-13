//광고 x 버튼 누르면 광고 닫히기

function hong_delete()
{
    document.getElementsByClassName("hong-advertisement")[0].classList.add('hong-ad-none');
}

//hamburger 버튼 클릭 시 사이트맵 나왔다 들어갔다

function hong_sitemap_onout()
{
    var st = document.getElementsByClassName("hong-sitemap")[0];
    var xbtn = document.getElementsByClassName("hong-btn-close")[0];
    if(st.style.display=="block")
    {
        st.style.display="none";
        xbtn.style.display="none";
    }
    else
    {
        st.style.display = "block";
        xbtn.style.display="block";
    }
}