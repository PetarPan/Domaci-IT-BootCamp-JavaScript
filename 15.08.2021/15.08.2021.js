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
    sposobnosti: ["elektrosok", "mahanje repom"],
    karakteristike: {
      napad: 8,
      odbrana: 7,
      brzina: 10,
    },
  },
  {
    ime: "squirtle",
    vrsta: "vodeni",
    sposobnosti: ["udar vodom", "disanje pod vodom"],
    karakteristike: {
      napad: 7,
      odbrana: 10,
      brzina: 8,
    },
  },
  {
    ime: "charizard",
    vrsta: "vatreni",
    sposobnosti: ["napad vatrom", "boravak u vatri"],
    karakteristike: {
      napad: 9,
      odbrana: 6,
      brzina: 7,
    },
  },
  {
    ime: "snorlax",
    vrsta: "normal",
    sposobnosti: ["spavanje", "zevanje"],
    karakteristike: {
      napad: 0,
      odbrana: 0,
      brzina: 0,
    },
  },
];

//3 ------ funkcija pokemoni XD --------------

function sposobnostPokemona(pokemoni) {
  let pokNiz = [];
  for (let i = 0; i < pokemoni.length; i++) {
    pokNiz.push(pokemoni[i].sposobnosti);
  }
  console.log(pokNiz);
}
sposobnostPokemona(pokemoni); // if [pokemoni] daje [undefined]???????

///////////
//4 sortiranje po brzini rastuce

pokemoni.sort((a, b) => {
  return a.karakteristike.brzina - b.karakteristike.brzina;
});
pokemoni.forEach((e) => {
  console.log(`${e.ime} ${e.karakteristike.brzina}`);
});

//5 prima niz, poredi pokemone po jacini i vraca najjaceg  ------ ne radi ------
console.log("**********izdvajanje najjaceg***********");

pokemoni.sort((a, b) => {
  return b.karakteristike.napad - a.karakteristike.napad;
});
pokemoni.forEach((pokemon) => {
   console.log((pokemon.ime + " " + pokemon.karakteristike.napad));
    
})

/* pokemoni.forEach( (e) => {
    //kopija pokemona u novom nizu pa iz tog niza uzimamo max
  /* let x = [];
    //console.log(e.karakteristike.napad)
   x.push(`${e.ime}`); */
// console.log(e.ime, e.karakteristike);
//`${e.ime} ${e.karakteristike.napad}`
// y.push(` ${e.karakteristike.napad}`)
// console.log(x + y);
//console.log(`${e.ime} ${e.karakteristike.napad}`);




//za sredu 18.08.2021.

const levo = document.querySelector(".levo");
const desno = document.querySelector(".desno");
const izbor = document.querySelector(".pokeIzb");
const protivnik = document.querySelector(".protivnik");
const listaIzbor = document.querySelector(".listaIzbor");
const listaProtivnik = document.querySelector(".listaProtivnik");


izbor.addEventListener("click", () => {
  pokemoni.forEach((pokemon) => {
    const btn = document.createElement("button");
    btn.innerHTML = pokemon.ime + "<br>";

    btn.addEventListener("click", () => {
      let p = document.createElement("p");

      p.innerHTML = `
      Ime: ${pokemon.ime} <br> 
      Vrsta: ${pokemon.vrsta} <br> 
      Sposobnosti: ${pokemon.sposobnosti} <br> 
      Karakteristike: <br>
      Napad: ${pokemon.karakteristike.napad} <br>
      Odbrana: ${pokemon.karakteristike.odbrana} <br>
      Brzina: ${pokemon.karakteristike.brzina}`;
      
      listaIzbor.append(p);
      btn.remove();
    });
   

    listaIzbor.append(btn);
  });

  izbor.remove();
});

//protivnik
protivnik.addEventListener("click", () => {
    pokemoni.forEach((pokemon) => {
      const btn = document.createElement("button");
      btn.innerHTML = pokemon.ime + "<br>";
  
      btn.addEventListener("click", () => {
        let p = document.createElement("p");
  
        p.innerHTML = `
        Ime: ${pokemon.ime} <br> 
        Vrsta: ${pokemon.vrsta} <br> 
        Sposobnosti: ${pokemon.sposobnosti} <br> 
        Karakteristike: <br>
        Napad: ${pokemon.karakteristike.napad} <br>
        Odbrana: ${pokemon.karakteristike.odbrana} <br>
        Brzina: ${pokemon.karakteristike.brzina}`;
        
        listaProtivnik.append(p);
        btn.remove();
      });
     
  
      listaProtivnik.append(btn);
    });
  
    protivnik.remove();
  });