const karaEuro = document.getElementById('karaEuro');
const karaPln = document.getElementById('karaPln');
const karaSasin = document.getElementById('karaSasin');

const karaEuro2 = document.getElementById('karaEuro2');
const karaPln2 = document.getElementById('karaPln2');
const karaSasin2 = document.getElementById('karaSasin2');
const dane = document.querySelector('.dane');

URL = 'http://api.nbp.pl/api/exchangerates/rates/a/eur/?format=json'


axios.get(URL).then(res => {
     console.log(res.data);
     const kurs = res.data.rates[0].mid;
     console.log(kurs);
     dane.textContent = `Aktualny kurs EUR wynosi: ${kurs}`
     let seconds = 0;
     const data = new Date(2021, 9, 27, 0, 0, 0);
     let dzis = Date.now();
     let x = Math.floor((dzis - data) / 1000);

     countTime = setInterval(() => {

          karaEuro.innerHTML = `${Math.floor((1000000/86400)* (x+seconds))}`
          karaPln.innerHTML = `${Math.floor((1000000/86400)*(x+seconds) * kurs)}`
          karaSasin.innerHTML = `${(((1000000/86400)* (x+seconds) / 70000000)*kurs).toFixed(7)}`
          seconds += 0.1;


          karaEuro2.innerHTML = `${Math.floor((1000000/86400)* seconds)}`
          karaPln2.innerHTML = `${Math.floor((1000000/86400)* seconds * kurs)}`
          karaSasin2.innerHTML = `${(((1000000/86400)* seconds / 70000000)*kurs).toFixed(7)}`
          seconds += 0.1;

     }, 100);
})