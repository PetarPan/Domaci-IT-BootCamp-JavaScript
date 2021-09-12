


export class ProductGroup{
    vat
    pgTitle
    constructor(vT, titlePg) {
      this.pgTitle = titlePg
      this.vat = vT
      
    }
  }
  
  export class Product extends ProductGroup{
    
    barCode;
    title;
    price;
    group;
    constructor(bC, tI, pR, gR, vT) {
      super(vT, tI)
      this.barCode = bC;
      this.title = tI;
      this.price = pR;
      this.group = gR;
      this.vat = vT;
      this.display();
    }
    getPrice() {
      return this.price;
    }
    getVat() {
      return this.vat;
    }
    getTitle() {
      return this.title;
    }
    getGroup() {
      return this.group;
    }
    /*  setPrice(pr){
        this.price =pr
    } */
  
    displayProductInfo() {
      console.log(this.barCode, this.title, this.price, this.group, this.vat);
    }
    display() {
      console.log("dodat proizvod");
    }
  }