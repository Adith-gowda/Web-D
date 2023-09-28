//Root node
console.log(document.documentElement);
//Head node
console.log(document.head);
//Body node
console.log(document.body);


//Childrens
console.log(document.body.childNodes); //All nodes
console.log(document.body.children); //Only elements
// console.log(document.body.children[0]); //Only elements
console.log(document.body.firstChild); //First node
console.log(document.body.firstElementChild); //First element
console.log(document.body.lastChild); //Last node
console.log(document.body.lastElementChild); //Last element

const childrensOfBody = Array.from(document.body.children);
console.log(childrensOfBody);

//Siblings
const ulTag = document.body.children[0];
// console.log(ulTag.firstElementChild.nextElementSibling); //Second element
const firstLi = ulTag.firstElementChild; //const firstLi = ulTag.children[0];
const secondLi = firstLi.nextElementSibling; // const secondLi = ulTag.children[1];
const thirdLi = secondLi.nextElementSibling; // const thirdLi = ulTag.children[2];
console.log(firstLi);
console.log(secondLi);
console.log(thirdLi);
console.log(secondLi.previousElementSibling.textContent)

//Table DOM manipulation
const table = document.body.children[1];
console.log(table);
console.log(table.rows); //All rows
console.log(table.tBodies[0].rows[0].cells[0].textContent); //One

//Create element
const newLi = document.createElement('li');
newLi.textContent = 'Fourth element';

//Append element
ulTag.appendChild(newLi);

//Insert element
const newLi2 = document.createElement('li');
newLi2.textContent = 'Fifth element';
ulTag.insertBefore(newLi2, thirdLi);

//Remove element
ulTag.removeChild(newLi2);

//Replace element
const newLi3 = document.createElement('li');
newLi3.textContent = 'Sixth element';
ulTag.replaceChild(newLi3, thirdLi);

//Clone element
const newLi4 = newLi3.cloneNode(true);
ulTag.appendChild(newLi4);

//styling the table
table.style.border = '1px solid black';
table.style = 'background-color: blue;'

//ID search
// const element = document.getElementById('element');
// console.log(element.style.fontStyle = 'italic');

//Class search
// const elements = document.getElementsByClassName('element');
// console.log(elements);

//Tag search
const elements2 = document.getElementsByTagName('li');
console.log(elements2);

//Query selector
const element = document.querySelector('#element');
console.log(element);

const element2 = document.querySelector('.element');
console.log(element2);

const element3 = document.querySelector('li');
console.log(element3);

const element4 = document.querySelectorAll('li');
console.log(element4);

document.querySelectorAll('li').forEach(el => console.log(el));

//getAttribute
console.log(element.getAttribute('id'));

//setAttribute
element.setAttribute('class', 'element');

//createTextNode
const text = document.createTextNode('Hello World');
console.log(text);

document.body.appendChild(text);

//innerHTML
document.body.innerHTML = `<table>
                                <tr>
                                    <td>One</td>
                                    <td>Two</td>
                                </tr>
                                <tr>
                                    <td>Three</td>
                                    <td>Four</td>
                                </tr>
                        </table>`;  

//innerText
document.body.innerText = `<table>
                                <tr>
                                    <td>One</td>
                                    <td>Two</td>
                                </tr>
                                <tr>
                                    <td>Three</td>
                                    <td>Four</td>
                                </tr>
                        </table>`;

//addEventListener
const button = document.createElement('button');
button.textContent = 'Click me';
document.body.appendChild(button);
var name = 'Sagar';
button.addEventListener('click', function(){
    // console.log('Button clicked');
    alert('Button clicked by ' + name);
});

//Event object
const button2 = document.createElement('button');
button2.textContent = 'Click me';
document.body.appendChild(button2);

function callMe(event){
    console.log(event);
    console.log(event.target);
    console.log(event.target.textContent);
    console.log(event.target.nodeName);
    console.log(event.target.nodeType);
}

button2.addEventListener('click', callMe);

//removeEventListener
button2.removeEventListener('click', callMe);
