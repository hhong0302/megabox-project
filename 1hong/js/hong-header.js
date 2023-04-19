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