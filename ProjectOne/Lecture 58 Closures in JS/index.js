// Closures in JavaScript

/*
⚡ What is a Closure?
A closure is a feature in JavaScript where an inner function has access to the outer (enclosing) function's variables —
even after the outer function has finished executing.

// Closure is the bundling of functions along with their lexical scope(required data).
// lexical scope == required data == surrounding state at the time of creation of function

🧠 Basic Idea 

A closure gives you access to an outer function's scope from an inner function.

In JavaScript, closures are created every time a function is created, at function creation time.
*/

function outerFunction() {
    let name = "Mudassir";  // let -> block scoped variable
    function innerFunction() {
        let name = "Inner Mudassir";
        console.log("Hello, " + name);
    }
    innerFunction();
}

outerFunction(); // Hello, Mudassir


function outerFunction() {
    let name = "Mudassir";  // let -> block scoped variable
    function innerFunction() {
        // let name = "Inner Mudassir";
        console.log("Hello, " + name);
    }
    return innerFunction;
}

let inner = outerFunction(); // Hello, Mudassir

inner(); // Hello, Inner Mudassir

// We here think that the outerFunction has finished executing, so the variable 'name' should be out of scope.
// But due to closure, the innerFunction still has access to the variable 'name' from outerFunction's scope.

// This does not create a copy of the variable, but maintains a reference to the original variable in the outer function's scope.