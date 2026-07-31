// 1. Local Storage

// Think of Local Storage as a small notebook the browser keeps permanently.

// Browser
// │
// ├── Local Storage
// │      username = Mudassir
// │      theme = dark
// │      language = english

// Even if

// Refresh page ✅
// Close browser ✅
// Restart laptop ✅

// The data remains.

// Only disappears when

// User clears browser data
// OR JavaScript deletes it

// localStorage.setItem("name","Mudassir");  // console will show {name : 'Mudassir',length : 1}
// localStorage.setItem("name","John"); // this will update it to {name : 'John',length : 1}

// let val = localStorage.getItem("name"); // val = John

// localStorage.removeItem("name");  //  now it will show {length : 0}

// 2. Session Storage

// Very similar.

// Difference:

// It survives only while the browser tab is open.

// Imagine:

// Chrome Tab
// │
// └── Session Storage

// Close that tab.

// Everything disappears.

// Store

// sessionStorage.setItem("user", "Mudassir");

// Read

// sessionStorage.getItem("user");

// Delete

// sessionStorage.removeItem("user");

// Refresh page?

// Still exists.

// Close tab?

// Gone.

// Delete everything

// localStorage.clear();

// 3. Cookies

// Cookies are much older.

// Unlike Local Storage,

// cookies are sent to the server with every HTTP request.

// Example

// You login

// ↓

// Server says

// Remember this user

// ↓

// Browser stores a cookie

// ↓

// Every request

// ↓

// Cookie goes automatically

// Example cookie

// username=Mudassir
// theme=dark
// Create cookie
// document.cookie = "username=Mudassir";
// Read cookies
// console.log(document.cookie);

// Output

// username=Mudassir

// Cookies ~4KB
// LocalStorage and SessionStorage ~5MB

// There is an extension edit this cookie which can show us cookies of the site cause they are
// hidden by default

// In localStorage,we cannot save arrays or objects cause it stores everything as an object so 
// therefore  we make them string using this but when we extract data from localStorage then we 
// get a string

// localStorage.setItem("friends", JSON.stringify(["aman","harsh","sumit"]));

// // For getting that data in its natural form we use

// JSON.parse('["aman","harsh","sumit"]');
// (3) ['aman', 'harsh', 'sumit']


// This property will give us an object maybe which will tell us what our system's mode is
// dark or light so that we can change the websites mode accordingly

// window.matchMedia('(prefers-color-scheme: dark)')


// MediaQueryList {media: '(prefers-color-scheme: dark)', matches: false, onchange: null}
// matches
// : 
// false
// media
// : 
// "(prefers-color-scheme: dark)"
// onchange
// : 
// null
// [[Prototype]]
// : 
// MediaQueryList

// if matches is true then the mode is dark and vice versa

// Now we will make a website which changes its mode according to the systems mode dark or light


