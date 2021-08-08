// Data su 4 stringa. 
let string1 = "neki prvi string";
let string2 = "neki drugi string koji je i duzi string";
let string3 = "neki treci string koji je dugacak";
let string4 = "neki string";

//1. Proveriti koji je string najduzi i ispisati samo njega
let duzina1 = string1.length;
let duzina2 = string2.length;
let duzina3 = string3.length;
let duzina4 = string4.length;

 if (duzina1 > duzina2 && duzina1 > duzina3 && duzina1 > duzina4) {
    console.log(string1 + " " + "sadrzi" + " " +  duzina1 + " karaktera");
} else if (duzina2 > duzina1 && duzina2 > duzina3 && duzina2 > duzina4) {
    console.log(string2 + " " + "sadrzi" + " " +  duzina2 + " karaktera");
} else if (duzina3 > duzina1 && duzina3 > duzina2 && duzina3 > duzina4) {
    console.log(string3 + " " + "sadrzi" + " " +  duzina3 + " karaktera");
} else {
    console.log(string4 + " " + "sadrzi" + " " +  duzina4 + " karaktera");
} 

//2. Ispisati najkraci string koji sadrzi rec  "string"

 {

pduzina1 = string1.includes("string");
pduzina2 = string2.includes("string");
pduzina3 = string3.includes("string");
pduzina4 = string4.includes("string");

if (pduzina1 == true && duzina1 < duzina2 && duzina1 < duzina3 && duzina1 < duzina4){
    console.log(string1);
} else if (pduzina2 == true && duzina2 < duzina1 && duzina2 < duzina3 && duzina2 < duzina4) {
    console.log(string2);
} else if (pduzina3 == true && duzina3 < duzina2 && duzina3 < duzina1 && duzina3 < duzina4) {
    console.log(string3);
} else   {
    console.log(string4);
}

} 

//3. sastaviti sve stringove bez prve reci "neki" osim ako string sadrzi deo recenice "string koji je", takve stringove izostaviti

{
pduzina1 = string1.startsWith("neki");
pduzina2 = string2.startsWith("neki");
pduzina3 = string3.startsWith("neki");
pduzina4 = string4.startsWith("neki");

pduzina1a = string1.includes("string koji je");
pduzina2b = string2.includes("string koji je");
pduzina3c = string3.includes("string koji je");
pduzina4d = string4.includes("string koji je");

if (pduzina1 == true && pduzina1a == false) {
    console.log(string1.replace("neki", ""));
} 
if (pduzina2 == true && pduzina2b == false) {
    console.log(string2.replace("neki", ""));
} 
if (pduzina3 == true && pduzina3c == false) {
    console.log(string3.replace("neki", ""));
} 
if (pduzina4 == true && pduzina4d == false) {
    console.log(string4.replace("neki", ""));
} 

}

//3. dani u nedelji

let datum = new Date();
let dan = datum.getDay();

if(dan >= 0 || dan <= 7) {
    console.log('u toku je vikend')
} else {
    copnsole.log('u toku je radna nedelja!!!')
}

//4. kolicina i cena artikla

let kolicina = 1500; //grami
let cena = 20; //po kg
let kolicinaNovca = 280;
let ukupnaCena = kolicina / 1000 * 20; //u kg
console.log(`Ukupna cena proizvoda je ${ukupnaCena} dinara`)

if (kolicina > 0 && kolicinaNovca >= ukupnaCena) {
    console.log("Vas racun je " + " " + kolicina / 100 * 20 + " dinara")
} else {
    console.log('Nemate dovoljno novca')
}
