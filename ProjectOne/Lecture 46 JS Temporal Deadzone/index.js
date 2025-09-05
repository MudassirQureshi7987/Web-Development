
// Global Scope
var a = 1;
let b = 2;
const c = 3;

console.log("Global Scope: ", a, b, c);

{
    console.log("Inside Block: ", a, b, c);
}

function test() {
    console.log("Inside Function: ", a, b, c);
}

test();

// Function Scope
// Variables declared inside a function are not accessible outside the function
// Be it var, let or const

function func() {
    var name = "Rohit Sharma"; // Function Scoped
    console.log(name);
}

func();
// console.log(name); // Error: name is not defined

// Block scope

// Variables declared with let and const are block scoped
// Variables declared with var are not block scoped

console.log(height); // undefined due to hoisting
{
    var height = 10;
}

console.log(height); // 10

{
    const width = 20;
    let depth = 30;
    console.log(width, depth); // 20 30
}

// console.log(width); // Error: width is not defined
// console.log(depth); // Error: depth is not defined
// let and const do not allow access before declaration
// let and const are blocked scoped

// Temporal Dead Zone (TDZ)
// The time between the entering of the scope and the actual declaration is known as Temporal Dead Zone (TDZ)
// Accessing the variable in TDZ will throw a ReferenceError

// let and const does not support hoisting
// var supports hoisting

// console.log(age); // ReferenceError: Cannot access 'age' before initialization
// console.log(marks); // ReferenceError: Cannot access 'marks' before initialization
let age = 25;
const marks = 100;

