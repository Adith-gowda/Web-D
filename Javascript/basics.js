const price = 100;
// const name = 'Rahul';
// price = 200;
console.log(price);

var x = 52 , y = 10;
x =  x%y;
console.log(x);

var a = "adith100";
console.log(typeof a);

//for..in
let animal = {
    name: 'dog',
    age: 5,
    color: 'black'
};

for(let key in animal){
    console.log(key, animal[key]);
}

//objects
let person = {
    name: 'Rahul',
    age: 20,
    color: 'black'
};

console.log(person.name);
console.log(person['age']);

//array
let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';
console.log(selectedColors.length);

//function
function greet(name, lastName){
    console.log('Hello ' + name + ' ' + lastName);
}

greet('Rahul', 'Kumar');

//function with return
function square(number){
    return number * number;
}

console.log(square(2));

//type conversion
let num = '10';
console.log(typeof num);
num = Number(num);
console.log(typeof num);
//string()

//type coercion
console.log('1' + 2);
console.log('1' - 2);
console.log(true + 1);
console.log(false + 1);

//truthy and falsy

//falsy

    //undefined
    //null
    //0
    //false
    //''
    //NaN

//anything that is not falsy -> truthy

let userColor = 'red';
let defaultColor = 'blue';
let currentColor = userColor && defaultColor; //
console.log(currentColor);

//bitwise operators
//1 = 00000001
//2 = 00000010
//3 = 00000011
//4 = 00000100

console.log(1 | 2); //bitwise OR
console.log(1 & 2); //bitwise AND

//read, write, execute

//00000100 -> read
//00000010 -> write
//00000001 -> execute

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
myPermission = myPermission | readPermission | writePermission;
console.log(myPermission);

let message = (myPermission & readPermission) ? 'yes' : 'no';
console.log(message);

//operator precedence
x = 2 + 3 * 4;
console.log(x);

//swap
let a1 = 'red';
let b1 = 'blue';

let c1 = a1;
a1 = b1;
b1 = c1;
console.log(a1);
console.log(b1);