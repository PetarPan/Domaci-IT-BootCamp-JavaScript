//Zadatak 1

puz = 0;
drvo = 100;
dan = 0;
while(puz <= drvo){
    puz +=3
    drvo++
    dan++  
    console.log(`Dan ${dan}: Puz je presao ${puz} cm, a visina drveta je porasla na ${drvo} cm`);
}
console.log(`Broj dana koji je puzu potreban da se popne na drvo je ${dan}`);



// Zadatak 2
let kategorija = "student";
let iznos = 10000;
let vikendPopust;
let popust;
let ukPopust;
let nePopust = 0;
var d = new Date();
var dan = d.getDay();



//postavi na git i drive
switch (kategorija) {
    case "student":
        if((dan == 6 || dan == 7) && (iznos > 3000)) {   //ostvaruje popust u okviru svoje kategorije plus dodatni popust
            popust = iznos * 0.2; 
            iznos = iznos - popust; 
            vikendPopust = iznos * 0.05;
            ukPopust = popust + vikendPopust;
            console.log(`Redovni popust iznosi ${popust} RSD, dok je dodatni popust u iznosu od ${vikendPopust} RSD`);
            console.log(`Ukupan popust koji potrosac ostvaruje je ${ukPopust} RSD`);
        } else if (iznos > 3000){        // nije vikend i ostvaruje samo popust u okviru svoje kategorije
            ukPopust = iznos * 0.2;
            console.log(`Ukupan popust koji potrosac ostvaruje je ${ukPopust} RSD `);
        } else if((dan == 6 || dan == 7) && (iznos<=3000)){   // ostvaruje samo popust ukoliko je vikend u toku
            ukPopust = iznos * 0.05;
            console.log(`Ukupan popust je ${ukPopust} RSD`);
        } else {        //obavestenje da nema ostvarenog popusta jer nema nijednog uslova
            console.log(`Potrosac ne ostvaruje popust jer nije ispunio uslov. Popust je ${nePopust} dinara`);
        }
        break;
        //u nastavku je kopiran kod za svaku kategoriju, samo se menjaju uslovi kolicina novca i visina popusta
    case "zaposleni":
        if((dan == 6 || dan == 7) && (iznos > 5000)) {     
            popust = iznos * 0.05; 
            iznos = iznos - popust; 
            vikendPopust = iznos * 0.05;
            ukPopust = popust + vikendPopust;
            console.log(`Redovni popust iznosi ${popust} RSD, dok je dodatni popust u iznosu od ${vikendPopust} RSD`);
            console.log(`Ukupan popust koji potrosac ostvaruje je ${ukPopust} RSD`);
        } else if (iznos > 5000){
            ukPopust = iznos * 0.05;
            console.log(`Ukupan popust koji potrosac ostvaruje je ${ukPopust} RSD `);
        } else if((dan == 6 || dan == 7) && (iznos<=5000)){   
            ukPopust = iznos * 0.05;
            console.log(`Ukupan popust je ${ukPopust} RSD`);
        } else {
            console.log(`Potrosac ne ostvaruje popust jer nije ispunio uslov. Popust je ${nePopust} dinara`);
        }
        break;
    case "penzioneri":
        if((dan == 6 || dan == 7) && (iznos > 2000)) {
            popust = iznos * 0.3; 
            iznos = iznos - popust; 
            vikendPopust = iznos * 0.05;
            ukPopust = popust + vikendPopust;
            console.log(`Redovni popust iznosi ${popust} RSD, dok je dodatni popust u iznosu od ${vikendPopust} RSD`);
            console.log(`Ukupan popust koji potrosac ostvaruje je ${ukPopust} RSD`);
        } else if (iznos > 2000){
            ukPopust = iznos * 0.3;
            console.log(`Ukupan popust koji potrosac ostvaruje je ${ukPopust} RSD `);
        } else if((dan == 6 || dan == 7) && (iznos<=2000)){   
            ukPopust = iznos * 0.05;
            console.log(`Ukupan popust je ${ukPopust} RSD`);
        } else {
            console.log(`Potrosac ne ostvaruje popust jer nije ispunio uslov. Popust je ${nePopust} dinara`);
        }
        break;
    case "firme":
        if((dan == 6 || dan == 7) && (iznos > 10000)) {
            popust = iznos * 0.1; 
            iznos = iznos - popust; 
            vikendPopust = iznos * 0.05;
            ukPopust = popust + vikendPopust;
            console.log(`Redovni popust iznosi ${popust} RSD, dok je dodatni popust u iznosu od ${vikendPopust} RSD`);
            console.log(`Ukupan popust koji potrosac ostvaruje je ${ukPopust} RSD`);
        } else if (iznos > 10000){
            ukPopust = iznos * 0.1;
            console.log(`Ukupan popust koji potrosac ostvaruje je ${ukPopust} RSD `);
        } else if((dan == 6 || dan == 7) && (iznos<=10000)){   
            ukPopust = iznos * 0.05;
            console.log(`Ukupan popust je ${ukPopust} RSD`);
        } else {
            console.log(`Potrosac ne ostvaruje popust jer nije ispunio uslov. Popust je ${nePopust} dinara`);
        }
        break;
    default:
        console.log(ukPopust = "Potrosac ne pripada kategoriji koja ima pravo na popust");
        break;
}