

class Human {
    // Properties
    age = 21;     // explicitly public  (By default all properties are public)
    #wt = 93;     // private property   (By using # we can make a property private)
    ht = 5.9;

    // Constructor
    constructor(newAge, newWt, newHt) {
        this.age = newAge;
        this.#wt = newWt;
        this.ht = newHt;
    }

    // Behaviour / Methods

    // #walking() {   // private method 
    walking() {
        console.log("I am walking", this.#wt);  // private property can be accessed inside the class using this.#wt
    }

    running() {
        console.log("I am running");
    }

    // In order to access private property outside the class we can use getter method and setter method
    get getWeight() {
        return this.#wt;
    }

    set setWeight(wt) {
        this.#wt = wt;
    }

    // By using these getter and setter methods we can access and modify the private property
}

// Because we didn't provide any arguments while creating the object, the default values in the constructor will be assigned to the properties
// If we provide arguments while creating the object, those values will be assigned to the properties instead of the default values
// all properties will be assigned the value 'undefined' if we don't provide any default values in the constructor and also don't provide any arguments while creating the object
let obj = new Human();
console.log(obj.age);
// console.log(obj.wt);   // undefined, private property cannot be accessed outside the class
// console.log(obj.#wt); // SyntaxError
console.log(obj.ht);

obj.walking();
obj.running();

// Accessing private property using getter method
console.log(obj.getWeight);
// Modifying private property using setter method
// obj.setWeight(95); // Wrong way to call setter method
obj.setWeight = 95; // Correct way to call setter method
console.log(obj.getWeight);

let obj2 = new Human(25, 80, 6.0);
console.log(obj2.age);
console.log(obj2.ht);
console.log(obj2.getWeight);


// Default Parameters in Functions

function sayMyName(fName = "Uday", lName = "Shetty") {
    console.log("My name is", fName, lName);
}

sayMyName("John", "Wick");
sayMyName("Tony");
sayMyName();

// Not like CPP that we can only give parameters with default values at the end
// In JS we can give parameters with default values at any position
// But while calling the function we have to pass 'undefined' for the parameters which we want to take default values
function greet(name = "Guest", age, city = "Unknown") {
    console.log(name, age, city);
}

greet(undefined, 21);  // "Guest 21 Unknown"
greet("Alice", 25);    // "Alice 25 Unknown"
greet("Bob", undefined, "Paris"); // "Bob undefined Paris"

// If we want to skip a parameter in between and want to take the default value for that parameter, we have to pass 'undefined' for that parameter
greet(undefined, 30, "New York"); // "Guest 30 New York"

// If we want to skip all parameters and want to take the default values for all parameters, we have to call the function without any arguments
greet(); // "Guest undefined Unknown"

// Default parameters depending on other parameters

function myName(fName = "Tony", lName = fName.toUpperCase()) {
    console.log("My name is", fName, lName);
}

myName(); // "My name is Tony TONY"
myName("Steve"); // "My name is Steve STEVE"
myName("Bruce", "Wayne"); // "My name is Bruce Wayne"

// If we want to print strings without space in js then

console.log("Hello" + "World");  // HelloWorld
console.log(`Hello${"World"}`);  // HelloWorld
console.log("Hello", "World");   // Hello World

/*
- console.log can take multiple arguments.

- It prints them separated by spaces, not by concatenation.

- That’s why "Hello", "World" becomes "Hello World" with a space.
*/

// Passing objects as parameters

function solve(value = {age:15,wt:90,ht:190}) {
    console.log("Hello Jii", value);
}

solve();  // Hello Jii { age: 15, wt: 90, ht: 190 }

function solve1(value = ["Rahul","Kunal","Razik"]) {
    console.log("Hello 2", value);
}

solve1({wt: 234}); // Hello 2 { wt: 234 }
solve1(); //Hello 2 [ 'Rahul', 'Kunal', 'Razik' ]

solve(null);  // Hello Jii null
solve(undefined);  // Hello Jii { age: 15, wt: 90, ht: 190 }  Default values are used in case of undefined

// Keeping Functions as Default Parameters

function getAge() {
    return 190;
}

function utility(name = "Rahul",age = getAge()) {   // using a function as a default parameter
    console.log(name, " ", age);
}

utility(undefined,undefined);  // Rahul   190
utility("Vikas")  // Vikas   190
utility(undefined,34);  // Rahul   34
