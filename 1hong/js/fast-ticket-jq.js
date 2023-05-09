window.onload=function()
{
//좌측 영화부분 json
fetch('data/ticket-all.json')
.then((res)=> res.json())
.then((res)=>{
    let all = res.all;
    let qr = res.qr;
    let li1 = '';
    let li2 = '';
    for(let i=0;i<all.length;i++)
    {
        li1+=`<li class="hong-title-mt-list">
                <button class="hong-button hong-title-mt-list-button">
                <img class="hong-title-mt-img-age" src="images/hong-ticket-images/hong-ticket-${all[i].age}.png" alt="${all[i].age}">
                <span>${all[i].name}</span>
                <img class="hong-title-mt-img-heart" src="images/hong-ticket-images/hong-ticket-heart.png" alt="hrt">
                <input type="hidden" value="${all[i].value}">
                </button>
            </li>`;
    }

    for(let i=0;i<qr.length;i++)
    {
        li2+=`<li class="hong-title-mt-list">
                <button class="hong-button hong-title-mt-list-button">
                <img class="hong-title-mt-img-age" src="images/hong-ticket-images/hong-ticket-${qr[i].age}.png" alt="${qr[i].age}">
                <span>${qr[i].name}</span>
                <img class="hong-title-mt-img-heart" src="images/hong-ticket-images/hong-ticket-heart.png" alt="hrt">
                <input type="hidden" value="${qr[i].value}">
                </button>
            </li>`;
    }
    //document.getElementsByClassName('hong-title-mt-ul-all')[0].innerHTML=li1;
    document.getElementsByClassName('hong-title-mt-ul-qr')[0].innerHTML=li2;
}).catch((error)=>console.log(error));

//센터 극장부분 json
fetch('data/ticket-theater.json')
.then((res)=> res.json())
.then((res)=>{
    const si = ['서울','경기','인천','강원'];
    const city = [res.seoul,res.gyunggi,res.incheon,res.gangwon];
    let lil = '';
    let lir = '';
    for(let i=0;i<si.length;i++)
    {
        //왼쪽 도시군
        lil+=`<li class="hong-title-theater-list">
                <button class="hong-button hong-theater-list-button">
                    <span>${si[i]}(${city[i].length})</span>
                </button>
                <input type="hidden" value="${i}">
            </li>`;
        for(let j=0;j<city[i].length;j++)
        {
            //오른쪽 영화관 장소
            lir+=`<li class="hong-title-mt-list">
                    <button class="hong-button hong-theater-mt-list-button">
                        <span>${city[i][j].name}</span>
                    </button>
                    <input type="hidden" value="${city[i][j].value}">
                </li>`;
            document.getElementsByClassName('hong-title-theater-detail-ul')[i].innerHTML=lir;
        }
        lir='';
    }
    document.getElementsByClassName('hong-title-theater-ul')[0].innerHTML=lil;
}).catch((error)=>console.log(error));

//special관
fetch('data/ticket-special.json')
.then((res)=> res.json())
.then((res)=>{
    const special = ['DOLBY CINEMA','THE BOUTIQUE','MX'];
    const sname = [res.dolby,res.boutique,res.mx];
    let lil = '';
    let lir = '';
    for(let i=0;i<special.length;i++)
    {
        //왼쪽 특별관
        lil+=`<li class="hong-title-theater-list">
                <button class="hong-button hong-theater-slist-button">
                    <span>${special[i]}(${sname[i].length})</span>
                </button>
                <input type="hidden" value="${i}">
            </li>`;
        for(let j=0;j<sname[i].length;j++)
        {
            //오른쪽 장소
            lir+=`<li class="hong-title-mt-list">
                    <button class="hong-button hong-theater-mt-slist-button">
                        <span>${sname[i][j].name}</span>
                    </button>
                    <input type="hidden" value="${sname[i][j].value}">
                </li>`;
            document.getElementsByClassName('hong-title-theater-special-detail-ul')[i].innerHTML=lir;
        }
        lir='';
    }
    document.getElementsByClassName('hong-title-theater-ul')[1].innerHTML=lil;
}).catch((error)=>console.log(error));


//오늘날짜 부터 나열해서 예매박스 상단 날짜부분에 넣기
let dt = new Date();
let year = dt.getFullYear();
let month = dt.getMonth();  //3
let date = dt.getDate();  //23
//let day = dt.getDay();  //0
//console.log(year+"'"+month+"'"+date+"'"+day);

let li = "";
let dayarr = ["일","월","화","수","목","금","토"];

for(let i=0;i<18;i++)
{
    const d = new Date(year,month,date+i);
    let d_day = d.getDay();
    li+=`<button class="hong-ticket-box-list-button hong-button">
            <span>${d.getDate()}</span>
            <span class="hong-day">${dayarr[d_day]}</span>
            <input type="hidden" value="${(d.getMonth()+1)+','+d.getDate()}">
        </button>`;
}
document.getElementsByClassName('hong-ticket-box-date-flex')[0].innerHTML = li;

const hd = document.getElementsByClassName("hong-day");
hd[0].innerHTML = '오늘';
hd[1].innerHTML = '내일';

//시간에 00~24넣기
let timeli = '';
for(let i=0;i<=23;i++)
{
    if(i<10)timeli += `<li>
                        <button class="hong-btn schedule-time-button">
                            ${"0"+i}
                        </button>
                    </li>`;
    else timeli += `<li>
                        <button class="hong-btn schedule-time-button">
                            ${i}
                        </button>
                    </li>`;
}
document.getElementsByClassName('schedule-time')[0].innerHTML=timeli;
}
$(document).ready(function()
{
    //상단 날짜 왼쪽 오른쪽 버튼 클릭 시 이동
    let date_x = 0;
    $('.hong-ticket-box-date-left').click(function()
    {
        date_x += 80;
        if(date_x>0)date_x=0;
        $('.hong-ticket-box-date-flex').css('left', date_x+'px');
    });

    $('.hong-ticket-box-date-right').click(function()
    {
        date_x -= 80;
        if(date_x<-480)date_x=-480;
        $('.hong-ticket-box-date-flex').css('left', date_x+'px');
    });

    //상단 날짜누르면 선택
    $('.hong-ticket-box-list-button').click(function()
    {
        $('.hong-ticket-box-list-button').css('border','0');
        $(this).css('border-bottom','2px solid #503396');
    });
    $('.hong-ticket-box-list-button:first').click();//시작 시 선택

    //전체/큐레이션 바꾸기
    $('.mov-button-all').click(function()
    {
        $(this).css({
            'border':'1px solid #555',
            'border-bottom':'0'
        });
        $(this).siblings().css({
            'border':'1px solid #d9d8dd',
            'border-left':'0',
            'border-bottom':'1px solid #555'
        });
        $('.hong-title-mt-ul-all').fadeIn(0);
        $('.hong-title-mt-ul-qr').fadeOut(0);
    });
    $('.mov-button-qr').click(function()
    {
        $(this).css({
            'border':'1px solid #555',
            'border-bottom':'0'
        });
        $(this).siblings().css({
            'border':'1px solid #d9d8dd',
            'border-right':'0',
            'border-bottom':'1px solid #555'
        });
        $('.hong-title-mt-ul-all').fadeOut(0);
        $('.hong-title-mt-ul-qr').fadeIn(0);
    });

    //좌측하단 이미지 list
    let imgarr = [];
    $('.hong-title-mt-list-button').click(function()
    {
        if(imgarr.indexOf($(this).children('input').attr('value'))==-1)
        {
            if(imgarr.length>=3) return;

            imgarr.push(($(this).children('input').attr('value')));
            $(this).css({'background-color':'#666','color':'#fff'});
        }
        else 
        {
            imgarr.splice(imgarr.indexOf($(this).children('input').attr('value')),1);
            $(this).css({'background-color':'#fff','color':'#000'});
        }

        for(let i=0;i<$('.hong-underimg-all').length;i++)
        {
            $('.hong-underimg-all').html('');
        }
        for(let i=0;i<imgarr.length;i++)
        {
            $('.hong-underimg-all:eq('+i+')').html(
                `<div class="hong-title-mt-underimg-box">
                    <img class="hong-underimg" src="images/hong-ticket-images/hong-ticket-${imgarr[i]}.jpg" alt="${imgarr[i]}">
                    <input type="hidden" value="${imgarr[i]}">
                    <button class="hong-button hong-underimg-xbox" onclick="xboxclick()">
                        <img src="images/hong-ticket-images/hong-img-xbox.png" alt="x">
                    </button>
                </div>`);
        }
        
        if(imgarr.length==0)
        {
            $('.movie-img-list').fadeIn(0);
            $('.hong-title-mt-imgbox').fadeOut(0);
        }
        else
        {
            
            $('.movie-img-list').fadeOut(0);
            $('.hong-title-mt-imgbox').css('display','flex');
        }
    });

    
});

//좌측 하단 x 버튼
function xboxclick()
{
    $('.hong-underimg-xbox').click(function()
{
    console.log($(this).siblings('input').attr('value'));
});
}
