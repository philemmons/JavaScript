let greeting = 'hi there'; //String Literal
//let age = 30; // number literal
let isBoolean = true; // Boolena literal
let firstName = undefined; // 
let lastName = null; // clear the value of a variable
console.log(greeting);

// no keyword
// meaningful & descriptive
// cannot start with number
// no space or hyphen
// case sensitive
// declare multiple vars by comma - not recommended

//let interestRate = 0.3;
const interestRate = 0.3;
//interestRate = 1;
console.log(interestRate);

//dynamic language v static language
//static - statically-typed 

//dynamically-typed
// variable reassignment determines datatype

//typeof

// primatives/values types
// String, number, boolean, undefined, and null

// reference types
//objects - unordered collection of related data
let person = { //object leteral - key : value pairing
  name: 'Mosh',
  age: 30
};
//dot notation - easier to read & understand
person.name = 'john';
console.log(person.name);
//bracket notation - unknown value 
let selection = 'name'
person[selection] = 'jane';
console.log(person.name);

//array literal - a data structure is a list objects
let selectedColors = ['red', 'blue']; //zero index
selectedColors[2] = '3';
console.log(selectedColors);

console.log(selectedColors[0]);

//functions - 
// example of performaing a task
function greet(name){ //parameter
  console.log('Hello '+ name + ", My name is Hal.");
}// NOTE no semicolon

greet("Doss");// doss is the arguement

// calculating a value
function square(number){
  return number*number;
}

console.log( square(2) );