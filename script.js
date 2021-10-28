const karaEuro = document.getElementById('karaEuro');
const karaPln = document.getElementById('karaPln');
const karaSasin = document.getElementById('karaSasin');

const karaEuro2 = document.getElementById('karaEuro2');
const karaPln2 = document.getElementById('karaPln2');
const karaSasin2 = document.getElementById('karaSasin2');

let seconds = 0;
const data = new Date(2021, 9, 27, 0, 0, 0);
let dzis = Date.now();
let x = Math.floor((dzis - data) / 1000);

countTime = setInterval(() => {

     karaEuro.innerHTML = `${Math.floor((1000000/86400)* (x+seconds))}`
     karaPln.innerHTML = `${Math.floor((1000000/86400)*(x+seconds) * 4.62)}`
     karaSasin.innerHTML = `${((1000000/86400)* (x+seconds) / 70000000).toFixed(10)}`
     seconds += 0.1;


     karaEuro2.innerHTML = `${Math.floor((1000000/86400)* seconds)}`
     karaPln2.innerHTML = `${Math.floor((1000000/86400)* seconds * 4.62)}`
     karaSasin2.innerHTML = `${((1000000/86400)* seconds / 70000000).toFixed(10)}`
     seconds += 0.1;

}, 100);