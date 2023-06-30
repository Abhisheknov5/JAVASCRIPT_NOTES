// let keyword 
// declare variable with the let keyword

let firstName = "Abhishek";
firstName = "Abhishek Kumar";; 
console.log(firstName);


//const 
const pi =3.14;
//pi = 2.44;
console.log(pi);

// var Keyword
console.log("var Keyword");

function greet(){
    // variable a can be used here 
    var a = 'Hii';
    console.log(a);
}
// Variable a is local to the function so we can not used here.
//console.log(a);
greet();

// let keyword
console.log("let Keyword");
let c = 'hii';
function wish(){
    let a = "hii";
    console.log(a);
}
function greet(){
    let b = "hello";
    console.log(b + " " + c);
    //console.log(a);
}
wish()
greet()

//const keyword
console.log("const Keyword");

const a = "hello";
function greet(){
    b = 'hii'; // you can not reassign value to const variable.
    console.log(b);
}
console.log(a);
greet();