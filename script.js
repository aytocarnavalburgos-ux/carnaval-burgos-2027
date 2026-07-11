
const target=new Date('2026-07-17T23:59:59').getTime();
setInterval(()=>{
const d=target-Date.now();
if(d<0){document.getElementById('countdown').textContent='Plazo finalizado';return;}
const days=Math.floor(d/86400000);
const hrs=Math.floor((d%86400000)/3600000);
const mins=Math.floor((d%3600000)/60000);
document.getElementById('countdown').textContent=`${days} días · ${hrs} horas · ${mins} min`;
},1000);
