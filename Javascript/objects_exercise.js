//Exercise using Objects
//itemName
//itemPrice
//discount
//itemCode

//Create an object with the following properties
const product = {
    itemName: "Milk",
    itemPrice: 50,
    discount: 10,
    itemCode: "12345"
}

//factory function

function pro(Name, Price, dis, Code) {
    return {
        itemName: Name,
        itemPrice: Price,
        discount: dis,
        itemCode: Code
    }
}

const product2 = pro("football", 1000, 25, "123456");

//constructor function

function Product(Name, Price, dis, Code) {
    this.itemName = Name;
    this.itemPrice = Price;
    this.discount = dis;
    this.itemCode = Code;
    this.discountvalue = function () {
        return this.itemPrice * this.discount / 100;
    }
}

const product3 = new Product("iPhone", 1000000, 20, "1234567");