

function sayMyName() {
    console.log('My name is Mohammad Mudassir');
}

sayMyName();

function addTwoNumbers(num1, num2) {
    console.log(num1 + num2);
}

addTwoNumbers(5, 10);

function getSun(a,b,c)  {
    let sum = a + b + c;
    return sum;
}

let ans = getSun(5, 10, 15);
console.log(ans);

function getFullName(firstName, lastName) {
    let fullName = firstName +  lastName + " ";
    return fullName;

    // unreachable code
    console.log("Hello World");
    // These lines of code seem faded in editors because they are unreachable and will never be executed.
}

let name = getFullName(7, 7);
console.log(name);
console.log(typeof name); // string

// Different way by using function expression
let squareNumbers = function(num) {  // instead of let, we can also use const and it is best practice to use const
    return num ** 2;
}

// declarin the function like a variable

let sqr = squareNumbers(5);
console.log(sqr); // 25

// Arrow Function
// ES6 (2015)
// Shorter syntax
// Doesn't have its own 'this' keyword
// Best pratice to use const
// If there is only one parameter, we can skip the parentheses
// Use arrow function always cause it is best practice

let multiplyByTwo = (num) => {
    return num * 2;
}

console.log(multiplyByTwo(5)); // 10