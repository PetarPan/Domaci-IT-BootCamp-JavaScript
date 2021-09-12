import { ShoppingCart } from "./shoppingCart.js"
import {  Product } from "./proizvodi.js";


const sc1 = new ShoppingCart();

let pr1 = new Product("112212", "Hleb", 50, "Prehrambeni proizvod", 18);
let pr2 = new Product("555442", "Mleko", 100, "Mlecni proizvod", 18);
let pr3 = new Product("338854", "Sir", 200, "Mlecni proizvod", 18);
let pr4 = new Product("212145", "Cokolada", 150, "Konditor", 18);
let pr5 = new Product("011010", "Voda", 50, "Pice", 18);

sc1.addElement(pr1, 5);
sc1.addElement(pr2, 10);
sc1.addElement(pr3, 3);
sc1.addElement(pr4, 7);
sc1.addElement(pr5, 10);





sc1.displayProducts();
sc1.calcSum()



console.log(sc1.readPrice(1))



