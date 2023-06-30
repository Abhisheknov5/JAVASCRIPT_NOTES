// 5 Function inside Function
/*
console.log("Function inside Function");

const app = ()=>{
    const myFunc =()=>{
        console.log("hello from myFunc");
    }
    const addTwo = (num1,num2)=>{
        return num1+num2;
    }
    const mul = (num1,num2)=> num1 *num2;
    console.log("Inside App");
    myFunc();
    console.log(addTwo(20,10));
    console.log(mul(20,10));
}
app();
*/

// 6. Lexical Scope



// 7 block scope vs Function scope

// let and const are block scope.
// var is function scope.
console.log("7 block scope vs Function scope");
/*
{
    let firstName = "Abhishek";
    console.log(firstName);
}
{
    let firstName = "Rakesh";
    console.log(firstName);
}
const firstName = "Akash";
console.log(firstName);
*/

{
    var firstName = "Abhishek";
   
}
{
    //var firstName = "Abhishek";
    console.log(firstName);
}
