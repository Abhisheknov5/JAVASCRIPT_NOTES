/* Control Statement */
console.log("CONTROL STATEMENT");

// 1 If...Else

// The if statement executes a statement if a specified condition is truthy. 
// If the condition is falsy, another statement can be executed.

let tomorrow = "sunny";
if (tomorrow == 'rain') {
    console.log("Take a raincoat")
} else {
    console.log("no need to take a raincoat")
}

//Even odd
let n = 14;
if (n % 2 == 0) {
    console.log("Even");
}
else {
    console.log("Odd");
}

/* write a program that works out whether if a given year is a leap year or not?
   A normal year has 365 days, leap years have 366, with an extra day in February. */

const year = 2020;
if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            console.log("The year " + year + "is a leap year");
        } else {
            console.log("The year " + year + " is not a leap year");
        }
    } else {
        console.log("The year " + year + " is a leap year");
    }
} else {
    console.log("The year " + year + " is not a leap year");
}


// What is truthy and falsy values in Javascript?
// we have total 5 falsy values in javascript
//0,"",undefined, null, NaN,  is false anyway
if (score = 0) {
    console.log("Yay, We won the the Game");
} else {
    console.log("Yay, we loss the Game");
}



// 2️ Conditional (ternary) operator

// The conditional (ternary) operator is the only JavaScript operator 
// that takes three operands
// variablename =(condition) ? value1:value2

// var ages = 19;
// if(ages>18){
//     console.log("You are eligable to vote");
// }else{
//     console.log("You are not eligable to vote");
// }

var age = 17;
console.log((age >= 18) ? "you can vote" : "you can not vote");


// 3 switch Statement

// Evaluates an expression, matching the expression's value to a 
// case clause, and executes statements associated with that case.

// 1 st without break Statement


console.log("Week ");
let day = 0;

switch(day){
    case 0:
        console.log("Sunday");
        break; 
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thrusday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid Day");
}
//Find the area of circle triangle and rectangle?
/*
var area = "circle";
var PI = 3.142, l =5, b=4, r=3;

if(area = "circle"){
    console.log("the area of the circle is :"+PI*r**2);
}else if(area = "triangle"){
    console.log("the area of the triangle is :"+(l+b)/2);
}else if(area = "rectangle"){
    console.log("the area of the rectangle is :"+(l*b));
}else{
    console.log("please enter valid data");
}
*/

console.log("Switch Statement")
var area = "tjsjnjn";
var PI = 3.142, l = 5, b = 4, r = 3;

switch (area) {
    case 'circle':
        console.log("The area of the circle is :" + PI * r ** 2);
        break;
    case 'triangle':
        console.log("the area of the triangle is :" + (l + b) / 2);
        break;
    case "rectangle":
        console.log("the area of the rectangle is :" + (l * b));
        break;
    default:
        console.log("Please enter valid data");

}

// break
// Terminates the current loop, switch, or label
// statement and transfers
// program control to the statement following the terminated statement.
console.log("break");
for(let i = 1; i<=10; i++){
    if(i === 4){
        break;
    }
    console.log(i);
}

// continue
// Terminates execution of the statements in the current iteration of the 
// current or labeled loop, and continues execution of the loop with the 
// next iteration.

console.log("continue");
 for(let i = 1; i<=10; i++){
     if(i === 4){
         continue;
     }
   console.log(i);
}