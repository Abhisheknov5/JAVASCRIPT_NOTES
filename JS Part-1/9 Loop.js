//Loop
console.log("Loop");
// 1 While Loop Statement
// The while statement creates a loop that executes a specified statement
// as long as the test condition evaluates to true. 

// console.log("while Loop")

// let i = 0;
// while(i<=9){
//     console.log(i);
//     i++;
// }

// First n natural Number Sum
//  let num = 10;
//  let total = 0;
//  let n = 0;
//  while(n<=10){
//      total = total + n;
//      n++;
//  }
//   console.log(total);

// 2 Do-While Loop Statement

//   let j = 1;
//   do{
//       console.log(j);
//      j++;
//  }while(j<=11);


// let j = 10;
// do{
//     console.log(j);
//     j++;
// }while(j<=9);

// console.log("Value of j is",j);

// 3 for loop
// for(var i =0;i<=9;i++){
//     console.log(i);
// }
// console.log("Value of i is",i);

// First n natural Number Sum
let total = 0;
let num = 100;

for(let i = 1; i<=num; i++){
    total = total + i;
}
console.log(total);


// The for in loop
console.log('for in loop');

const Person = {fname:"Abhishek ",lastName:" Kumar ",age:25};
let txt = "";
for(let x in Person){
    txt+=Person[x];
}
console.log(txt);

// For in Over Arrays
console.log('For in Over Arrays');
const number1 = [45,49,16,25];
let txt1 = "";
for (let x in number1) {
    txt1 += number1[x];
}
console.log(number1);

// Array.for Each()
console.log('Array for Each');

const number2 = [34,44,55,66];
let txt2 = "";
number2.forEach(myFunction);

function myFunction(value,indx,array){
    txt2 += value;
}
console.log(number2);

// The For of loop
// Looping Over Array

console.log('the for of loop');
const cars = ["BMW","Volvo","Mini"];
let txt3 = "";
for (let x of cars) {
    txt3 += x;
}
console.log(cars);

//Looping Over a String 
console.log('Looping Over a String ');
let language = "Javascript";

let txt4 = "";
for (let x of language) {
    txt4 += x;
}
console.log(language);

// JavaScript Iterables
console.log('JavaScript Iterables');

// The For of Loop
console.log('The For of Loop');
// Iterating Over a String
console.log('Iterating Over a String');

const name_ = "Abhishek";
for (const x of name_){
    console.log(x);
}

// Iterating Over an Array
console.log('Iterating Over an Array');

const letter1 = ["a","b","c"];
for (const x of letter1) {
    console.log(x);
}

// Iterating Over a Set
console.log('Iterating Over a Set');

const letter2 = new Set(["a","b","c","d"]);
for (const x of letter2) {
    console.log(x);
}

// Iterating Over a Map
console.log('Iterating Over a Map');

const fruits = new Map([
    ["apples",500],
    ["bananas",300],
    ["oranges",200]
]);
for (const x of fruits) {
    console.log(x);
}



// Javascript Set
console.log('Javascript Set');

// create a Set
console.log('create a Set');
const letter3 = new Set(["a","b","c"])
console.log(letter3.size);

// 1 Create a Set and add values
console.log('1 Create a Set and add values');

const letter4 = new Set();

// Add values to the set
letter4.add("a")
letter4.add("b")
letter4.add("c")
console.log(letter4.size);

// 2 Create a Set and add Variables
console.log('2 Create a Set and add Variables');

// Create a Set 
const letter5 = new Set();

// Create Variables
const a = "a";
const b = "b";
const c = "c";

// Add Variables to the Set
console.log(letter5.add(a));
console.log(letter5.add(b));
console.log(letter5.add(c));
console.log(letter5.size);

// 3 The add() Method
console.log('3 The add Method');

const letter6 = new Set(["a","b","c"]);

// Add a new Element
console.log(letter6.add("d"));
console.log(letter6.add("e"));

// Display set.size
console.log(letter6.size);

// 4 If you add equal elements, only the first will be saved:
console.log('4 If you add equal elements, only the first will be saved:');

const letter7 = new Set();
// Add values to the set
letter7.add("a");
letter7.add("b");
letter7.add("c");
letter7.add("c");
letter7.add("c");

// Display the set.size
console.log(letter7.size);

//5 the for each method
console.log('5 the for each method');
// Create a Set
const letter8 = new Set(["a","b","c"]);

// List all Elements
let text = "";
letter8.forEach (function(value) {
  text += value;
})
console.log(text);

// 6 The  values Method
console.log('6 The values Method');

// Create a Set
const letter9 = new Set(["a","b","c"]);

// Display set.size
console.log(letter9.values());

// Javascript Map
console.log('Javascript Map');

// 1 Create a Map with new map() method

console.log('1 The new Map() Method');

// Create a Map
const fruit1 = new Map([
    ["apples",500],
    ["bananas",300],
    ["oranges",200]

]);
console.log(fruit1.get("apples"));

// 2 The Set Method
console.log('2 The Set Method');
// Create a Map
const fruit2 = new Map();

// Set Map Values
fruit2.set("apples", 500);
fruit2.set("bananas", 300);
fruit2.set("oranges", 200);

console.log(fruit2.get("apples"));

// 3 The set() method can also be used to change existing Map value.
console.log('3 The set() method can also be used to change existing Map value.');

// create map
const fruit3 = new Map([
    ["apple",500],
    ["bananas",200],
    ["oranges",200]
]);
fruit3.set("apple",200);
console.log(fruit3.get("apple"));

// 4 The get() Method
console.log('4 The get() Method');
// Create a Map
const fruit4 = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
console.log(fruit4.get("apples"));

// 5 The Size Property
console.log('5 The Size Property');
// Create a Map
const fruit5 = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
console.log(fruit5.size);


// 6 The delete() Method
console.log('The delete() Method');

// Create a Map
const fruit6 = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);
// Delete an Element
fruit6.delete("apples");
console.log(fruit6.size);

// 7 The has() Method
console.log('7 The has() Method');

const fruit7 = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);
console.log(fruit7.has("apples"));

// 8 The for each() Method
console.log('8 The for each() Method');

const fruit8 = new Map([
    ["apples",500],
    ["bananas",300],
    ["oranges",200]
]);

let text1 = "";
fruit8.forEach(function(value,key) {
    text1 += key + ' = ' + value;
})
console.log(text1);

// 9 The entries() Method
console.log('9 The entries() Method');

