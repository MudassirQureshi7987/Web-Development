// For understanding Event Loop in JavaScript
// First we need to understand Synchronous and Asynchronous code

console.log("Synchronous Code Start");
for(let i = 0; i < 5; i++) {
    console.log("Synchronous Loop: " + i);
}

console.log("Synchronous Code End");

console.log("Asynchronous Code Start");
setTimeout(() => {
    console.log("Asynchronous Code Executed after 2 seconds");
}, 2000);

console.log("Asynchronous Code End");

// Synchronous code runs as soon as the line of code is reached.
// Asynchronous code is executed after a certain event or time, allowing other code to run in the meantime.
// Asynchronous code can be executed after a certain time (like setTimeout) or after an event occurs (like a button click).
// Even if we give 2 seconds, the code can take more than that or maybe 2 seconds exactly, it all depends on the call stack and event loop at that moment.
// Asynchronous code is written outside the main flow of the program, allowing the program to continue executing other code while waiting for the asynchronous operation to complete.

// Blocking
// Consider that something like asynchronous doesn't exist in JavaScript and everything is synchronous
console.log("Blocking Code Start");

setTimeout(() => {
    console.log("This is a blocking operation");
},5000); // 5 seconds blocking
// This will block the entire execution for 5 seconds, no other code can run during this time.

console.log("Blocking Code End");

// But in reality, because of asynchronous nature of JavaScript, the above code will not block the execution for 5 seconds.

// Event Loop
// The event loop is a mechanism that allows JavaScript to perform non-blocking operations by offloading operations to the system kernel whenever possible.
// It continuously checks the call stack and the task queue. If the call stack is empty, it takes the first task from the queue and pushes it onto the stack, which effectively runs it.

// Call Stack
// Browser (Web APIs)
// Task Queue (Callback Queue)
// Event Loop

// Whenever a synchrnous code is executed, it goes to the call stack and gets executed.
// Whenever an asynchronous code is executed, it also goes to the call stack but the call stack offloads the asynchronous operation to the browser's Web APIs (like setTimeout, DOM events, etc.).
// Once the asynchronous operation is completed (like the timer in setTimeout finishes), the callback function is pushed to the task queue.
// The event loop continuously checks if the call stack is empty. If it is, it takes the first task from the task queue and pushes it onto the call stack for execution.

// You can visit loupe.dev to visualize the event loop in action.

// Note: The event loop is a fundamental concept in JavaScript that enables asynchronous programming, allowing for non-blocking operations and efficient handling of I/O tasks.


// JavaScript is a single Threaded Language.

// Still It can achieve the functionality of muti-threading because of event loop.


// Synchronous Code: The code which execute immediately when the flow of execution touches it.

// Asynchronous Code: The code which do NOT execute immediately when the flow of execution touches it. It takes some time to execute.

// Since, JS is a single- threaded language, so if it executes the asynchronous task then all the lines 
// of code after that asynchronous task will not be executed on time. Therefore, whenever any async task
//  entered in the call Stack then it hand over to the browser which takes care of this code till the 
// time call Stack take over other sync tasks. When the waiting time of the async task become over then
//  it moves to the callback queue (it do not send to call stack directly, because it may disrupt the
//  flow or creates unexpected result by stopping the ongoing task). Now, event loop repeatedly 
// checking "is the call stack empty now?" if it is empty then the first task  in the callback 
// queue send to the call Stack to execute.