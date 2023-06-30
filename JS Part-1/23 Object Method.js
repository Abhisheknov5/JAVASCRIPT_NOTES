// JavaScript Object Methods
console.log('JavaScript Object');

// 1 Accesing Object Methods
console.log(' 1 Accesing Object Methods');

const Person9 = {
    firstName: "Abhishek",
    lastName: "Kumar",
    id: 5566,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};
console.log(Person9.fullName());

// 2 Adding a Method to an Object
console.log('2 Adding a Method to an Object');

const Perso10 = {
    firstName: "Abhishek",
    lastName: "Kumar",
    id: 5566,
};
    Perso10.name = function() {
        return this.firstName + " " +this.lastName;
    }
console.log("My name is " + Perso10.name());

// 3 Using Built -In Method
console.log('3 Using Built -In Method');

const Person11 = {
    firstName: "Abhishek",
    lastName: "Kumar",
    id: 5566,
};
Person11.name = function() {
    return (this.firstName + " " +this.lastName).toUpperCase();
};
console.log("My Name is " + Person11.name());

// JavaScript Display Objects
// 4 How to Display Objects
console.log('4 How to Display Objects');

const Person12 = {
    name: "Abhishek",
    age: 30,
    city: "Darbhanga"
};
console.log(Person12);

// 5 Displaying Object Properties
console.log('5 Displaying Object Properties');

const Person13 = {
    name: "Abhishek",
    age: 26,
    city: "Darbhanga"
};
console.log(Person13.name + " , " + Person13.age + " , "  +Person13.city);

// 6 Displaying the Object in a Loop
console.log('6 Displaying the Object in a Loop');

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

// 7 Using Object.values()
console.log('7 Using Object.values');

const Person15 = {
    name: "Abhishek",
    age: 30,
    city: "Darbhanga"
};
const myArray = Object.values(Person15);
console.log(myArray);

// 8 Using JSON.stringify()
console.log('8 Using JSON.stringify');

const Person16 = {
    name: "Abhishek",
    age: 30,
    city: "Darbhanga"
};
let myString = JSON.stringify(Person16);
console.log(myString);

// 9 Stringify Dates
console.log('9 Stringify Dates');

const Person17 = {
    name: "Abhishek",
    today: new Date()
};
let myString1 = JSON.stringify(Person17);
console.log(myString1);

// 10 Stringify Functions
console.log('10 Stringify Functions');

const Person18 = {
    name : "Abhishek",
    age: function() {
        return 25;
    }
};
let myString2 = JSON.stringify(Person18);
console.log(myString2);

// 11  JSON.stringify will not stringify functions.
//You have to convert functions to strings first:
console.log('11  JSON.stringify will not stringify functions');

const Person19 = {
    name: "Abhishek",
    age: function () { return 25;}
};
Person19.age = Person19.age.toString();

let myString3 = JSON.stringify(Person19);
console.log(myString3);

// 12 Stringify Arrays
console.log('12 Stringify Arrays');

const arr = ["John", "Peter", "Sally", "Jane"];
let myString4 = JSON.stringify(arr);
console.log(myString4);