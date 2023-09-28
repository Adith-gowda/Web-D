// //creating a object
// let lecture = 10;
// let section = 3;
// let title = 'javascript';

// const course = {
//     lecture: 10,
//     section: 3,
//     title: 'javascript',
//     notes: {
//         note1: 'javascript is a programming language'
//     },
//     enroll(){
//         console.log('enrolled');
//         return 'returning enrolled';
//     }
// }

// console.log(course);
// console.log(course.lecture);
// console.log(course.notes.note1);
// course.enroll();
// console.log(course.enroll())

// // objects are dynamic in nature
// course.price = 100;

//Factory function

function createCircle(radius){ //camel notation
    return {
        Radius: radius,
        draw(){
            console.log('draw');
        }
    };
}

const circle1 = createCircle(1);
console.log(circle1.draw());

// Constructor function

function Circle(radius){ //Pascal notation
    this.radius = radius;
    this.draw = function(){
        console.log('draw1');
    }
}

const circle = new Circle(1); //new operator creates a empty object and then sets this to point to that object and then returns that object from the function 
circle.draw();
console.log(circle);
delete circle.draw;
console.log(circle);

// Constructor property

let x = {}; //let x = new Object();
new String(); // '', "", ``
new Boolean(); // true, false
new Number(); // 1, 2, 3, ...

// Functions are objects
// const Circle1 = new Function('radius', `
// this.radius = radius;
// this.draw = function(){
//     console.log('draw');
// }
// `);

// const another = new Circle1(1);

// Value vs Reference types

// Value types: Number, String, Boolean, Symbol, undefined, null
// Reference types: Object, Function, Array

// Primitives are copied by their value
// Objects are copied by their reference

// Value types are copied by their value
// Reference types are copied by their reference

let number = 10;

function increase(number){
    number++;
}

increase(number);
console.log(number);

let obj = {value: 10};

function increase(obj){
    obj.value++;
}

increase(obj);
console.log(obj.value);


//copying the object

const circle2 = {
    radius: 1,
    draw(){
        console.log('draw');
    }
};

const another = {...circle2};
console.log(circle2);
console.log(another);
another.radius = 2;
console.log(another);
console.log(circle2);

const another1 = Object.assign({}, circle2);
console.log(another1);
another1.radius = 3;
console.log(another1);
console.log(circle2);


for(let key of Object.keys(circle2))
    console.log(key, circle2[key]);








