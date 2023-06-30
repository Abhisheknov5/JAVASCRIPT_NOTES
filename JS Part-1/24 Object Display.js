// Javascript Object Display
console.log('Javascript Object Display');


// JavaScript Display Objects
// How to Display Objects

const Person12 = {
    name: "Abhishek",
    age: 30,
    city: "Darbhanga"
};
console.log(Person12);

// Displaying Object Properties
console.log('Displaying Object Properties');

const Person13 = {
    name: "Abhishek",
    age: 26,
    city: "Darbhanga"
};
console.log(Person13.name + " , " + Person13.age + " , "  +Person13.city);

// Displaying the Object in a Loop
console.log('Displaying the Object in a Loop');

const Person14 = {
    name: "Abhishek",
    age: 25,
    city: "Darbhanga"
};
let txt = "";
for (let x in Person14) {
    txt += Person14[x] + " ";
};
console.log(txt);

// Using Object.values()
console.log('Using Object.values');

const Person15 = {
    name: "Abhishek",
    age: 30,
    city: "Darbhanga"
};
const myArray = Object.values(Person15);
console.log(myArray);

// Using JSON.stringify()
console.log('Using JSON.stringify');

const Person16 = {
    name: "Abhishek",
    age: 30,
    city: "Darbhanga"
};
let myString = JSON.stringify(Person16);
console.log(myString);

// Stringify Dates
console.log('Stringify Dates');

const Person17 = {
    name: "Abhishek",
    today: new Date()
};
let myString1 = JSON.stringify(Person17);
console.log(myString1);

// Stringify Functions
console.log('Stringify Functions');

const Person18 = {
    name : "Abhishek",
    age: function() {
        return 25;
    }
};
let myString2 = JSON.stringify(Person18);
console.log(myString2);

// JSON.stringify will not stringify functions.
//You have to convert functions to strings first:

const Person19 = {
    name: "Abhishek",
    age: function () { return 25;}
};
Person19.age = Person19.age.toString();

let myString3 = JSON.stringify(Person19);
console.log(myString3);

// Stringify Arrays
console.log('Stringify Arrays');

const arr = ["John", "Peter", "Sally", "Jane"];
let myString4 = JSON.stringify(arr);
console.log(myString4);