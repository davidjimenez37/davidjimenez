const grid=document.querySelector('#press-grid');
const items=window.PRESS_RELEASES||[];
grid.innerHTML=items.map((item,index)=>`<a class="press-card ${index===0&&items.length===1?'empty-card':''}" href="${item.url}"><time>${item.date}</time><h3>${item.title}</h3><p>${item.summary}</p><span>Leer más ↗</span></a>`).join('');
document.querySelector('#year').textContent=new Date().getFullYear();
