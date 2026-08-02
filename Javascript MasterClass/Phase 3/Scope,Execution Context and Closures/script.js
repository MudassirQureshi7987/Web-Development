function abcd() {
    var a = 30;
}

// console.log(a); // will show error in console

// What is Scope?

// Scope determines where a variable can be accessed.

/*=========================================================
                    JAVASCRIPT SCOPES
=========================================================*/

/*
Scope determines where a variable can be accessed.

Types of Scope:
1. Global Scope
2. Function Scope
3. Block Scope
*/

/*=========================================================
1. GLOBAL SCOPE
=========================================================*/

/*
- Variables declared outside all functions and blocks.
- Accessible from anywhere in the program.
- Lifetime: Until the page/program ends.

Example:

let name = "Mudassir";

function greet() {
    console.log(name); // Accessible
}

console.log(name); // Accessible
*/

/*=========================================================
2. FUNCTION SCOPE
=========================================================*/

/*
- Variables declared inside a function.
- Accessible only inside that function.
- Cannot be accessed outside.

Example:

function greet() {
    let message = "Hello";
    console.log(message);
}

greet();

console.log(message); // ReferenceError
*/

/*
Child functions CAN access parent variables.

Example:

function outer() {

    let x = 10;

    function inner() {
        console.log(x);
    }

    inner();
}
*/

/*
Parent functions CANNOT access child variables.

Example:

function outer() {

    let x = 10;

}

console.log(x); // ReferenceError
*/

/*=========================================================
3. BLOCK SCOPE
=========================================================*/

/*
A block is anything inside {}

Examples:
if {}
for {}
while {}
switch {}
*/

/*
Variables declared using let and const
are Block Scoped.

Example:

if(true){

    let age = 20;
    const city = "Delhi";

}

console.log(age);  // ReferenceError
console.log(city); // ReferenceError
*/

/*=========================================================
VAR vs LET vs CONST
=========================================================*/

/*
var
- Function Scoped
- Ignores Blocks
- Can be Redeclared
- Can be Reassigned

Example:

if(true){
    var x = 10;
}

console.log(x); // 10
*/

/*
let
- Block Scoped
- Cannot be Redeclared
- Can be Reassigned

Example:

if(true){
    let x = 10;
}

console.log(x); // ReferenceError
*/

/*
const
- Block Scoped
- Cannot be Redeclared
- Cannot be Reassigned

Example:

if(true){
    const PI = 3.14;
}

console.log(PI); // ReferenceError
*/

/*=========================================================
SCOPE CHAIN (Lexical Scope)
=========================================================*/

/*
A function can access:

1. Its own variables.
2. Parent function variables.
3. Global variables.

But it CANNOT access variables
inside another function.

Example:

let a = 10;

function one(){

    let b = 20;

    function two(){

        let c = 30;

        console.log(a); // Global
        console.log(b); // Parent
        console.log(c); // Own
    }

    two();
}
*/

/*=========================================================
IMPORTANT INTERVIEW QUESTION
=========================================================*/

/*
if(true){

    var a = 10;
    let b = 20;
    const c = 30;

}

console.log(a); // 10
console.log(b); // ReferenceError
console.log(c); // ReferenceError
*/

/*=========================================================
SUMMARY
=========================================================*/

/*
Global Scope
-------------
- Accessible Everywhere

Function Scope
---------------
- Accessible only inside the function

Block Scope
------------
- Accessible only inside {}

var
----
- Function Scoped

let
----
- Block Scoped

const
------
- Block Scoped

Remember:
Parent -> Child  ✔ Access Allowed
Child -> Parent  ✘ Not Allowed
Global -> Everyone ✔
*/


// Execution Context

// It is an abstract hypothethical phase in which whenever we create a function.as soon as
// JS sees the function, it kinda makes a box,the first phase is memory phase in which it allocates
// the memory to the variables and the second phase is the execution phase in which the execution occurs.

// Lexical vs Dynamic Scope

// JS is lexically scoped.
// Lexically scoped mean that wherever the variable is scoped physically,in that scope only
// it will be used
// Understand with an example

// let a = 10;

// function abcd() {
//     console.log(a);
// }

// function defg() {
//     let a = 12;
//     abcd() // This will print 10 in JS
// }

// Since JS is lexically scoped so when defg() calls abcd,the control goes to abcd and it checks if
// abcd() has an a if not then it checks globally and at globally a is set to 10 so therefore 
// 10 is printed,if the language had been dynamic then the a of defg() would have been used.

// Dynamically  scoping depends on from where the function is called and the value is given
// according to that

// Closures: 

// Closures are functions which are inside a parent function and this function is getting returned
// by the parent function and this returning function uses some variable from the parent function

// function abcd() {
//     let a = 23;
//     return function() {
//         console.log(a);
//     }
// }

// let fnc = abcd();
// fnc();  // 23 will be printed

// Even though the execution context of abcd should have been destroyed once it returns the function,
// then also the value of a is accesible by the returning function cause when JS reads the 
// program and sees a closure,it creates a backlink(efficient copy) of the variables from the 
// parent function,it is stored in [[environment]]

// function counter() {
//     let c = 0;
//     return function() {
//         c++;
//         console.log(c);
//     }
// }

// let fnc = counter();  // This will make its own copy of c
// fnc();  // 1
// fnc();  // 2
// fnc();  // 3

// let fnc2 = counter();  // and this will make its own
// fnc2();  // 1
// fnc2();  // 2
// fnc2();  // 3

// Encapsulation

function clickLimiter() {
    let click = 0;
    return function() {
        if(click < 5) {
            click++;
            console.log(`Clicked : ${click} times`);
        } else {
            console.log("Limit Exceeded");
        }
    }
}

let fnc = clickLimiter();
fnc();
fnc();
fnc();
fnc();
fnc();
fnc();

