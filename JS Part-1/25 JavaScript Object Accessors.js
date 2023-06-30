// JavaScript Object Accessors

console.log('JavaScript Object Accessors');

// 1 Javascript Getter(The get Keyword)
console.log('1 Javascript Getter(The get Keyword)');

const Person20 = {
    firstName: "Abhishek",
    lastName: "Kumar",
    language: "English",
    get lang() {
        return this.language;
    }
};
const L = Person20.lang;
console.log(L);
console.log(Person20.lang);

// 2 JavaScript Setter (The set Keyword)
console.log('2 JavaScript Setter (The set Keyword)');

const Person21 = {
    firstName: "Abhishek",
    lastName: "Kumar",
    language: "",
    set lang(lang) {
        this.language = lang;
    }
};
// Set an object property using a setter
Person21.lang = "English";

// Display data from the object
console.log(Person21);

// 3 JavaScript Function or Getter?
console.log('3 JavaScript Function or Getter?');

// Exampe-1
console.log('Example 1 access fullName as a function: person.fullName().');
const Person22 = {
    firstName: "Abhishek",
    lastName: "Kumar",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};
console.log(Person22.fullName());

// Example 2
console.log('Example 2 access fullName as a property: person.fullName.');
const Person23 = {
    firstName: "Abhishek",
    lastName: "Kumar",
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
};
console.log(Person23.fullName);

// 4 Data Quality
console.log('Data Quality');

// Using the lang property, in this example, returns the value of the language property in upper case:

console.log('4 Using the lang property, in this example, returns the value of the language property in upper case:Using the lang property, in this example, returns the value of the language property in upper case:');

const Person24 = {
    firstName: "Abhishek",
    lastName: "Kumar",
    language: "English",
    get lang() {
        return this.language.toUpperCase();
    }
};
console.log(Person24.lang);

// 5 Using the lang property, in this example, returns the value of the language property in upper case:
console.log('5 Using the lang property, in this example, returns the value of the language property in upper case:');
const Person25 = {
    firstName: "Abhishek",
    lastName: "Kumar",
    language: "",
    set lang(lang) {
        this.language = lang.toUpperCase();
    }
};
Person25.lang = "English";
console.log(Person25);


// 6 Object.defineProperty()
console.log('6 Object.defineProperty');

// Define Object
const obj = { counter: 0 };

// Define Setters and getters
Object.defineProperty(obj, "reset", {
    get : function () {this.counter = 0;}
  });
  Object.defineProperty(obj, "increment", {
    get : function () {this.counter++;}
  });
  Object.defineProperty(obj, "decrement", {
    get : function () {this.counter--;}
  });
  Object.defineProperty(obj, "add", {
    set : function (value) {this.counter += value;}
  });
  Object.defineProperty(obj, "subtract", {
    set : function (value) {this.counter -= value;}
  });
  
  // Play with the counter:
console.log(obj.reset);
console.log(obj.add = 5);
console.log(obj.subtract = 1);
console.log(obj.increment);
console.log(obj.decrement);




