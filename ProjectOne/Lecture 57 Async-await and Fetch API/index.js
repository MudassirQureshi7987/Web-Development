// /Async Await and Fetch API

/*
⚡ What is async / await?

async and await are modern JavaScript features (introduced in ES2017) used to handle asynchronous 
operations (like API calls, file reads, etc.) in a clean and readable way
 — avoiding the messy "callback hell" or complex .then() chains of Promises.

🧠 Basic Idea

Async always returns a Promise.

async makes a function return a Promise automatically.

await pauses the function until the Promise resolves — letting you write asynchronous code 
as if it were synchronous.
*/

// async function getData() {
//     setTimeout(() => {
//         console.log("I am inside setTimeout block");
//     },4000);
// }

// let output = getData();

// console.log("I am outside the setTimeout block");

// Scenario:

// prepare url / apu endpoint -> sync
// await // fetch data from api -> async
// process data -> sync

// In this above scenario, we have to wait for the fetch data from api to complete before processing the data.
// because if we don't wait, the processing will happen on undefined or incomplete data.

// Example without async / await (using Promises)

// async function fetchData() {
//     let response = fetch('https://jsonplaceholder.typicode.com/todos/1');
//     console.log("Response object:", response);
// }

// fetchData();

// Example with async / await

// async function fetchDataAsync() {
//     let response = await fetch('https://jsonplaceholder.typicode.com/posts');

//     // parse json - async operation
//     let data = await response.json();
//     console.log("Data:", data);
// }

// fetchDataAsync();

// await can only be used inside async functions

// async function demo() {
//     let a = await fetch('https://jsonplaceholder.typicode.com/users');
//     let b = await a.json();
//     let c = await b;
//     console.log(c);
// }

// demo();

// Note: Using async / await makes the code more readable and easier to understand, especially when dealing with multiple asynchronous operations in sequence.


const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const url = "https://jsonplaceholder.typicode.com/posts";

const options = {
    method: "POST",
    body: JSON.stringify({ username: "love babbar" }),
    headers: myHeaders,
  };
//apikey
async function getData() {
    const url = "https://dummyjson.com/posts";
    const response = await fetch(url);
    let data = await response.json();
    console.log("get data response: ", data);
}
