// ** Array **//
console.log("Array");
/*

 */
/*
//Creating an Array
let fruits = ["apple","mango","Orange"];
console.log(fruits);
//ordered collection
console.log(fruits[1]);

let numbers = [1,2,3,4,5];
console.log(numbers);


const cars = [];
cars[0] = "Baleno";
cars[1] = "Swift";
console.log(cars);
*/
//Using the JavaScript Keyword new
console.log("New keyword");
const carr = new Array("Baleno","Swift","Magnite");
console.log(carr);

// Accessing Array Elements
console.log(" Accessing Array Elements");
const cars = ["Creta","Magnite","Swift"]
let car = cars[0];
console.log(car);
//Changing an Array Element
console.log("Changing an Array Element");
cars[2]="Baleno";
console.log(cars);

//Arrays are Objects
//Array
console.log("Array")
const person = ["Abhishek","Kumar",20];
console.log(person);

//Object
//Objects use names to access its "members". In this example, person.firstName returns John:
console.log("Objects");
const persons = {firstName:"Abhishek",lastName:"Kumar",age:20};
console.log(persons);

// Array Properties and Methods
//Length Property
console.log("Length Property")
const fruits = ["Apple","Banana","Orange","Mango"]
let length = fruits.length;
console.log(length);

//Accessing the First Array Element
console.log("Accessing the First Array Element");
let fruit = fruits[0];
console.log(fruit);

//Accessing the Last Array Element
console.log("Accessing the Last Array Element")
let fruitss = fruits[fruits.length - 1];
console.log(fruitss);

//Looping Array Elements


//Adding Array Elements
console.log("Adding Array Elements");
fruits.push("Lemon");
console.log(fruits);

//New element can also be added to an array using the length property:
const a =[1,2,3,4,5];
a[a.length]="10";
console.log(a);

// Associative Arrays
const personn =[];
personn[0] = "Abhishek";
personn[1] = "Kumar";
personn[2] = 25;
personn.length; // it will return 3
personn[0]; // it will return "Abhishek"
console.log(personn);

//WARNING !!
//If you use named indexes, JavaScript will redefine the array to an object.
//After that, some array methods and properties will produce incorrect results.
const perso = [];
perso["firstName"] = "Abhishek";
perso["lastName"] = "Kumar";
perso["age"] = 25;
perso.length; // it will return 0
perso[0];      // it will return undefined
console.log(perso);

//JavaScript new Array()
//These two different statements both create a new array containing 6 numbers:
console.log("Javascript new Array");
//const points = new Array(10,20,30,40,50);
const points =[10,20,30,40,50];
console.log(points);

// How to Recognize an Array
console.log("How to Recognize an Array");
const Boy =["Abhishek","Aman","Alok","Sohan"];
let type = typeof Boy;
console.log(type);

const Girl= ["Priya","Anamika"];
Girl instanceof Array;
console.log(Girl);

// Multi dimensional Array
console.log("Multi dimensional Array");
let studentsData = [['Alok',22],['Aman',23]];
console.log(studentsData);




//Arrays in js

// when we use var we can stored only one value at a time.
// var friend1 = 'Abhishek';
// var friend2 = 'Aman';
// var friend3 = 'Alok';
//var myFriends =['Abhishek',22,male,'Aman',23,male,'Alok',true,32];

// When we feel like storing multiple values in one variable then 
// instead of var, we will use an Array.

// In JavaScript, we have an Array class, and 
// arrays are the prototype of this class. 
//Example:-
//var myFriends =['Abhishek',22,male,'Aman',23,male,'Alok',true,32];

//  1️ Array Subsection 1  Traversal in array
console.log(" 1  Traversal in array ");

// navigate through an array

// if we want to get the single data at a time  and also 
// if we want to change the data 

var myFriends =['Abhishek','Aman','Arjun','Vishal','Arjun'];
console.log(myFriends[0]);
console.log(myFriends.length - 1);


//if we want to check the length of elements of an array
console.log(myFriends.length);

// We use for loop to navigate
console.log('for loop');
var myFriends =['Abhishek','Aman','Arjun','Vishal','Arjun'];
for(var i=0;i<myFriends.length;i++){
    console.log(myFriends[i]);
}
// After ES6 we have far ..in and for..of loop too
// for in
console.log("in");
var myFriends = ['Abhishek','Aman','Arjun','Vishal','Arjun'];
for(let elements in myFriends){
    console.log(elements);
}
// for of
console.log("of");
for(let elements of myFriends){
    console.log(elements);
}

// Array.prototype.forEach()
// Calls a function for each element in the array.
console.log("Array.prototype.forEach")
var myFriends = ['Abhishek','Aman','Arjun','Vishal','Alok'];
myFriends.forEach(function(element,index,array){
    console.log(element + " index : " + index + " " + array);
});

//Fat Arrow Function
console.log('Fat Arrow Function');
myFriends.forEach((element, index, array)=>{
    console.log(element + " index : " + index + " " + array);
});


