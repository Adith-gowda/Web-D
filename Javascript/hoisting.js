//Hoisting  is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.
//This means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.

//Example 1
// console.log(i);
// var i = 10;

//Output
// undefined

//Example 2
sayHello();
console.log(i);
function sayHello() {
  console.log("Hello");
}

var i = 10;

sayHello();
console.log(i);

// //Output
// // Hello
// // 10

//Difference between var , let and const
// var is function scoped
// let and const are block scoped
// var can be redeclared and updated
// let can be updated but not redeclared
// const can neither be updated nor redeclared

let foo = "foo";
var bar = "bar";
function hoist() {
    let foo = "foo2";
    var bar = "bar2";
    console.log(foo); // ReferenceError: Cannot access 'foo' before initialization
    console.log(bar); // undefined
}
hoist();
console.log(foo); // foo
console.log(bar); // bar2

var x = 0;
//global scope
function first(){
    var x = 1;
    console.log(x);
    function childOfFirst(){
        // x = 2; //this will change the value of x in global scope
        var x = 2; //this will not change the value of x in global scope
        console.log(x);
        // console.log(y);
    }
    childOfFirst();
    console.log(x);
}
first();
console.log(x);

//block scope - let and const
var y = 10;
{
    // let y = 20; //this will not change the value of y in global scope
    let y = 20; //this will change the value of y in global scope
    console.log(y);
}
console.log(y);


//const
// const a;//SyntaxError: Missing initializer in const declaration
const a = 10;

