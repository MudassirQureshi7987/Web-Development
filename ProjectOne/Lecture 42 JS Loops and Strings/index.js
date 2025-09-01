
for(let i = 1; i <= 5; i++) {
    console.log("Iteration number:", i);
}

for(let i = 5; i >= 1; i--) {
    if(i == 3)  break;
    else if(i == 4) continue;
}

for(let i = 1; i <= 5; ){
    console.log("Iteration number:", i);
    i++;
}

let i = 0;
while(i < 5) {
    console.log("Iteration number:", i);
    i++;
}

let j = 0;
do {
    console.log("Iteration number:", j);
    j++;
} while(j < 5);

// String

let str = "Hello";
let str2 = 'World';

console.log(typeof str2); // string

let str3 = `Maddy
Her is the
isisins jsjs`; // Template Literal
console.log(str3);  // by using backticks(` `) we can create multi-line strings

let str4 = new String("Hello World"); // String Object
console.log(typeof str4); // object

console.log(str4); // [String: 'Hello World']

let op1 = "Hello ";
let op2 = "World";

console.log(op1.length); // 6

let res = op1 + op2;
console.log(res); // Hello World

let res2 = `${op1} ${op2}`; // Template Literal ( won't work with single or double quotes)
console.log(res2); // Hello World

console.log(op1.toUpperCase()); // HELLO 
console.log(op2.toLowerCase()); // world

console.log(op1[1]); // e
console.log(op1.charAt(1)); // e

console.log(op1.indexOf('l')); // 2 (first occurrence)
console.log(op1.lastIndexOf('l')); // 3 (last occurrence)

console.log(op1.substring(1)); // ello
console.log(op1.substring(1, 4)); // ell (4-1=3 characters) exclusive of end index

let sentence = "Hello Jee kaise ho saare";
let words = sentence.split(" ");

console.log(words); // [ 'Hello', 'Jee', 'kaise', 'ho', 'saare' ]

let str5 = "   Hello World   ";
console.log(str5.trim()); // "Hello World" (removes whitespace from both ends)

// How to use double quotes inside a string
// let quoteStr = "He said "Hello" to me."; // Incorrect
let quoteStr = "He said \"Hello\" to me."; // Correct   (backslah tells the compiler that the next character is to be treated as a literal character and not as a special character)

console.log(words.join("-")); // Hello-Jee-kaise-ho-saare

