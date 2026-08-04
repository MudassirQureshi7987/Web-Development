/*=========================================================
                    THE 'this' KEYWORD
=========================================================*/

/*
Definition:
'this' is a special keyword that refers to
the object that is currently executing the function.

The value of 'this' depends on HOW a function is called,
not where it is defined.
*/

/*=========================================================
1. GLOBAL SCOPE
=========================================================*/

/*
Browser:
this -> window

Example:

console.log(this); // Window
*/

/*=========================================================
2. REGULAR FUNCTION
=========================================================*/

/*
Non-Strict Mode:
this -> window

Strict Mode:
this -> undefined

Example:

function greet(){
    console.log(this);
}

greet();
*/

/*=========================================================
3. METHOD (Object Function)
=========================================================*/

/*
this -> Object that called the method.

Example:

const user = {
    name: "Mudassir",

    greet(){
        console.log(this.name);
    }
};

user.greet(); // Mudassir
*/

/*=========================================================
4. ARROW FUNCTION
=========================================================*/

/*
Arrow functions DO NOT have their own 'this'.

They inherit 'this' from their surrounding
(lexical) scope.

Example:

const obj = {
    name: "Mudassir",

    greet: () => {
        console.log(this);
    }
};
*/

/*=========================================================
5. EVENT LISTENER
=========================================================*/

/*
Inside an event listener,
this -> Element that triggered the event.

Example:

button.addEventListener("click", function(){
    console.log(this); // button
});
*/

/*
Arrow Function:

button.addEventListener("click", () => {
    console.log(this);
});

this is NOT the button.
It comes from the outer scope.
*/

/*=========================================================
6. CONSTRUCTOR FUNCTION
=========================================================*/

/*
When using 'new',
this -> Newly created object.

Example:

function Person(name){
    this.name = name;
}

const p1 = new Person("Mudassir");
*/

/*=========================================================
7. CLASS
=========================================================*/

/*
Inside a class method,
this -> Current object(instance).

Example:

class Person{

    constructor(name){
        this.name = name;
    }

    greet(){
        console.log(this.name);
    }
}
*/

/*=========================================================
8. call(), apply(), bind()
=========================================================*/

/*
These methods allow us to manually set 'this'.

call()  -> arguments separately
apply() -> arguments as an array
bind()  -> returns a new function

Example:

function greet(){
    console.log(this.name);
}

const user = { name: "Mudassir" };

greet.call(user);
greet.apply(user);

const fn = greet.bind(user);
fn();
*/

/*=========================================================
SUMMARY
=========================================================*/

/*
Global Scope          -> Window (Browser)
Regular Function      -> Window / undefined (Strict Mode)
Method                -> Calling Object
Arrow Function        -> Lexical (Outer) this
Event Listener        -> HTML Element
Constructor (new)     -> New Object
Class Method          -> Current Instance
call/apply/bind       -> Explicitly Set by You
*/

// 🔥 One interview trick to remember

// The most important rule is:

// this depends on how a function is called, NOT where it is defined.

// For example:

// const user1 = {
//     name: "Alice",
//     greet() {
//         console.log(this.name);
//     }
// };

// const user2 = {
//     name: "Bob"
// };

// user2.greet = user1.greet;

// user1.greet(); // Alice
// user2.greet(); // Bob

// Notice the function is the same, but this changes because the caller changed.
//  This is one of the favorite interview questions on this.

/*=========================================================
                call(), apply(), bind()
=========================================================*/

/*
Definition:
call(), apply(), and bind() are methods
used to explicitly set the value of 'this'
for a function.
*/

/*=========================================================
1. call()
=========================================================*/

/*
- Calls the function immediately.
- Arguments are passed separately.

Syntax:

function.call(thisArg, arg1, arg2, ...)
*/

function greet(city, country) {
    console.log(this.name, city, country);
}

const user = {
    name: "Mudassir"
};

greet.call(user, "Nagpur", "India");

// Output:
// Mudassir Nagpur India

/*=========================================================
2. apply()
=========================================================*/

/*
- Calls the function immediately.
- Arguments are passed as an array.

Syntax:

function.apply(thisArg, [arg1, arg2, ...])
*/

greet.apply(user, ["Nagpur", "India"]);

// Output:
// Mudassir Nagpur India

/*=========================================================
3. bind()
=========================================================*/

/*
- Does NOT call the function immediately.
- Returns a new function with 'this' fixed.

Syntax:

const newFunction = function.bind(thisArg);
*/

const newGreet = greet.bind(user);

newGreet("Nagpur", "India");

// Output:
// Mudassir Nagpur India

/*=========================================================
WHY DO WE NEED THEM?
=========================================================*/

const person1 = {
    name: "Mudassir"
};

const person2 = {
    name: "John"
};

function sayHello() {
    console.log("Hello", this.name);
}

sayHello.call(person1);   // Hello Mudassir
sayHello.call(person2);   // Hello John

/*=========================================================
SUMMARY
=========================================================*/

/*
call()
------
- Invokes Immediately
- Arguments Separately

apply()
-------
- Invokes Immediately
- Arguments in an Array

bind()
------
- Does NOT Invoke Immediately
- Returns a New Function

All three are used to set the value of 'this'.
*/