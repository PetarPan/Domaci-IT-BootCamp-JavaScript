/** @format */

import { prihodi, rashodi } from "./main.js";

export const addPrihod = (element) => {
  const prihod = document.querySelector(".prihod");
  const list = document.createElement('ul')
  const el = document.createElement("li");
  prihod.append(list);
  list.append(el)
  el.classList.add(".elPrihod");
  el.innerHTML = `<p><span>${element.transakcija}</span> ${element.iznos}</p>`;

    el.addEventListener("mouseover", () => {});

 

  let sumPrihod = 0;
  for (let i = 0; i < prihodi.length; i++) {
    sumPrihod += prihodi[i].iznos;
  }

  const ukPrihod = document.querySelector(".ukupni-prihod");
  ukPrihod.innerHTML = `${sumPrihod}`;

  const del = document.createElement("button");
  del.classList.add("btnDel");
  del.textContent = "Delete";
  el.append(del);

  prihod.addEventListener("mouseover", () => {
    del.classList.toggle("pokazi");
  }); 

  del.addEventListener("click", () => {
    el.remove();
    del.remove();
    prihodi.splice(prihodi.indexOf(element), 1);
    console.log(element);
  });
};

export const addRashod = (element) => {
  const rashod = document.querySelector(".rashod");
  const list = document.createElement('ul')
  const el = document.createElement("li");
  el.classList.add('elRashod')
  rashod.append(list);
  list.append(el)
  el.innerHTML = `<p><span>${element.transakcija}</span> <span>${element.iznos}</span></p>`;

  
  let sumPrihod = 0;
  for (let i = 0; i < prihodi.length; i++) {
    sumPrihod += prihodi[i].iznos;
  }
 

  const del = document.createElement("button");
  del.classList.add("btnDel");
  del.textContent = "Delete";
  el.append(del);



   rashod.addEventListener("mouseover", () => {
    del.classList.toggle("pokazi");
    procenatRashod.classList.toggle("pokazi");
  });   

  del.addEventListener("click", () => {
    el.remove();
    del.remove();
    rashodi.splice(rashodi.indexOf(element), 1);
    console.log(element);
  });
  const procenatRashod = document.createElement("span");
  procenatRashod.classList.add('procenatRashod')
  el.append(procenatRashod)
  let procenat = (element.iznos / sumPrihod) * 100;
  procenat = parseFloat(procenat).toFixed(2) + '%'
  procenatRashod.innerHTML = procenat;
};
