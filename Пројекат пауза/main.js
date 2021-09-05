/** @format */

import { addPrihod, addRashod } from "./funkcije.js";

/** @format */

export let prihodi = [];
export let rashodi = [];

const opcija = document.querySelector("#opcija");
const opisTransakcije = document.querySelector("#opis");
const iznosTransakcije = document.querySelector("#iznos");
const unesi = document.querySelector("button");
const div = document.querySelector(".prihod-rashod");

/* prihodi.forEach(element => {
    addPrihod(element)
})
rashodi.forEach(element => {
    add(element)
}) */

unesi.addEventListener("click", () => {
  if(opcija.value != 'prihod' && opcija.value != 'rashod'){
    alert('Opcija mora da bude izabrana')
    return -1
  }
  if (opisTransakcije.value == "" || iznosTransakcije.value == "") {
    alert("ne sme da bude prazno");
    return -1;
  }
  if (isNaN(iznosTransakcije.value)) {
    alert("mora da se unese broj");
    return -1;
  }

  if (opcija.value == "prihod") {
    let el = {
      transakcija: opisTransakcije.value.trim(),
      iznos: Number(iznosTransakcije.value.trim()),
    };
    addPrihod(el);
    prihodi.push(el);
    console.log(prihodi);
  } else if (opcija.value == "rashod") {
    let el = {
      transakcija: opisTransakcije.value.trim(),
      iznos: Number(iznosTransakcije.value),
    };
    rashodi.push(el);
    addRashod(el);
    console.log(rashodi);
  }

  //suma prihoda
  let sumPrihod = 0;
  for (let i = 0; i < prihodi.length; i++) {
    sumPrihod += prihodi[i].iznos;
  }
  const bilansPrihod = document.querySelector(".ukupni-prihod");
  bilansPrihod.innerHTML = `<p>Prihod ${sumPrihod}</p>`;

  //suma rashoda
  let sumRashod = 0;
  for (let i = 0; i < rashodi.length; i++) {
    sumRashod += rashodi[i].iznos;
  }

  let procenat = (sumRashod / sumPrihod) * 100;
  procenat = parseFloat(procenat).toFixed(2) + '%'

  const bilansRashod = document.querySelector(".ukupni-rashod");
  bilansRashod.innerHTML = `<p>Rashod <span>-${sumRashod}</span> <span class='proc'>${procenat}</span></p>`;

  //let procenat = (sumRashod / sumPrihod) * 100 + "%";

  //ukupni bilans
  const bilans = document.querySelector(".bilans");
  let rezultat = sumPrihod - sumRashod;
  bilans.innerHTML = `<p>${rezultat}</p>`;

  opisTransakcije.value = '';
  iznosTransakcije.value = '';
  opcija.value = '';
});

