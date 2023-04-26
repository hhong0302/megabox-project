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
                <button class="hong-button hong-title-mt-list-button" onclick="showImg(this)">
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
                <button class="hong-button hong-title-mt-list-button" onclick="showImg(this)">
                <img class="hong-title-mt-img-age" src="images/hong-ticket-images/hong-ticket-${qr[i].age}.png" alt="${qr[i].age}">
                <span>${qr[i].name}</span>
                <img class="hong-title-mt-img-heart" src="images/hong-ticket-images/hong-ticket-heart.png" alt="hrt">
                <input type="hidden" value="${qr[i].value}">
                </button>
            </li>`;
    }
    document.getElementsByClassName('hong-title-mt-ul-all')[0].innerHTML=li1;
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
                <button class="hong-button hong-theater-list-button" onclick="showCity(this)">
                    <span>${si[i]}(${city[i].length})</span>
                </button>
                <input type="hidden" value="${i}">
            </li>`;
        for(let j=0;j<city[i].length;j++)
        {
            //오른쪽 영화관 장소
            lir+=`<li class="hong-title-mt-list">
                    <button class="hong-button hong-theater-mt-list-button" onclick="theaterBtn(this)">
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
                <button class="hong-button hong-theater-slist-button" onclick="showsCity(this)">
                    <span>${special[i]}(${sname[i].length})</span>
                </button>
                <input type="hidden" value="${i}">
            </li>`;
        for(let j=0;j<sname[i].length;j++)
        {
            //오른쪽 장소
            lir+=`<li class="hong-title-mt-list">
                    <button class="hong-button hong-theater-mt-slist-button" onclick="theaterBtn(this)">
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

//onload function
window.onload=function()
{
    document.getElementsByClassName("hong-ticket-box-list-button")[0].click();
}

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
    li+=`<button class="hong-ticket-box-list-button hong-button" onclick="changeDate(this)">
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

//날짜누르면 바꾸기
function changeDate(e)
{
    const dateBtn = document.getElementsByClassName('hong-ticket-box-list-button');
    for(let i=0;i<dateBtn.length;i++)dateBtn[i].style.border='0';
    e.style.borderBottom='2px solid #503396';
}

//누르면 날짜 움직이기
function ticket_box_left()
{
    const lft = document.getElementsByClassName("hong-ticket-box-date-flex")[0].getAttribute('style');
    let lftpx = lft.slice(lft.indexOf(" "),lft.indexOf("p"));
    if(lftpx==0) return;
    document.getElementsByClassName("hong-ticket-box-date-flex")[0].style.left=(Number(lftpx)+80)+'px';
}

function ticket_box_right()
{
    const lft = document.getElementsByClassName("hong-ticket-box-date-flex")[0].getAttribute('style');
    let lftpx = lft.slice(lft.indexOf(" "),lft.indexOf("p"));
    if(lftpx==-480) return;
    document.getElementsByClassName("hong-ticket-box-date-flex")[0].style.left=(Number(lftpx)-80)+'px';
}

//영화와 극장 밑의 버튼 누르면 바뀌기 (전체/큐레이션),(전체/특별관)
function fastLeft(e,lcls,rcls)
{
    const lclass = document.getElementsByClassName(lcls)[0];
    const rclass = document.getElementsByClassName(rcls)[0];
    lclass.style.display = 'block';
    rclass.style.display = 'none';
    e.style.border = '1px solid #555';
    e.style.borderBottom = '0';
    e.nextElementSibling.style.border = '1px solid #d9d8dd';
    e.nextElementSibling.style.borderLeft = '0';
    e.nextElementSibling.style.borderBottom = '1px solid #555';
}

function fastRight(e,lcls,rcls)
{
    const lclass = document.getElementsByClassName(lcls)[0];
    const rclass = document.getElementsByClassName(rcls)[0];
    lclass.style.display = 'none';
    rclass.style.display = 'block';
    e.style.border = '1px solid #555';
    e.style.borderBottom = '0';
    e.previousElementSibling.style.border = '1px solid #d9d8dd';
    e.previousElementSibling.style.borderRight = '0';
    e.previousElementSibling.style.borderBottom = '1px solid #555';
}

//좌측 하단 영화 이미지 기능-list누르면 껐다켰다 하기
let imgvalArr = [];

function showImg(e)
{
    const thisVal = e.lastElementChild.value;
    if(imgvalArr.indexOf(thisVal)==-1)
    {
        if(imgvalArr.length>=3)
        {
            document.getElementsByClassName('alert-span')[0].innerHTML='영화는 최대 3개까지 선택이 가능합니다.';
            const hwd = document.getElementsByClassName('hong-window')[0];
            hwd.style.visibility = 'visible';
            hwd.style.opacity = '1';
            return;
        }
        imgvalArr.push(thisVal);
    }
    else imgvalArr.splice(imgvalArr.indexOf(thisVal),1);

    const uimgall = document.getElementsByClassName("hong-underimg-all");
    for(let j=0;j<uimgall.length;j++)
    {
        uimgall[j].innerHTML='';
    }
    for(let i=0;i<imgvalArr.length;i++)
    {
        uimgall[i].innerHTML = `<div class="hong-title-mt-underimg-box">
                                    <img class="hong-underimg" src="images/hong-ticket-images/hong-ticket-${imgvalArr[i]}.jpg" alt="jw">
                                    <input type="hidden" value="${imgvalArr[i]}">
                                    <button class="hong-button hong-underimg-xbox" onclick="closeBtn(this)">
                                        <img src="images/hong-ticket-images/hong-img-xbox.png" alt="x">
                                    </button>
                                </div>`;
    }
    if(e.style.backgroundColor!="rgb(102, 102, 102)")
    {
        e.style.backgroundColor="#666";
        e.style.color="#fff";
    }
    else
    {
        e.style.backgroundColor="#fff";
        e.style.color="#000";
    }
    const aml = document.getElementsByClassName('hong-all-mt-list')[0];
    const tmi = document.getElementsByClassName('hong-title-mt-imgbox')[0];
    if(imgvalArr.length==0)
    {
        aml.style.display='block';
        tmi.style.display='none';
    }
    else
    {
        aml.style.display='none';
        tmi.style.display='flex';
    }
}

//좌측 하단 영화 이미지 기능-이미지의 x버튼 누르면 끄기
function closeBtn(e)
{
    const thisVal = e.previousElementSibling.value;
    
    imgvalArr.splice(imgvalArr.indexOf(thisVal),1);

    const uimgall = document.getElementsByClassName("hong-underimg-all");
    for(let j=0;j<uimgall.length;j++)
    {
        uimgall[j].innerHTML='';
    }
    for(let i=0;i<imgvalArr.length;i++)
    {
        uimgall[i].innerHTML = `<div class="hong-title-mt-underimg-box">
                                    <img class="hong-underimg" src="images/hong-ticket-images/hong-ticket-${imgvalArr[i]}.jpg" alt="jw">
                                    <input type="hidden" value="${imgvalArr[i]}">
                                    <button class="hong-button hong-underimg-xbox" onclick="closeBtn(this)">
                                        <img src="images/hong-ticket-images/hong-img-xbox.png" alt="x">
                                    </button>
                                </div>`;
    }
    const tmlb = document.getElementsByClassName('hong-title-mt-list-button');
    for(let i=0;i<tmlb.length;i++)
    {
        if(tmlb[i].childNodes[7].value==thisVal)
        {
            tmlb[i].style.backgroundColor="#fff";
            tmlb[i].style.color="#000";
        }
    }
    const aml = document.getElementsByClassName('hong-all-mt-list')[0];
    const tmi = document.getElementsByClassName('hong-title-mt-imgbox')[0];
    if(imgvalArr.length==0)
    {
        aml.style.display='block';
        tmi.style.display='none';
    }
    else
    {
        aml.style.display='none';
        tmi.style.display='flex';
    }
}

//센터 하단 극장/특별관 부분 도시 나오게하기
function showCity(e)
{
    const city = document.getElementsByClassName('hong-title-theater-detail-ul');
    const civbtn = document.getElementsByClassName('hong-theater-list-button');
    for(let i=0;i<civbtn.length;i++)civbtn[i].style.backgroundColor="#fff";
    for(let i=0;i<city.length;i++)city[i].style.display='none';
    city[e.nextElementSibling.value].style.display='block';
    e.style.backgroundColor="#ebebeb";
}
function showsCity(e)
{
    const city = document.getElementsByClassName('hong-title-theater-special-detail-ul');
    const civbtn = document.getElementsByClassName('hong-theater-slist-button');
    for(let i=0;i<civbtn.length;i++)civbtn[i].style.backgroundColor="#fff";
    for(let i=0;i<city.length;i++)city[i].style.display='none';
    city[e.nextElementSibling.value].style.display='block';
    e.style.backgroundColor="#ebebeb";
}

//센터 하단 극장 영화관 부분3개-list누르면 켜고 끄기
let theaterArr = [];
function theaterBtn(e)
{
    const thisVal = e.childNodes[1].innerHTML;
    if(theaterArr.indexOf(thisVal)==-1)
    {
        if(theaterArr.length>=3)
        {
            document.getElementsByClassName('alert-span')[0].innerHTML='극장은 최대 3개까지 선택이 가능합니다.';
            const hwd = document.getElementsByClassName('hong-window')[0];
            hwd.style.visibility = 'visible';
            hwd.style.opacity = '1';
            return;
        }
        theaterArr.push(thisVal);
    }
    else theaterArr.splice(theaterArr.indexOf(thisVal),1);

    const utheaall = document.getElementsByClassName("hong-theater-all");
    for(let j=0;j<utheaall.length;j++)
    {
        utheaall[j].innerHTML='';
    }
    for(let i=0;i<theaterArr.length;i++)
    {
        utheaall[i].innerHTML = `<span>${theaterArr[i]}</span>
                                <button class="hong-button theater-all-xbtn" onclick="theaterXBtn(this)">
                                    <img src="images/hong-ticket-images/theaterx.png" alt="theaterx">
                                </button>`;
    }
    if(e.style.backgroundColor!="rgb(102, 102, 102)")
    {
        e.style.backgroundColor="#666";
        e.style.color="#fff";
    }
    else
    {
        e.style.backgroundColor="#fff";
        e.style.color="#000";
    }
    const atl = document.getElementsByClassName('hong-all-theater-list')[0];
    const tmt = document.getElementsByClassName('hong-title-mt-theaterbox')[0];
    if(theaterArr.length==0)
    {
        atl.style.display='block';
        tmt.style.display='none';
    }
    else
    {
        atl.style.display='none';
        tmt.style.display='flex';
    }
}

//극장 하단 영화관 부분3개-x버튼 누르면 켜고 끄기
function theaterXBtn(e)
{
    const thisVal = e.previousElementSibling.innerHTML;

    theaterArr.splice(theaterArr.indexOf(thisVal),1);

    const utheaall = document.getElementsByClassName("hong-theater-all");
    for(let j=0;j<utheaall.length;j++)
    {
        utheaall[j].innerHTML='';
    }
    for(let i=0;i<theaterArr.length;i++)
    {
        utheaall[i].innerHTML = `<span>${theaterArr[i]}</span>
                                <button class="hong-button theater-all-xbtn" onclick="theaterXBtn(this)">
                                    <img src="images/hong-ticket-images/theaterx.png" alt="theaterx">
                                </button>`;
    }
    const tmlb = document.getElementsByClassName('hong-theater-mt-list-button');
    for(let i=0;i<tmlb.length;i++)
    {
        const tmlbval = tmlb[i].childNodes[1].innerHTML;
        if(tmlbval==thisVal)
        {
            tmlb[i].style.backgroundColor="#fff";
            tmlb[i].style.color="#000";
        }
    }
    const tmslb = document.getElementsByClassName('hong-theater-mt-slist-button');
    for(let i=0;i<tmslb.length;i++)
    {
        const tmslbval = tmslb[i].childNodes[1].innerHTML;
        if(tmslbval==thisVal)
        {
            tmslb[i].style.backgroundColor="#fff";
            tmslb[i].style.color="#000";
        }
    }
    const atl = document.getElementsByClassName('hong-all-theater-list')[0];
    const tmt = document.getElementsByClassName('hong-title-mt-theaterbox')[0];
    if(theaterArr.length==0)
    {
        atl.style.display='block';
        tmt.style.display='none';
    }
    else
    {
        atl.style.display='none';
        tmt.style.display='flex';
    }
}

//timechange
function ticket_box_left()
{
    const lft = document.getElementsByClassName("hong-ticket-box-date-flex")[0].getAttribute('style');
    let lftpx = lft.slice(lft.indexOf(" "),lft.indexOf("p"));
    if(lftpx==0) return;
    document.getElementsByClassName("hong-ticket-box-date-flex")[0].style.left=(Number(lftpx)+80)+'px';
}
let timeabs = 0;
function timeChange(num)
{
    timeabs += num;
    if(timeabs>0)
    {
        timeabs=0;
    }
    if(timeabs<-420)
    {
        timeabs=-420;
    }
    document.getElementsByClassName('schedule-time')[0].style.left=timeabs+'px';
}

//alert창 닫기
function closeAlert()
{
    const alrt = document.getElementsByClassName('hong-window')[0];
    alrt.style.opacity='0';
    alrt.style.visibility='hidden';
}