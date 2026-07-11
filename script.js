const fecha=new Date("July 17, 2026 23:59:59").getTime();

setInterval(function(){

let ahora=new Date().getTime();

let distancia=fecha-ahora;

let dias=Math.floor(distancia/(1000*60*60*24));

let horas=Math.floor((distancia%(1000*60*60*24))/(1000*60*60));

let minutos=Math.floor((distancia%(1000*60*60))/(1000*60));

document.getElementById("contador").innerHTML=

dias+" días · "+horas+" horas · "+minutos+" minutos";

},1000);