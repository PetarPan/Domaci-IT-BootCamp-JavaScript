/** @format */

//1
{
  let niz = [1, 2, 3, 4, 5, 6, 7];
  let sum = 0;
  let pr = 1;

  function sumPr(sum, pr) {
    for (i = 0; i < niz.length; i++) {
      sum += niz[i];
      pr *= niz[i];
    }
    return [sum, pr];
  }
  console.log(sumPr(sum, pr));
}

//2 isNan NEKOMPLETAN!!!

{
  var niz = [null, NaN,7, 1, "sd", undefined, NaN];
  function check(niz) {
    for (i = 0; i < niz.length; i++) {
      if (typeof niz[i] === "number" && isNaN(niz[i])) {
        return ("Element " + i + " is NaN");
      }
      if (typeof niz[i] === "undefined") {
        return ("Element " + i + " is undefined");
      }
    }
  }
  console.log(check(niz));
}

//3 uklonjen
//4
{
  let broj = 75;

  if (broj % 3 == 0 && broj % 5 == 0 && broj % 7 == 0) {
    console.log(`Broj ${broj} je FizzBuzzZuzz`);
  } else if (broj % 3 == 0 && broj % 5 == 0) {
    console.log(`Broj ${broj} je FizzBuzz`);
  } else if (broj % 3 == 0) {
    console.log(`Broj ${broj} Fizz`);
  } else if (broj % 5 == 0) {
    console.log(`Broj ${broj} je Buzz`);
  } else {
    console.log(`Broj ${broj} je broj ${broj}`);
  }
}

//5
{
  let a = 1;
  let b = 2;

  [a, b] = [b, a];

  console.log(a, b);
}

//6 PALINDROM NEURADJEN!!! 


let a = "anavolimilovana"
a = a + "";

obrnuto = a.split("").reverse().join('');
console.log ("The number if reversed is: " + obrnuto);
if (a == obrnuto)
    console.log("Palindrom");
else
    console.log("Nije palindrom");