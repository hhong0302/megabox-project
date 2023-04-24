
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
        </button>`;
}
document.getElementsByClassName('hong-ticket-box-date-flex')[0].innerHTML = li;

const hd = document.getElementsByClassName("hong-day");
hd[0].innerHTML = '오늘';
hd[1].innerHTML = '내일';

//누르면 움직이기
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

function movieAll()
{
    const mv = document.getElementsByClassName('hong-title-movie-ul-all')[0];
    const qr = document.getElementsByClassName('hong-title-movie-ul-qr')[0];

    mv.style.display = 'block';
    qr.style.display = 'none';
}

function qrAll()
{
    const mv = document.getElementsByClassName('hong-title-movie-ul-all')[0];
    const qr = document.getElementsByClassName('hong-title-movie-ul-qr')[0];

    mv.style.display = 'none';
    qr.style.display = 'block';
}

fetch('data/ticket-all.json')
.then((res)=> res.json())
.then((res)=>{
    let all = res.all;
    let qr = res.qr;
    let li1 = '';
    let li2 = '';
    for(let i=0;i<all.length;i++)
    {
        li1+=`<li class="hong-title-movie-list">
                <button class="hong-button hong-title-movie-list-button">
                <img class="hong-title-movie-img-age" src="images/hong-ticket-images/hong-ticket-${all[i].age}.png" alt="12">
                <span>${all[i].name}</span>
                <img class="hong-title-movie-img-heart" src="images/hong-ticket-images/hong-ticket-heart.png" alt="hrt">
                <input type="hidden" value="${all[i].value}">
                </button>
            </li>`;
    }

    for(let i=0;i<qr.length;i++)
    {
        li2+=`<li class="hong-title-movie-list">
                <button class="hong-button hong-title-movie-list-button">
                <img class="hong-title-movie-img-age" src="images/hong-ticket-images/hong-ticket-${qr[i].age}.png" alt="12">
                <span>${qr[i].name}</span>
                <img class="hong-title-movie-img-heart" src="images/hong-ticket-images/hong-ticket-heart.png" alt="hrt">
                <input type="hidden" value="${qr[i].value}">
                </button>
            </li>`;
    }

    document.getElementsByClassName('hong-title-movie-ul-all')[0].innerHTML=li1;
    document.getElementsByClassName('hong-title-movie-ul-qr')[0].innerHTML=li2;
       
   })
   .catch((error)=>console.log(error));