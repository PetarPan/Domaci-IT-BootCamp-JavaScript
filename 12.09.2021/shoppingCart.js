import {  Product } from "./proizvodi.js";
const prLenPrGr = 23
const prLenProd = 10
const prLenQuan = 10
const prLenPrice = 7
const prLenVat = 7
const prLenCalc = 10
const emptyStr = "                    ";
const printLengthStar = prLenPrGr+prLenProd+prLenQuan+prLenPrice+prLenVat+prLenCalc
let tableWraper = ''
for(let i = 0; i<printLengthStar; i++){
  
  tableWraper += '*'
}
const alLeft = "LEFT"
const alRight = "RIGHT"

const alPriceVal = alLeft
const allign = (str, al, numChar) => {
    let rValue
    if(al == alLeft ){
       rValue = (str + emptyStr).slice(0, numChar)
    } else if (al == alRight) {
      rValue = (emptyStr + str).slice((emptyStr + str).length-numChar, (emptyStr + str).length)
    }
    return rValue+" "
  }


export class ShoppingCart {
    static items;
    constructor() {
      this.items = [];
    }
  
    addElement(productSC, quantitySC) {
      const itemSCI = new ShoppingCartItem(productSC, quantitySC);
  
      this.items.push(itemSCI);
    }
  
    displayProducts() {
      for (let i = 0; i < this.items.length; i++) {
        this.items[i].displayItemInfo();
      }
    }
  
    calcSum() {
      
      let sumSubtotal = 0;
      let sumVat = 0;
      console.log(tableWraper);
      console.log();
      console.log(('Prod Group'+emptyStr).slice( 0, prLenPrGr) + 
      ('Product'+emptyStr).slice( 0, prLenProd) +
      ('Price'+emptyStr).slice( 0, prLenPrice) +
      ('Quantity'+emptyStr).slice( 0, prLenQuan) +
      ('VAT'+emptyStr).slice( 0, prLenVat) +
      ('Subtotal'+emptyStr).slice( 0, prLenCalc))
      ;
      
      for (let i = 0; i < this.items.length; i++) {
        //console.log('typeOf'+ sum);
        let r = this.items[i].calculateSubtotal();
        sumVat += r[1];
        sumSubtotal += r[0];
      }
  
      console.log(
        `VAT/TOTAL ${sumVat.toString().slice(0, 3)}/${sumSubtotal
          .toString()
          .slice(0, 5)}`
      );
      console.log();
      console.log(tableWraper);
    }
  
    readPrice(x){
      let rValue =  0
      if( x>this.items.length){
       console.log('Zadat veci obroj od postojeceg');
      } else {
       rValue = this.items[x].hocudaznamcenu()
        //console.log('moze');
      }
      return rValue
    }
  }
  
  export class ShoppingCartItem {
    product;
    quantity;
    constructor(productSCI, quantitySCI) {
      this.product = productSCI;
      this.quantity = quantitySCI;
  
      this.displayCart();
    }
    addProduct(bC, tI, pR, gR, vT) {
      this.product = new Product(bC, tI, pR, gR, vT);
    }
    addQuantity() {
      this.quantity = 0;
    }
    displayCart() {
      console.log("shopping cart item");
    }
    displayItemInfo() {
      this.product.displayProductInfo();
    }
    calculateSubtotal() {
      
      let cena =  this.product.getPrice();
      let kolicina = this.quantity + emptyStr;
      let pdv = this.product.getVat();
      let calc = cena * kolicina;
      let ime =this.product.getTitle() + emptyStr;
      let grupa = this.product.getGroup() + emptyStr;
      console.log(
        grupa.slice( 0, prLenPrGr) +
          
          ime.slice(0, prLenProd) +
          
         allign(cena.toString(),alPriceVal, prLenPrice) +
          
          kolicina.toString().slice(0, prLenQuan) +
          
          (pdv + emptyStr).toString().slice(0, prLenVat) +
          
          calc.toString().slice(0, prLenCalc)
      );
      const pg = document.querySelector('#pp')
      const td = document.createElement('td')
      td.innerHTML = this.product.getPrice()
      pg.append(td)
  
      return [calc, pdv];
    }
    hocudaznamcenu(){
      return this.product.getPrice()
    }
  }