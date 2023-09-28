//declaring class
class Product{
    constructor(Name, Price, dis, Code){
        this.Name=Name;
        this.Price=Price;
        this.dis=dis;
        this.Code=Code;
    }
    discountvalue(){
        return Price * dis / 100;
    }
}

const product4 = new Product("iPhone", 1000000, 20, "1234567");
console.log(product4);
console.log(product4.discountvalue());

//getter and setter
const product1 = class {
    constructor(Name, Price, dis, Code){
        this.Name=Name;
        this.Price=Price;
        this.dis=dis;
        this.Code=Code;
    }
    get discountvalue(){ //no need to use parenthesis while calling it as a function
        return Price * dis / 100;
    }
    set disvalue(value){ //no need to use parenthesis while calling it as a function
        this.dis = value; 
    }
}

const product2 = new product1("iPhone", 1000000, 20, "1234567");
console.log(product2);
console.log(product2.discountvalue);

//inheritance
class Product{
    constructor(Name, Price, dis, Code){
        this.Name=Name;
        this.Price=Price;
        this.dis=dis;
        this.Code=Code;
    }
    discountvalue(){
        return Price * dis / 100;
    }
}

class Product1 extends Product{
    constructor(Name, Price, dis, Code, color){
        super(Name, Price, dis, Code);
        this.color = color;
    }
    get colorvalue(){
        return this.color;
    }
}

const product3 = new Product1("iPhone", 1000000, 20, "1234567", "black");
console.log(product3);
console.log(product3.colorvalue);

//static method // no need to create object to call static method // static method can be called directly using class name 

class Product{
    constructor(Name, Price, dis, Code){
        this.Name=Name;
        this.Price=Price;
        this.dis=dis;
        this.Code=Code;
    }
    static discountvalue(){
        return Price * dis / 100;
    }
}

const product5 = new Product("iPhone", 1000000, 20, "1234567");
console.log(product5);
console.log(Product.discountvalue()); //no need to create object to call static method // static method can be called directly using class name





