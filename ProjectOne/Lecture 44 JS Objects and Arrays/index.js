// Creating an object
const person = {
    firstName : "Mohammad",
    lastName : "Mudassir",
    "full name" : "Mohammad Mudassir", // we can also use space in key but it is not a good practice
    // in cases where there is space in key, we have to use quotes
    age : 21,
    weight : 70,
    height : 5.7,
    isMarried : false,

    greet: function() {
        console.log("Hello, Good Morning");
    }
}

console.log(person);
console.log(typeof person); // object

person.greet();

let person2 = person; // copying the reference of person object to person2

// Creation of Arrays
// In js, arrays are also objects and we can store multiple values in a single variable 
// Different data types can be stored in an array
let arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(typeof arr); // object

let brr = ["Mudassir", 21, 5.7, true];
console.log(brr);
console.log(typeof brr); // object

// Using Array constructor
let arr2 = new Array(1, 2, 3, 4, 5);
console.log(arr2);
console.log(typeof arr2); // object

// Accessing values in an array
console.log(arr[0]); // 1
console.log(brr[0]); // Mudassir
console.log(brr[3]); // true

// Modifying values in an array
arr[0] = 10;
console.log(arr); // [10, 2, 3, 4, 5]

brr[0] = 2;
console.log(brr); // [2, 21, 5.7, true]

// Length of an array
console.log(arr.length);

// Built-in methods in arrays
arr.push(6); // adds 6 at the end of the array
console.log(arr); // [10, 2, 3, 4, 5, 6]

arr.pop(); // removes the last element from the array
console.log(arr); // [10, 2, 3, 4, 5]

arr.shift(); // removes the first element from the array (0th index)
console.log(arr); // [2, 3, 4, 5]

arr.unshift(1); // adds 1 at the beginning of the array (0th index)
console.log(arr); // [1, 2, 3, 4, 5]

arr.push(6);
console.log(arr); // [1, 2, 3, 4, 5, 6]

console.log(arr.slice(1, 4)); // [2, 3, 4] (slices the array from index 1 to index 4 but not including index 4)
console.log(arr); // original array remains unchanged [1, 2, 3, 4, 5, 6]

console.log(arr.splice(1, 3)); // [2, 3, 4] (removes 3 elements from index 1)
console.log(arr); // modified array [1, 5, 6]

let arr3 = [1,2,3,4,5,6,7,8,9,10];
console.log(arr3);

// Splice also returns the removed elements

// splice can be used add , remove or replace elements

// array.splice(startIndex, numberOfElementsToBeRemoved, elementsToBeAdded); 
// elementsToBeAdded is optional and any number of elements can be added

arr3.splice(1,3,"Kunal"); // removes 3 elements from index 1 and adds "Kunal" at index 1
console.log(arr3); // [1, "Kunal", 5, 6, 7, 8, 9, 10]

arr3.splice(2,0,"Hello"); // removes 0 elements from index 2 and adds "Hello" at index 2
console.log(arr3); // [1, "Kunal", "Hello", 5, 6, 7, 8, 9, 10]


let arry = [1,2,3,4,5];

// Map function
// It creates a new array by performing a function on each array element
// It does not change the original array
// It traverses the entire array
let ansArray = arry.map((number) => {
    return number * number;
});

console.log(ansArray); // [1, 4, 9, 16, 25]
console.log(arry); // original array remains unchanged [1, 2, 3, 4, 5]

let ansArray2 = arry.map( (number,index) => {
    return 'Index is ' + index + ' and number is ' + number;
})


console.log(ansArray2);

let nums = [10, 20, 30];

let doubled = nums.map((num, idx, arr) => num + arr[0]);

console.log(doubled); // [20, 30, 40]
// Here, arr[0] is 10, so each element in the array is added to 10

// Filter function
// It creates a new array with all elements that pass the test implemented by the provided function
// It does not change the original array
// It traverses the entire array

let array = [1,2,3,4,5,6,7,8,9,10];

let evenNumbers = array.filter( (number) => {

    return number % 2 === 0; // returns true for even numbers and false for odd numbers
    // we can also write it like this
    if(number % 2 === 0) {
        return true;
    }else {
        return false; 
    }
});

console.log(evenNumbers); // [2, 4, 6, 8, 10]

let example = [1,true, "Mudassir", 2, false, "Hello",null, undefined];

let ans = example.filter( (value) => {
    return typeof value === 'string';

    if(typeof value === "string") {
        return true;
    }
});

console.log(ans); // ["Mudassir", "Hello"]