// Javascript Sets
console.log('JavaScript Sets');

// 1 The new Set() Method
// Pass an Array to the new Set() constructor.
console.log('1 The new Set() Method');

// Create a Set
const letter1 = new Set(["a","b","c","d"]);

// Display the set size
console.log(letter1.size);

// 2 Create a Set and add literal values.
console.log('2 Create a Set and add literal values');

// Create a Set
const letter2 = new Set();

// Add VAlues to the Set
letter2.add("a");
letter2.add("b");
letter2.add("c");

// Display set.size
console.log(letter2.size);


// 3 Create a Set and add variables.
console.log('3 Create a Set and add variables');

// Create Variables
const a = "a";
const b = "b";
const c = "c";
const d = "d";

// Create a Set
const letter3 = new Set();

// Add Variables to the Set
letter3.add(a);
letter3.add(b);
letter3.add(c);
letter3.add(d);

//Display set.size
console.log(letter3.size);

// 4 The add() Method
console.log('The add() Method');

// Create a new Set
const letter4 = new Set(["a","b","c","d"]);

// Add a new element
letter4.add("e");
letter4.add("f");

// Display set.size
console.log(letter4.size);

// 5 If you add equal elements, only the first will be saved.
console.log('If you add equal elements, only the first will be saved');

// Create a Set
const letter5 = new Set();

// Add values to the set
letter5.add("a");
letter5.add("b");
letter5.add("c");
letter5.add("c");
letter5.add("c");
letter5.add("c");
letter5.add("c");
letter5.add("c");

// Display set.size
console.log(letter5.size);

// 6 The forEach() Method
console.log('6 The forEach() Method');

// Create a Set
const letter6 = new Set(["a","b","c","d"]);

// List all elements
let text1 = "";
letter6.forEach(function(value){
    text1 += value + "\n";
})
console.log(text1);


// 7 The values() Method
console.log('7 The values() Method');

// create a Set 
const letter7 = new Set(["a","b","c","d"]);

// Display set.size
console.log(letter7.values());

// 8 The keys() Method
console.log('8 The keys() Method');

// Create a Set
const letter8 = new Set(["a","b","c","d"]);

// Display set.size
console.log(letter8.keys());

// 9 The entries() Method
console.log('9 The entries() Method');

// Create a Set
const letter9 = new Set(["a","b","c","d"]);

// List all entries
const iterator = letter9.entries();
let text2 = "";
for (const entry of iterator) {
    text2 += entry + "\n";
}
console.log(text2);

// Sets are Objects
// 10 For a Set, typeof returns object.
console.log('10 For a Set, typeof returns object.');

// Create a new Set
const letter10 = new Set(["a","b","c","d"]);

// Display typeof
console.log(typeof letter10);

// 11 For a Set, instanceof Set returns true
console.log('11 For a Set, instanceof Set returns true');

// Create a new Set 
const letter11 = new Set(["a","b","c","d"]);

// Display typeof
console.log(letter11 instanceof Set);
