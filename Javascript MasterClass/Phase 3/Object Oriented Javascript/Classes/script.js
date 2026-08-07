/*=========================================================
                CLASS & CONSTRUCTOR
=========================================================*/

/*
CLASS

Definition:
A Class is a blueprint or template used
to create objects with similar properties
(data) and methods (functions).

Objects created from a class are called
instances of that class.
*/

/*
CONSTRUCTOR

Definition:
A Constructor is a special method inside
a class that is automatically called
whenever a new object is created.

It is used to initialize the object's
properties.
*/

/*
Syntax:

class Student{

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    introduce(){
        console.log(this.name);
    }

}

const s1 = new Student("Mudassir", 21);
*/

/*
Summary

Class
-----
- Blueprint for creating objects.
- Contains properties and methods.

Constructor
-----------
- Special method inside a class.
- Runs automatically when 'new' is used.
- Initializes object properties.
- Only one constructor is allowed per class.
*/

class CreatePencil {
    constructor(name, company, price, color) {
        this.name = name;
        this.company = company;
        this.price = price;
        this.color = color;
    }

    erase() {
        document.body.querySelectorAll("h1").forEach((elem) => {
            if (elem.style.color === this.color) {
                elem.remove();
            }
        });
    }

    write(text) {
        let h1 = document.createElement("h1");
        h1.textContent = text;
        h1.style.color = this.color;
        document.body.appendChild(h1);
    }
}

let p1 = new CreatePencil("nataraj", "nataraj", 10, "black");
let p2 = new CreatePencil("apsara", "apsara", 15, "blue");


// Extends and Super(Inheritance)

class User {
    constructor(name, address, username, email) {
        this.name = name;
        this.address = address;
        this.username = username;
        this.email = email;
    }

    checkRole() {
        console.log(`You are a ${this.role}`);
    }

    write(text) {
        let h1 = document.createElement("h1");
        h1.textContent = `${this.name} : ${text}`;
        document.body.appendChild(h1);
    }
}

class Admin extends User {
    constructor(name, address, username, email) {
        super(name, address, username, email);
        this.role = "admin";
    }

    remove() {
        document.querySelectorAll("h1").forEach(function (elem) {
            elem.remove();
        });
    }
}

// Create Objects
let admin = new Admin(
    "Mudassir",
    "Nagpur",
    "mudassir01",
    "mudassir@gmail.com"
);
let u1 = new User("Harsh","Bhopal","harsh1","harsh@gmail.com");
let u2 = new User("Harshita","Indore","harshita1","harshita@gmail.com");

/*=========================================================
            PROTOTYPICAL INHERITANCE (Object.create)
=========================================================*/

/*
Definition:
Prototypical Inheritance is a mechanism
where one object inherits properties and
methods directly from another object
through the prototype chain.
*/

/*
Syntax:

let child = Object.create(parent);
*/

/*
Example:

let parent = {
    name: "Mudassir",

    greet() {
        console.log("Hello");
    }
};

let child = Object.create(parent);

console.log(child.name); // Mudassir
child.greet();           // Hello
*/

/*
How It Works

1. JavaScript first searches for the
   property in the object itself.

2. If not found,
   it searches the object's prototype.

3. The search continues up the
   prototype chain until null.
*/

/*
Example:

let a = {
    x: 10
};

let b = Object.create(a);

console.log(b.x);

Search:

b
↓

Not Found

↓

a

↓

Found (10)
*/

/*
Important

Object.create() DOES NOT copy properties.

It only creates a prototype link.

Memory:

b
│
▼
a
│
▼
Object.prototype
│
▼
null
*/

/*
Property Shadowing

If both parent and child have the same
property, JavaScript uses the child's
property.

Example:

let a = {
    name: "Mudassir"
};

let b = Object.create(a);

b.name = "John";

console.log(b.name); // John
*/

/*
Benefits

- Inheritance
- Code Reusability
- Memory Efficient
- Dynamic Property Lookup
*/

/*
Summary

Object.create(parent)
---------------------
Creates a new object whose prototype
is 'parent'.

JavaScript inherits through
the Prototype Chain, not by copying
properties.
*/