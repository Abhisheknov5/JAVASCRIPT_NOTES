// Object Iterables
console.log('Object Iterables');

// 1 Iterating Over a String for..of
console.log('1 Iterating Over a String for..of');

// Create a String
const names = "Abhishek";

// List all elements
let text1 = "";
for (const x of names) {
    text1 += x+"\n";
}
console.log(text1);

// 2 Iterating Over an Array for..of
console.log('2 Iterating Over an Array for..of');

// Create a Array
const letters = ["a","b","c","d"];

// List all elements
let text2 = "";
for (const x of letters) {
    text2 += x+"\n";
}
console.log(text2);

// JavaScript Iterators
// 3 Home Made Iterable
console.log('3 Home Made Iterable');

function myNumbers() {
    let n = 0;
    return {
        next: function() {
            n += 10;
            return {
                value:n,
                done:false
            };
        }
    };
}
// Create Iterable
const n =  myNumbers();
n.next(); // 10
n.next(); 
n.next();
console.log(n.next().value);
