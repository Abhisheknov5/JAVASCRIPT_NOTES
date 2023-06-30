// String
console.log("String");

// String value assigned to a variable using equal to(=) operator.
console.log("String vale assigned to a Variable");

const str1 = "Hello World!";
const str2 = "Hello World!";
console.log(str1);
console.log(str2);

// A string can also be treated like Zero index based character Array.
console.log("String as Array");

const str = "Hello World";
console.log(str[0]);
console.log(str[1]);
console.log(str[2]);
console.log(str[3]);
console.log(str[4]);
console.log(str.length);

// String is character index it can be accesed using for loop and for-of loop.
console.log("Iterate String");

var str3 = "Hello World";
for (var i=0;i<str.length;i++){
    console.log(str3[i]);
}

// Concatenation using plus operator +.
console.log("Concatenation using plus operator +");

const str4 = ' Hello ' + ' world ' + ' from ' + ' India ';
console.log(str4);

// Include quotation marks inside string
console.log("Include quotation marks inside string");
const str5 = "This is 'simple' String";
const str6 = 'This is "simple" String';
console.log(str5);
console.log(str6);

// String Object
console.log("String Object");

const str7 = new String("Hello World!");
console.log(str7);
console.log(typeof(str7));

// String Object Comparision
console.log("String Object Comparision");

const str8 = new String("Hello World!");
const str9 = new String("Hello World!");
const str10 = "Hello World!";
console.log(str8 == str9);
console.log(str8 == str10);
console.log(typeof(str8));
console.log(typeof(str10));

// Template String
console.log("Template String");

const str11 = "Abhishek";
const greet = `Hi ${str11}`;
console.log(greet);