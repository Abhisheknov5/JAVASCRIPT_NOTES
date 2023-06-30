// Object Constructors

console.log('1 Object Constructors');
// 1 Object Constructors
// Constructor function for Person objects

function Person26 (first, last, age,eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

// Create  Person Object
const boy = new Person26("Amit", "Sharma",22, "black");

// Display age
console.log("boy age is ", boy.age);


console.log('2 Create  two Person Object');
// 2  Create  two Person Object
// Constructor function for Person Objects

function Person26 (first, last, age,eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

// Create  two Person Object
const boy1 = new Person26("Vikash", "Kumar", 28,"black");
const girl1 = new Person26("Priya", "Sharma",23, "black");

// Display age
console.log("boy1 age is ", boy1.age);
console.log("girl1 age is ", girl1.age);


console.log('3 Adding a Property to an Object');
// 3 Adding a Property to an Object
// Constructor function for Person Objects

function Person26 (first, last, age,eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

// Create  two Person Object
const Man = new Person26("Rakesh","Kumar",28,"brown");
const women =  new Person26("Sweta","Jha",22,"brown");

// Add nationality to first object
Man.nationality = "Indian";

// Display age
console.log("Rakesh nationality is ",Man.nationality);
console.log("Sweta nationality is ",women.nationality);


console.log('4 Adding a Method to an Object');
// 4 Adding a Method to an Object
// Constructor function for Person Objects

function Person26 (first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
// Create 2 Person Objects
const boy2 = new Person26("Mohan","Kumar",33,"black");
const girl2 = new Person26("Mohini","Kumar",40,"black");

// Add a name method to first Object
boy2.name = function() {
    return this.firstName + " " + this.lastName;
};
// Display Full Name
console.log("boy2 name is",boy2.name());


// console.log('5 Adding a Property to a Constructor');
// // 5 Adding a Property to a Constructor
// // Constructor function for Person Objects

// function Person26 (first, last, age, eye) {
//     this.firstName = first,
//     this.lastName = last,
//     this.age = age,
//     this.eyeColor = eye;
// }
// // You can NOT add a new property to a constructor function
// Person26.nationality = "English";

// // Create 2 Person Objects
// const boy3 = new Person26("Suman","Kumar",33,"black");

// // Display nationality
// console.log("The nationality of boy3 is",boy3.nationality);

console.log('5 Adding a Property to a Constructor');
// 5 Adding a Property to a Constructor
// To add a new property to a constructor, you must add it to the constructor function:

// Constructor function for Person Objects
function Person26 (first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.nationality = "English";
}
// Create 2 Person Objects
const boy4 = new Person26("Alok","Kumar",33,"green");
const girl4 = new Person26("Sonam","jha",24,"black");

// Display nationality
console.log("boy 4 nationality is",boy4.nationality);
console.log("girl 4 nationality is",girl4.nationality);


console.log('6 Adding a Method to a Constructor');
// 6 Adding a Method to a Constructor
// Your constructor function can also define methods:
// Constructor function for Person Objects
function Person26(first, last, age, eye) {
    this.firstName = first,
    this.lastName = last,
    this.age = age,
    this.eyeColor = eye;
    this.name = function() {
        return this.firstName + " " + this.lastName
    };
}
// Create a Person Object
const boy5 = new Person26("Aman","Kumar",35,"blue");

// Display full Name
console.log("Boy5 name is",boy5.name());


// console.log('6 Adding a Method to a Constructor');
// // 6 Adding a Method to a Constructor
// // Adding methods to an object constructor must be done inside the constructor function:
// // Constructor function for Person Objects

// function Person26(firstName,lastName,age,eyeColor){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age; 
//     this.eyeColor = eyeColor;
//     this.changeName = function (name) {
//         this.lastName = name;
//     }
// }
// // Create a Person Object
// const boy6 = new Person26("SOhan","Jha",33,"black");

// // Change last Name
// boy6.changeName("Sharma");

// // Display last name
// console.log('Boy6 last Name', boy6.lastName);


// Built-in JavaScript Constructors
console.log('Built-in JavaScript Constructors');

// A new String Object
console.log('A new String Object');

const x1 = new String();
console.log(x1);

//  A new Number object
console.log(' A new Number object');

const x2 = new Number();
console.log(x2);

// A new Boolean object
console.log('A new Boolean object');

const x3 = new Boolean();
console.log(x3);

// A new Object object
console.log('A new Object object');

const x4 = new Object();
console.log(x4);

// A new Array object
console.log('A new Array object');

const x5 = new Array();
console.log(x5);

//  A new RegExp object
console.log(' A new RegExp object');

const x6 = new RegExp();
console.log(x6);

// A new Function object
console.log('A new Function object');

const x7 = new Function();
console.log(x7);

//  A new Date object
console.log(' A new Date object');

const x8 = new Date();
console.log(x8);


// Did You Know?
console.log('Did you know');

// new primitive string
console.log('new primitive string');

let y1 = "";
console.log("y1:",typeof y1);

// new primitive number
console.log('new primitive number');

let y2 = 0;
console.log("y2:",typeof y2);

// new primitive boolean
console.log('new primitive boolean');

let y3 = false;
console.log("y3:",typeof y3);

// new Object object
console.log('new Object object');

let y4 = {};
console.log("y4:",typeof y4);

// new Array object
console.log('new Array object');

let y5 = [];
console.log("y5:",typeof y5);

// new RegExp object
console.log('new RegExp object');

let y6 = /()/
console.log("y6:",typeof y6);

// function
console.log('function');

let y7 = function() {};
console.log("y7:",typeof y7);