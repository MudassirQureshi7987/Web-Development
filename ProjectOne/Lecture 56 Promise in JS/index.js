
// Promise in JavaScript

// A Promise is an object that represents the eventual completion (or failure) of an asynchronous 
// operation and its resulting value.

// It’s a way to handle asynchronous code (like fetching data from an API) without falling into 
// callback hell.

// A Promise has three states:

    // 1. Pending – The initial state; the operation is not yet complete.

    // 2. Fulfilled – The operation completed successfully (resolved).

    // 3. Rejected – The operation failed (error occurred).

// Creating a Promise

// let firstPromise = new Promise((resolve, reject) => {
//     console.log("Promise is in Pending State");
//     resolve(1001);  // without adding something like resolve reject, the promise will remain in 
//                          pending state
// } );

// let firstPromise = new Promise((resolve, reject) => {
//     console.log("Promise is in Pending State");
//     reject(new Error("Error of Wisdom"));
// } );

// function sayMyName() {
//     console.log("My name is Mohammad Mudassir");
// }

// setTimeout(sayMyName, 3000); // after 3 seconds, sayMyName function will be called

// let firstPromise = new Promise((resolve, reject) => {
//     function sayMyName() {
//     console.log("My name is Mohammad Mudassir");
//     }

//     setTimeout(sayMyName, 15000); // after 3 seconds, sayMyName function will be called
//     resolve(1);
// } );

let promise1 = new Promise((resolve, reject) => {
    let success = true; // change this to false to see the rejected case

    if(success) {
        resolve("Promise Resolved Successfully!");
    } else {
        reject("Promise Rejected!");
    }
});

// Consuming a Promise
promise1.then((message) => {
    console.log("Success: " + message);
}).catch((error) => {
    console.log("Error: " + error);
});

promise1.then((message) => {
    console.log("1st message: " + message);
    return "Chained Message"; // returning a new value for the next then
}).then((chainedMessage) => {
    console.log("2nd message: " + chainedMessage);
    return "Another Chained Message";
}).then(() => {
    console.log("3rd message: Another Chained Message");
}).catch((error) => {
    console.error(error);
}).finally(() => {
    console.log("Promise has been settled (either resolved or rejected).");
});

// Finally always runs at the end, regardless of whether the promise was resolved or rejected.

// This is called Promise Chaining, where the output of one then is passed to the next then in the chain.
// Note: Promises are a powerful way to handle asynchronous operations in JavaScript, providing a cleaner and more manageable approach 
// compared to traditional callback functions.

let promise2 = new Promise((resolve,reject) => {
    setTimeout(resolve,1000,"First");
});
let promise3 = new Promise((resolve,reject) => {
    setTimeout(resolve,2000,"Second");
});
let promise4 = new Promise((resolve,reject) => {
    setTimeout(resolve,4000,"Third");   
});

Promise.all([promise2,promise3,promise4])
.then((values) => {
    console.log(values);
}).catch((error) => {
    console.error("Error in one of the promises: " + error);
});
// The above code will log an array of values once all promises are resolved.

// Note: If any of the promises in the array passed to Promise.all is rejected, the entire Promise.all will be rejected.
// This means that if one promise fails, you won't get the results of the others, and you can handle the error in the catch block.

// This Promise.all([...]) makes a new promise that will only get resolved after all the promises in it
// have been resolved,if anyone of the promises present in it are not resolved then this promise will stay unresolved
