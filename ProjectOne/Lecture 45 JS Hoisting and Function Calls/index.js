
// Function Hoisting
// Function can be called before its declaration because of hoisting cause at the time of compilation function declaration is stored in memory
// Function comes at the top of the current scope due to hoisting
// Function hoisting works for plain function and not for function expression or arrow function cause it gives reference error
// Because of all this, we should always declare functions at the top of their scope

// Example
// sayHello();

// let sayHello = function()  {
//     console.log("Hello World");
// }

sayMyName("John Cena");

function sayMyName(finalName) {
    console.log(finalName);
}

// Variable Hoisting
// Variable hoisting is only for var keyword and let and const doesn't support hoisting so they will throw reference error if we try to access them before their declaration
// Variable can be called before its declaration but it will return undefined because only declaration is stored in memory not the initialization
// var comes at the top of the scope due to hoisting
// Because of all this, we should always declare variables at the top of their scope
// We should avoid using var keyword and use let and const instead

// Only declaration is stored in memory not the initialization or value we can say so it will return undefined
console.log(name);

var name = "Rohit Sharma";

// Class Hoisting is not supported so it will throw reference error if we try to access it before its declaration

// const obj = new Human();
// class Human {

// }
// This will throw reference error because class hoisting is not supported

// Function
// Function is also called first class citizen because we can pass function as an argument to another function
// We can also return function from another function
// We can also store function in a variable
// We can also store function in an array
// We can also store function in an object

// Example of function as first class citizen

// Function as an argument

function greetMe(greet, name) {
    console.log("Hello ", name);
    greet();
}

function greet() {
    console.log("Greeting from greet function");
}

greetMe(greet, "Rohit Sharma");

// Function as return value

function outerFunction(number) {
    return function(number) {
        return number * number;
    };
}

let ans = outerFunction(5); // ans is now a function

let finalAns = ans(5); // finalAns is now 25 , ans is a function which takes number as argument and returns square of that number

console.log(finalAns);

// Array of Functions (Functions in Data Structures)

let arr = [
    function(a,b) {
        return a + b;
    },
    function(a,b) {
        return a - b;
    },
    function(a,b) {
        return a * b;
    },
    function(a,b) {
        return a / b;
    }
];

let sum = arr[0];
console.log(sum(5,3)); // 8

let sub = arr[1](5,3);
console.log(sub); // 2

let mul = arr[2](5,3);
console.log(mul); // 15

let div = arr[3];
let divi = div(5,3);
console.log(divi); // 1.6666

// Functions in Object

let obj1 = {
    age : 24,
    name : "Rohit Sharma",
    getDetails : function() {
        return `My name is ${this.name} and my age is ${this.age}`;
    }
};

console.log(obj1.age); // 24
console.log(obj1.name); // Rohit Sharma
console.log(obj1.getDetails()); // My name is Rohit Sharma and my age is 24


console.log(greet); // This will return undefined because function expression is not hoisted
// greet(); // This will throw reference error because function expression is not hoisted
greet(); // This will work fine because function declaration is hoisted

// Did it var cause hoisting is only for var keyword
var greet = function() {
    console.log("Hello World");
}





