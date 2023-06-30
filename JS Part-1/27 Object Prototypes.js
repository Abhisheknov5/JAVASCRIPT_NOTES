// JavaScript Object Prototypes
console.log('JavaScript Object Prototypes');

// Constructor function for Person objects
function  Person26(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
Person26.prototype.nationality = "English";

const boy7 = new Person26("Alok","Kumar",50,"black");
console.log("Boy7 nationality is",boy7.nationality);

// The JavaScript prototype property also allows you to add new methods to objects constructors.

console.log('Add new methods to objects constructors');

function Person26(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
Person26.prototype.name = function() {
    return this.firstName + " " + this.lastName
};
const boy8 = new Person26("Abhishek","Kumar",50,"black");
console.log('Boy8 name is ',boy8.name());
