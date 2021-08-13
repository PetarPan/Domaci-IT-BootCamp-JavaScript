/** @format */

//1-----------------Funkcija koja ispisuje sve elemente datog niza koji su deljivi sa 5----------------

{
    let niz = [1, 2, 5, 10, 15, -5, 0, 100000];
  function deljiviSa5(niz) {
    let tmp = [];
    for (let i = 0; i < niz.length; i++) {
      if (niz[i] % 5 == 0) {
        tmp.push(niz[i]);
      }
      
    }
    return tmp;
}
   
console.log(deljiviSa5(niz));

} 

//------------------------------------------2 Pokemoni XD-------------------------------------------

let pokemoni = [
    {
        ime: "pikacu",
        vrsta: "elektricni",
        sposobnosti: "munje",
        karakteristike: {
            napad: 8,
            odbrana: 7,
            brzina: 10
        }
    },
    {
        ime: "squirtle",
        vrsta: "vodeni",
        sposobnosti: "voda",
        karakteristike: {
            napad: 7,
            odbrana: 10,
            brzina: 7
        }
    },
    {
        ime: "charizard",
        vrsta: "vatreni",
        sposobnosti: "vatra",
        karakteristike: {
            napad: 9,
            odbrana: 6,
            brzina: 7
        }
    },
    {
        ime: "snorlax",
        vrsta: "normal",
        sposobnosti: "spavanje",
        karakteristike: {
            napad: 0,
            odbrana: 0,
            brzina: 0
        }
    }
]

//3 ------ funkcija pokemoni XD --------------

function sposobnostPokemona(pokemoni) {
    let pokNiz = [];
    for(let i = 0; i < pokemoni.length; i++) {
        pokNiz.push(pokemoni[i].vrsta)
    }
    console.log(pokNiz);
}
sposobnostPokemona(pokemoni)   // if [pokemoni] daje [undefined]???????
  