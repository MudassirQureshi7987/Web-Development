
let a = 5;
let b = 2;

// Binary Operators
console.log("a + b =", a + b); // Addition
console.log("a - b =", a - b); // Subtraction
console.log("a * b =", a * b); // Multiplication
console.log("a / b =", a / b); // Division
console.log("a % b =", a % b); // Modulus
console.log("a ** b (a to the power b) =", a ** b); // Exponentiation

// Unary Operators 
console.log("++a =", ++a); // Pre-increment
console.log("a++ =", a++); // Post-increment
console.log("a after a++ =", a); // Value of a after post-increment

// Assignment Operators
let c = 10;
console.log("c =", c);
c += 5; // c = c + 5
console.log("c after c += 5 =", c);


// Comparison Operators
console.log("a == b:", a == b); // Equality  (Even if types are different, values are compared)
console.log("a != b:", a != b); // Inequality
console.log("a === b:", a === b); // Strict Equality (Both value and type must be same)
console.log("a !== b:", a !== b); // Strict Inequality
console.log("a > b:", a > b);   // Greater than 
console.log("a < b:", a < b);   // Less than
console.log("a >= b:", a >= b); // Greater than or equal to
console.log("a <= b:", a <= b); // Less than or equal to    

// difference between loose equality (==) and strict equality (===)
let x = 5;
let y = "5";

console.log("x == y:", x == y); // true, because values are equal after type coercion
console.log("x === y:", x === y); // false, because types are different

// Ternary Operator
let age = 18;
let canVote = (age >= 18) ? "Yes, can vote" : "No, cannot vote";
console.log("Can vote:", canVote); // Prints "Yes, can vote"

// Logical Operator

// AND operator
console.log(true && false && true); // false
console.log(true && true && true);  // true

// OR operator
console.log(true || false || false); // true
console.log(false || false || false); // false

// NOT operator
console.log(!true); // false
console.log(!false); // true
console.log(!(5 > 3)); // false

// Falsey and Truthy values
// Falsey values: false, 0, "", null, undefined, NaN
// Everything else is Truthy    

console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false

console.log(true && "Hello"); // "Hello" (truthy value)
console.log("Will it return?        " + (false || "World")); // "World" (truthy value) 
console.log("Hello" && "World"); // "World" (both are truthy, returns last operand)
console.log("Hello" || "World"); // "Hello" (returns first truthy operand)

// Short-circuit evaluation
console.log(false && "This will not be printed"); // false (second operand not evaluated)
console.log(true || "This will not be printed"); // true (second operand not evaluated)
// It is cause when the first operand is sufficient to determine the result of the expression so the second operand is not evaluated


// Bitwise Operators
console.log("a & b =", a & b); // AND
console.log("a | b =", a | b); // OR
console.log("a ^ b =", a ^ b); // XOR
console.log("~a =", ~a); // NOT

console.log(~0); // -1
console.log(~1); // -2

console.log(5 << 1); // 10 (5 * 2^1
console.log(5 >> 1); // 2 (5 / 2^1)
console.log(5 >>> 1); // 2 (unsigned right shift)

// Conditionals
let num = 10;

// if-else statement
if (num > 0) {
    console.log(num, "is a positive number");
}
else if (num < 0) {
    console.log(num, "is a negative number");
}
else {
    console.log(num, "is zero");
}

// switch statement
let day = 3;

switch (day) {
    case 1: console.log("Monday");
    break;
    case 2: console.log("Tuesday");
    break;  
    case 3: console.log("Wednesday");
    break;
    case 4: console.log("Thursday");
    break;
    case 5: console.log("Friday");
    break;
    case 6: console.log("Saturday");
    break;
    default: console.log("Sunday");
}