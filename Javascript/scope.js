//the scope is by defualt global
var name = "harry"; //global scope

//window is the global object in javascript and it is the parent of all objects in javascript 
// console.log(window.name);

let sayName = () => {
    // var name = "Mr. H";
    var marks = 34;
    console.log(name);
}
sayName();
// console.log(marks); //this will give error because marks is not defined in global scope

//if we use let or const then the scope is limited to the block in which it is defined
//if we use var then the scope is global if it is defined outside the function and if it is defined inside the function then the scope is limited to that function only

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

//if we use var then the scope is limited to the function in which it is defined
function second(){
    console.log(x);
}
second();


//block scope - let and const
var y = 10;
{
    // let y = 20; //this will not change the value of y in global scope
    var y = 20; //this will change the value of y in global scope
    console.log(y);
}
console.log(y);

//this block we will use in control statements like if, for, while, etc. but in functions

if(1){
    var z = 30;
    // let z = 30; //this will not change the value of z in global scope
    // console.log(z);
}
console.log(z);

//lexical scope - the scope of a variable is defined by its position in the source code
//lexical means - related to words or vocabulary

function outer(){
    var a = 10;
    // console.log(hello); //this will give error because hello is not defined in global scope
    function inner(){
        var hello = 20;
        console.log(a);
        function innerInner(){
            // console.log(y);
            var likes = "coding";
        }
        // console.log(likes); //this will give error because likes is not defined in global scope
        innerInner();
    }
    // console.log(hello); //this will give error because y is not defined in global scope
    inner();
    // console.log(y); //this will give error because y is not defined in global scope
}
outer();

