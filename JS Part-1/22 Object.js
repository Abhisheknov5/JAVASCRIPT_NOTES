// Object
console.log("Object");

// Objects are variables
console.log("Objects are variables");

const Person = "Abhishek";
console.log(Person);

// Creating a Javascript Object
// 1 Object Literal
console.log("1 Object Literal")
const Person1 = {firstName: "Abhishek",lastName:"Kumar",age:25,eyeColor:"blue"};
console.log(Person1.firstName + " is " + Person1.age + " years old.");

// Spaces and line breaks are not important. An object definition can span multiple lines.
console.log("Spaces and line breaks are not important. An object definition can span multiple lines.");
const Person2 = {
    firstName: "Abhishek",
    lastName: "Sharma",
    age:26,
    eyeColor: "blue"
}
console.log(Person2);

// Object with no properties or methods
console.log("Object with no properties or methods");
const emptyObject = {};
console.log(emptyObject);

//  creates an empty JavaScript object, and then adds 4 properties
console.log("creates an empty JavaScript object, and then adds 4 properties");

const Person3 ={};
Person3.firstName = "Abhishek",
Person3.lastName = "Kumar",
Person3.age = 26;
Person3.eyeColor = "black";
console.log(Person3.firstName + " is " + Person3.age + " years old.");

// Objects with Single property
console.log("Objects with Single property");
const p = {firstName: "Abhishek"};
console.log(p);

// 2 Using the JavaScript keyword new
console.log("2 Using the JavaScript keyword new");

const Person4 = new Object();
Person4.firstName = "Rakesh";
Person4.lastName = "Kumar";
Person4.age = 28;
Person4.eyeColor = "blue";
console.log(Person4.firstName + " is " + Person4.age + " years old ");

// Javascript Objects are Mutable
console.log("Javascript Objects are Mutable");

const Person5 = {
    firstName:"Mohan",
    lastName:"kumar",
    age:55,
    eyeColor:"blue"
}
const d = Person5;
d.age = 80; // will change both z.age and person.age
console.log(Person5.firstName + " is " + Person5.age + " years old ");

// Javascript Object Properties
console.log("Javascript Object Properties");

const Person6 = {
    firstName:"Abhishek",
    lastName:"kumar",
    age:25,
    eyeColor:"black"
}
console.log(Person6.firstName + " is " +Person6.age+ " Years old.");
console.log(Person6["firstName"] + " is "+Person6["age"]+ "years old.");

// js for ..in loop
console.log("js for ..in loop");
const Person7 = {
    firstName:"Abhishek",
    lastName:"kumar",
    age:25,
    eyeColor:"black"
}
for (const key in Person7){
    console.log(key + " : " + Person7[key]);
}

// Adding New properties
console.log("Adding New properties");
const Person8 = {
    firstName:"Abhishek",
    lastName:"kumar",
    age:25,
    eyeColor:"black"
}
Person8.nationality = "English";
console.log(Person8.firstName + " is " + Person8.nationality + ".");

// Deleting the Properties
console.log("Deleting the Properties");

const Person9 = {
    firstName:"Abhishek",
    lastName:"kumar",
    age:25,
    eyeColor:"black"
}
delete Person9.age;
console.log(Person9.firstName + " is " + Person9.age + " years old.");

// Nested Objects
console.log('Nested Objects');

const myObj = {
    name:"Abhishek",
    age:22,
    cars: {
        car1:"Ford",
        car2:"BMW",
        car3:"Fiat"
    }
}
console.log(myObj.cars.car2);
console.log(myObj.cars["car2"]);
console.log(myObj["cars"]["car2"]);

let p1 = "cars";
let p2 = "car2"
console.log(myObj[p1][p2]);

// Nested Arrays and Objects
console.log('Nested Arrays and Objects');

const myObj1 = {
    name:"Abhishek",
    age: 25,
    cars: [
        {name:"Ford",models:["Fiesta","Focus"]},
        {name:"BMW",models:["320","X3"]},
        {name:"Fiat",models:["500","Panda"]}
    ]
}