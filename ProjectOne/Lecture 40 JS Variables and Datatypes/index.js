// var age = 40;   
// Global variable (if uncommented, 'age' would be accessible everywhere)

// if(true)
// {
//     console.log(age);  
//     // 'var' is function-scoped, not block-scoped.
//     // If 'age' were declared above with var, it would be accessible here too.
// }

// Function definition
// function solve() {
//     var age = 25;  // 'age' is declared inside the function with 'var'
//                    // This 'age' is local to the function (function-scoped)
//     console.log(age); // Prints 25
// }

// console.log(age); 
// // Here, JS looks for a variable named 'age' in the global scope.
// // Since the top 'var age = 40;' is commented out, 'age' is not defined -> ReferenceError

// solve();  
// Calls the function -> prints 25 

// Redefinition is possble with 'var' and also reinitialization is also possible
// var age = 40;   
// age = 50;  
// console.log(age); // Prints 50

// var age = 40;
// var age = "Hello";
// console.log(age); // Prints "Hello"

// {
//     let age = 40;
//     // let is block spaced so it can only be used under the blocks that it is defined in
// }

// console.log(age); // ReferenceError: age is not defined
// // 'let' and 'const' are block-scoped, so 'age' is not accessible outside the block

// let a = 10;
// a = "Mayank"; // Reinitialization is possible with 'let'
// // let a = 20; // Error: Identifier 'a' has already been declared
// console.log(a); // Prints "Mayank"

// let b = 20;
// let b = 30; // Error: Identifier 'b' has already been declared
// b = 30; // Reinitialization is possible with 'let'
// console.log(b); // Prints 30

// const pi = 3.14; // 'const' must be initialized at the time of declaration
// pi = 3.1415; // Error: Assignment to constant variable
// const pi = 3.1415; // Error: Identifier 'pi' has already been declared
// console.log(pi); // Prints 3.14

// const c; // Error: Missing initializer in const declaration

// 'const' is block-scoped and cannot be re-declared or re-initialized

// Datatypes in JS
// 1. Primitive Datatypes
//    a. Number
//    b. String
//    c. Boolean
//    d. Undefined
//    e. Null
//    f. Symbol (ES6)
//    g. BigInt (ES11)

let num = 42; // Number
num = 3.14; // Floating point
num = "Infinity"; // Special numeric value
num = NaN; // Not a Number
console.log(num); // Prints NaN
num = true; // Boolean
console.log(num); // Prints true

let marks;
console.log(marks); // Prints undefined (default value for uninitialized variables)

let name = null; // Null (explicitly set to no value)
console.log(name); // Prints null

let numb = 987474758584748374748373883783783748384784938282728376483821817327382847474844747447388373737282628272;
console.log(numb); // Prints the big integer value but may lose precision and just print in scientific notation

// To handle very large integers accurately, use BigInt
numb = BigInt("987474758584748374748373883783783748384784938282728376483821817327382847474844747447388373737282628272");
console.log(numb); // Prints the big integer value as BigInt type
// Prints the whole number without losing precision and as it is
// BigInt is used for integers larger than 2^53 - 1 to -(2^53 - 1)

let name1 = "Mayank"; // String
console.log(typeof name1); // Prints "string"
console.log(typeof(num)); // Prints "bigint"
// both 'typeof' are used to check the datatype of a variable
