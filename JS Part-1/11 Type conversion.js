//**TYPE CONVERSION  **/
console.log("** TYPE CONVERSION  **")

//Types of Operator 
// In a javascript normal inputs is found in  a String.
// let type = 1;
// let type = "1"
// let type = true;

//Type conversion 2 types 
// 1 Automatically

// let type ="1" + null;
// let type ="1" + 2;
// let type ="1" -2;
// let type ="1" * "2";
// let type ="5" + "Yes";
// console.log(type);
// console.log(typeof type);

// 2 In a Javascript 3 Function
// 1. String Function
// 2.Number()
// 3.Boolean()
/*
// 1 String Function
let type = 4;
console.log(typeof type);

let Newtype = String(type);
console.log(typeof Newtype);
*/

/*
//Boolean to string
let type = false;
console.log(typeof type);

let Newtype = String(type);
console.log(typeof type);
*/
/*
//String and boolean convert to number
let type = "Hello";
console.log(typeof type);


let Newtype = Number(type);
console.log(Newtype);
console.log(typeof type);
*/
 /*
//Implicit conversion
let result;
result = '5'-2;
console.log(result);

result = '4'- true;
console.log(result);
*/

//Explicit conversion
let result;
result = Number('324e-1');
console.log(result);

result = parseInt("20.01");
console.log(result);

result = parseInt("20.01");
console.log(result);
