//**  Function  **
console.log("** Function **");


//  1 Function Definition 
// Before we use a function, we need to define it. 

// A function definition (also called a function declaration, or function statement) 
// consists of the function keyword, followed by:

// The name of the function.
// A list of parameters to the function, enclosed in parentheses and separated by commas.
// The JavaScript statements that define the function, enclosed in curly brackets, {...}.
/*
   function functionName()
        {
            //Statement
        }
*/

/*
// Add 2 Number
var a = 10;
var b = 20;
var sum = a+b;
console.log(sum);
*/

/*
// by Function method
function sum(){
    var a = 10;
    var b = 20;
    var total = a+b;
    console.log(total);
}
*/
/*

// 2️ Calling functions
// Defining a function does not execute it.
// A JavaScript function is executed when "something" invokes it (calls it).

function sum(){
    var a = 10;
    var b = 20;
    var total = a+b;
    console.log(total);
}
sum();*/

// 3️ Function Parameter vs Function Arguments 
/*
Function Parameter:-
A function can have one or more parameters, which will be supplied by the calling code and can be used inside a function.
JavaScript is a dynamic type scripting language, so a function parameter can have value of any data type.

The Arguments Object:-
All the functions in JavaScript can use arguments object by default. An arguments object includes value of each parameter.
The arguments object is an array like object. You can access its values using index similar to array. However, it does not support array methods.
 */
/*
function sum(a,b){
    var total = a+b;
    console.log(total);
}
sum();
sum(20,30);
sum(30,50);
sum(5,6);
*/
/*
// Why Functions? 

// You can reuse code: Define the code once, and use it many times.
// You can use the same code many times with different arguments, to produce different results.

  // OR

// A function is a group of reusable code which can be called anywhere 
// in your program. This eliminates the need of writing the same code 
// again and again.

// DRY => do not repeat yourself
*/


// 4️ Function expressions

// "Function expressions simply means 
// create a function and put it into the variable "
/*
function sum(a,b){
    var total = a+b;
    console.log(total);
}
var funExp = sum(5,10);
*/

// 5 Return Keyword
// When JavaScript reaches a return statement, 
// the function will stop executing.

// Functions often compute a return value.
// The return value is "returned" back to the "caller"

// function sum(a,b){
//     return total = a+b;
// }
// var funExp = sum(5,10);
// console.log("The sum of two no is " + funExp);

// 6 Anonymous function
/*
JavaScript allows us to define a function without any name. 
This unnamed function is called anonymous function. 
Anonymous function must be assigned to a variable.

Anonymous function is useful in passing callback function,
creating closure or Immediately invoked function expression.
*/
var funExp = function (a,b){
    return total = a+b;
}
//console.log(funExp(5,15));
var sum = funExp(5,15); 
var sum1 = funExp(20,30);
console.log("The sum of two no is " + sum);
console.log("The sum of two no is " + sum1);

console.log(sum > sum1);


// check number is even or not
// is Even
// input : 1 number
// output : true, false

// function Even(number){
//     if(number % 2 === 0){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(Even(2));

function Even(number){
    return number % 2 === 0;
}
console.log(Even(2));

//console.log(12 % 2 === 0);

// 7  Function Constructor
const myFunction = new Function("a", "b", "return a * b");
let x = myFunction(4, 3);
console.log(x);

// 8 Self-Invoking Functions
//Function expressions can be made "self-invoking".
//A self-invoking expression is invoked (started) automatically, without being called.

(function () {
    let x = "Hello!!";  // I will invoke myself'
    console.log(x);
  })();