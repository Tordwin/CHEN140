// Create a String and an int variable below
let str = "Hi";
let int = 5;

// console.log the String value
console.log(str);

// console.log the int * 2
console.log("Doubled value = " + int * 2);

// Create a function that will double the inputted number
function double (x){
    return x * 2;
}

// console.log the function with a chosen value as a parameter
console.log ("Double function = " + double(2));

// build an object of yourself with 3 properties
const student = function (firstName, lastName, className) {
    this.firstName = firstName
    this.lastName = lastName
    this.className = className
};

const edwin = new student('Edwin','Chen','ISTE140');

// console.log your name
console.log(edwin.firstName);

/* create variables for an unordered list of HTML elements
(one ul, and three li) */
const list = document.createElement('ul');
const item1 = document.createElement('li');
const item2 = document.createElement('li');
const item3 = document.createElement('li');

//insert the object properties through innerText into the li elements
item1.innerText = edwin.firstName;
item2.innerText = edwin.lastName;
item3.innerText = edwin.className;

console.log(item3.innerText);

//append the list items to the ul
list.append(item1, item2, item3);
console.log (list.innerHTML);

// display these within the <div class="collector">
const div = document.querySelector('.collector');
div.appendChild(list);