// JavaScript Maps
console.log('JavaScript Maps');

// You can create a JavaScript Map by:
// Passing an Array to new Map()
// Create a Map and use Map.set()

// 1 new Map()
console.log('1 new Map');
// You can create a Map by passing an Array to the new Map() constructor.
// Create Map
const fruit1 = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);
console.log(fruit1.get("apples"));

// 2 Map.set()
console.log('2 Map set');
// You can add elements to a Map with the set() method.
// Create Map
const fruit2 = new Map();

// set Map values
fruit2.set("apples", 500);
fruit2.set("banana", 300);
fruit2.set("oranges", 200);

console.log(fruit2.get("apples"));

// 3 The set() method can also be used to change existing Map values.
console.log(' 3 The set() method can also be used to change existing Map values.');

// create a Map
const fruit3 = new Map([
    ["apples",500],
    ["bananas",300],
    ["oranges",200]
]);
fruit3.set("apples",200);
console.log(fruit3.get("apples"));

// 4 map.get()
console.log('4 Map.get()');

// create a map
const fruit4  = new Map([
    ["apples",500],
    ["bananas",300],
    ["oranges",200]
]);

console.log((fruit4.get("apples")));

// 5 map.size
console.log('Map.size()');

// create a map
const fruit5 = new Map([
    ["apples",500],
    ["bananas",300],
    ["oranges",200]
]);
console.log(fruit5.size);

// 6 Map.delete()
console.log('6 Map delete');

// create a Map
const fruit6 = new Map([
    ["apples",500],
    ["bananas",300],
    ["oranges",200]
]);
// Delete the element
fruit6.delete("apples");
console.log(fruit6.size);

// 7 Map.clear()
console.log('7 Map.clear()');

// create a map
const fruit7 = new Map([
    ["apples",500],
    ["bananas",300],
    ["oranges",200]
]);
// Clear the Map
fruit7.clear();
console.log(fruit7.size);

// 8  Map.has()
console.log('8 Map.has()');

// Create a map 
const fruit8 = new Map([
    ["apples",500],
    ["bananas",300],
    ["Oranges",200]
]);
console.log(fruit8.has("apples"));

//  8 Another approach for map.has()
console.log(' 8 Another approach for map.has()');

const fruit9 = new Map([  
    ["apples",500],
    ["bananas",300],
    ["Oranges",200]
]);
// Delete an Element
fruit9.delete("apples")
console.log(fruit9.has("apples"));

// 9 Maps are Objects
console.log('9 typeof returns object:');
