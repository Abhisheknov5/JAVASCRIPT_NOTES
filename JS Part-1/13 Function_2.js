//Function
// 1 Function declaration 
/*
console.log("**Function 2**");
console.log("Function declaration");


function singHappyBirthday(){
    console.log("happy birthday to you......");
}

function twoplusfour(){
    console.log(2+4);
}
function twoplusfive(){
    return 2+5;
}
//Argument
function sumtwoNumber(number1,number2){
    return number1 + number2;
}
function sumthreeNumber(number1,number2,number3){
    return number1 + number2 + number3;
}


// Call Invoke run
singHappyBirthday();
twoplusfour();
//console.log(twoplusfive());
const returnedvalue = twoplusfive();
console.log(returnedvalue);

//Argumment
const returnedvaluee = sumtwoNumber(4,5);
console.log(returnedvaluee);

const returnedvalueee = sumthreeNumber(4,5,7);
console.log(returnedvalueee);

console.log(undefined+undefined);


// function   isEven
//input: 1 number
//output: true,false
console.log("Even or odd");

function isEven(number){
    if(number %2 ==0){
        return true;
    }else{
        return false;
    }
}
console.log(isEven(2));

//console.log(12 %2 ===0);

//Function
//Input: String
//Output: firstCharacter

function firstcharacter(anyString){
    return anyString[0];
}
console.log(firstcharacter("abc"));

//function 
// input: array, target(number)
// output: index of target if target present in array
//[1,5,69,27,6]  ,9  op- 2

function findTarget(array, target){
    for(let i = 0; i < array.length; i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
}
const myArray1 = [1,3,8,90]
const ans1 = findTarget(myArray1,8);
console.log(ans);
*/
//Function

// 2 Function Expression 
/*
console.log("**Function Expression**");


// function singHappyBirthday(){
//     console.log("happy birthday to you......");
// }
const singHappyBirthday = function(){
    console.log("Happy Birthday");
}
singHappyBirthday();


//Argument
const Addtwonumber = function (number1,number2){
    console.log(number1 + number2);
}
Addtwonumber(12,12);

const sumthreeNumber = function(number1,number2,number3){
    console.log(number1+number3+number3);
}
sumthreeNumber(12,12,12);


// function   isEven
//input: 1 number
//output: true,false
console.log("Even or odd");

const isEven = function(number){
   return number % 2 === 0;
}
console.log(isEven(2));

//console.log(12 %2 ===0);

//Function
//Input: String
//Output: firstCharacter

const firstcharacter = function(anyString){
    return anyString[0];
}
console.log(firstcharacter("abc"));

//function 
// input: array, target(number)
// output: index of target if target present in array
//[1,5,69,27,6]  ,9  op- 2

const findTarget = function(array, target){
    for(let i = 0; i < array.length; i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
}
const myArray = [1,3,8,90]
const ans = findTarget(myArray,8);
console.log(ans);
*/

/*
// 3 Arrow Functions

console.log("**Arrow Function**");

// const singHappyBirthday = function(){
//     console.log("happy birthday to you ......");
// }

const singHappyBirthday = ()=>{
    console.log("happy birthday day to you...");
}
singHappyBirthday();

const Addtwonumber = (number1,number2)=>{
    return number1 + number2;
}
const ans = Addtwonumber(10,15);
console.log(ans);


// function   isEven
//input: 1 number
//output: true,false
console.log("Even or odd");

// const isEven = function(number){
//    return number % 2 === 0;
// }
// console.log(isEven(2));

const isEven = number => number % 2 ==0;
console.log(isEven(4));
//console.log(12 %2 ===0);

//Function
//Input: String
//Output: firstCharacter

// const firstcharacter = function(anyString){
//     return anyString[0];
// }
// console.log(firstcharacter("abc"));

const firstCharacter = anyString => anyString[0];
console.log(firstCharacter("Abhishek"));


//function 
// input: array, target(number)
// output: index of target if target present in array
//[1,5,69,27,6]  ,9  op- 2

// const findTarget = function(array, target){
//     for(let i = 0; i < array.length; i++){
//         if(array[i]===target){
//             return i;
//         }
//     }
//     return -1;
// }
// const myArray = [1,3,8,90]
// const ans = findTarget(myArray,8);
// console.log(ans);

const findTarget = (array,target)=>{
    for(let i=0; i< array.length; i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
}

*/
// 4 Hoisting
console.log("Hoisting");
/*
hello();
function hello(){
    console.log("hello World");
}
hello();
*/
/*
console.log(hello);
var hello = "Hello World";
//const hello = "Hello World";  //Error
console.log(hello);
*/

