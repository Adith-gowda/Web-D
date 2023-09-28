const array = [1, 2, 3, 4, 5];
console.log(array.length);

const num = new Array(1, 2, 3, 4, 5);
console.log(num.length);

const str = new Array('Hi', 'Hello', 'Bye');
console.log(str.length);

//push - add element at last
num.push(6, 7);
console.log(num);

//unshift - add element at first
num.unshift(0);
console.log(num);

//pop - remove last element
console.log(num.pop());
console.log(num);

//shift - remove first element
console.log(num.shift());
console.log(num);

num[0]=true;
console.log(num);

const names = ['John', 'Bob', 'Alex', 'Jack'];
console.log(names);

//indexOf - find index of element
console.log(names.indexOf('Alex', 1));

//lastIndexOf - find last index of element
console.log(names.lastIndexOf('Alex'));

//includes - check element is present or not
console.log(names.includes('Alex'));
console.log(names.includes('Al'));

//join - join all elements of array
console.log(names.join(' '));

//find
const person = [
    {name: 'John', age: 25},
    {name: 'Bob', age: 30},
    {name: 'Alex', age: 20},
    {name: 'Jack', age: 35}
];
console.log(person.find(p => p.age > 30));

console.log(person.find(function(p) { //find first element which satisfy condition and return it
    return p.age >= 30;
}));

//findIndex
console.log(person.findIndex(p => p.age > 30));

//concat - merge two arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
console.log(arr1.concat(arr2));
let arr3 = [...arr1, ...arr2]; //spread operator
console.log(arr3);

//slice - copy array elements
console.log(arr1.slice(1));
console.log(arr1.slice(1, 2));
console.log(arr1.slice(-2));
console.log(arr1.slice(-2, -1));

//splice - remove elements from array
console.log(arr3.splice(2,2)); //remove 2 elements from index 2
console.log(arr3);

//reverse - reverse array elements
console.log(arr3.reverse()); 

//sort - sort array elements
console.log(arr3.sort());

//sort in descending order
console.log(arr3.sort((a, b) => b - a)); 

//sort in ascending order
console.log(arr3.sort((a, b) => a - b)); 

//fill - fill array with given value
console.log(arr3.fill(0, 2, 4)); //fill 0 from index 2 to 4


//forEach - iterate array elements
arr3.forEach((value, index) => console.log(index, value));

//split - convert string to array
const str1 = 'Hi, Hello, Bye';
console.log(str1.split(', '));

const str2 = 'adith';
console.log(str2.split(''));

//filter - filter array elements
console.log(person.filter(value => value.age > 25));

//map - map array elements
let arr4 = arr3.map(value => value * 2);
console.log(arr4);

//how to delete element at some index in array
delete arr4[1];
console.log(arr4);

//how to delete array 
arr4 = [];
console.log(arr4);

//how to check array is empty or not
console.log(arr4.length === 0);





