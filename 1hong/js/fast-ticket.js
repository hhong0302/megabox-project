
//오늘날짜 부터 나열해서 예매박스 상단 날짜부분에 넣기
let dt = new Date();
let year = dt.getFullYear();
let month = dt.getMonth();  //3
let date = dt.getDate();  //23
//let day = dt.getDay();  //0
//console.log(year+"'"+month+"'"+date+"'"+day);

let li = "";
let dayarr = ["일","월","화","수","목","금","토"];

for(let i=0;i<12;i++)
{
    const d = new Date(year,month,date+i);
    let d_day = d.getDay();
    li+=`<button class="hong-ticket-box-list-button hong-button">
            <span>${d.getDate()}</span>
            <span class="hong-day">${dayarr[d_day]}</span>
        </button>`;
}
document.getElementsByClassName('hong-ticket-box-date-list')[0].innerHTML = li;

const hd = document.getElementsByClassName("hong-day");
hd[0].innerHTML = '오늘';
hd[1].innerHTML = '내일';