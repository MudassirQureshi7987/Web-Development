
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

