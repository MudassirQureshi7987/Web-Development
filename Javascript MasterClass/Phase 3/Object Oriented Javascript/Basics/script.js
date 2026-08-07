/*=========================================================
                    CLASS (OOP)
=========================================================*/

/*
Definition:
A Class is a blueprint or template used to
create objects with similar properties
(data) and methods (functions).

It helps implement Object-Oriented
Programming (OOP) concepts like
Encapsulation, Inheritance,
Polymorphism, and Abstraction.
*/

/*
Syntax:

class ClassName {

    constructor(parameters){
        // Initialize properties
    }

    methodName(){
        // Method
    }

}
*/

/*
Example:

class Student{

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    introduce(){
        console.log(`Hi, I'm ${this.name}`);
    }

}

const s1 = new Student("Mudassir", 21);

s1.introduce();
*/

/*
Summary:
- Class -> Blueprint
- Object -> Instance of a class
- constructor() -> Initializes object properties
- this -> Refers to the current object
- new -> Creates a new object from the class
*/

function createPencil(name, price, color, company) {
    this.name = name;
    this.price = price;
    this.color = color;
    this.company = company;
    this.write = function (text) {
        let h1 = document.createElement("h1");
        h1.textContent = text;
        document.styleSheets.color = red;
        document.body.appendChild(h1);
    };
}

let pencil1 = new createPencil("Pencil 1", 10, "Red", "Company 1");
let pencil2 = new createPencil("Pencil 2", 20, "Blue", "Company 2");


/*=========================================================
                    PROTOTYPE
=========================================================*/

/*
Definition:
A Prototype is an object that allows other
objects to inherit properties and methods.

It is the mechanism behind inheritance
in JavaScript.
*/

/*
Why do we use Prototype?

Without Prototype:

Every object gets its own copy
of the methods.

This wastes memory.

With Prototype:

Methods are shared among all objects,
saving memory and improving performance.
*/

/*
Example Without Prototype

function Student(name){
    this.name = name;

    this.greet = function(){
        console.log("Hello");
    };
}

Every object gets its own greet() method.
*/

/*
Example With Prototype

function Student(name){
    this.name = name;
}

Student.prototype.greet = function(){
    console.log("Hello");
};

const s1 = new Student("Mudassir");
const s2 = new Student("John");

s1.greet();
s2.greet();

Both objects share the same greet() method.
*/

/*
Prototype Chain

If a property is not found on an object,
JavaScript looks for it in its prototype.

If not found there,
it continues searching up the chain
until null is reached.
*/

/*
Summary

Prototype
---------
Shared object containing methods
and properties inherited by all
instances of a constructor/class.

Benefits
--------
- Inheritance
- Memory Efficient
- Code Reusability
- Better Performance
*/

function CreatePencil(name, price, color, company) {
    this.name = name;
    this.price = price;
    this.color = color;
    this.company = company;
}

CreatePencil.prototype.write = function (text) {
    let h1 = document.createElement("h1");
    h1.textContent = text;
    h1.style.color = this.color;
    console.log(h1);
    document.body.append(h1);
};

let pencil1 = new CreatePencil("Nataraj", 10, "black", "nataraj");
let pencil2 = new CreatePencil("Doms", 10, "red", "doms");