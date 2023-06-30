// rules for naming variables 

// you cannot start with number 
// example :- 
// 1value (invalid)
// value1 (valid)

var value1 = 2;
console.log(value1);

var value2 = 2;
console.log(value2 + 10);
console.log(value2 * 10);
console.log(value2 ** 10);
console.log(value2 /10);



// you can use only undersore _ or dollar symbol 
// first_name (valid)
var first_name = "Abhishek";
console.log(first_name);

// _firstname (valid) 
var _firstname= "Alok";
console.log(_firstname);

// first$name (valid)
var first$name = "Rakesh";
console.log(first$name);

// $firstname (valid)
var $firstname = "Mohan";
console.log($firstname);

// you cannot use spaces 
// var first_name = "Abhishek"; // snake case writing 
// var firstName = "Abhishek"; // camel case writing 
// first name (invalid)

// convention 
// start with small letter and use camelCase 

//global vs Local variable 

let car = "Audi"// Gloobal variable

function add(){
    let result = 46; // Local Variable
    console.log(result);
    console.log(car);
}
add();
//console.log(result);
//console.log(car);  // Error because we can not define local VAriable outside the function.

let bike = " Hero-Honda"; //Global VAriable
// let bike = " Honda"; //Error
function add(){
    let results = 23; //Local Variable
    console.log(results);
}
function sub(){
    let result = 50;
    console.log(result);
}
add();
sub();
