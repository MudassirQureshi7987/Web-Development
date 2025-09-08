/*

The window object in JavaScript is a global object that represents the browser window or tab in which a 
script is running. It is automatically created by the browser and acts as the top-level object in the 
client-side JavaScript environment.

👉 In simple words: Everything that runs in the browser runs inside the window.

Global Scope

All global variables and functions automatically become properties of the window object.

Browser Window Representation

It represents the entire browser window (or a tab).

Global Object

In browsers, the global object is window.

In Node.js, the global object is global.

*/

/*

In JavaScript, the DOM stands for Document Object Model.

It’s basically a programming interface that represents a webpage (HTML or XML) as a structured tree of
objects so that JavaScript can interact with it.

Tree Structure

The browser converts the HTML document into a tree-like structure.

Each HTML element becomes a node (object) in this tree.

The HTML code that we wrote is created into JS object and that is called Document

*/

/*

BOM 

The Browser Object Model represents the browser environment itself.
It allows JavaScript to interact with the browser window and not just the webpage (DOM).

🔹 Key Points about BOM:

Represents the Browser Window

The top-level object is window.

document (DOM) is actually a part of the window object.

Not a Standardized Model

Unlike the DOM (which is standardized by W3C), BOM features can vary slightly across browsers.

DOM → Works with the webpage (HTML document).

BOM → Works with the browser window (outside the document).

*/

// Go live and then do inspect and then go to console and type this
// This code can only be used in a console in a browser that supports HTML file

// document.getElementById("fHeading");   // This code will give us a single object in return here
//  <h1 id = "fHeading">First Heading</h1>   This is the output that it will give us

// document.getElementsByClassName("textMatter");  This will return two objects as there are two elements 
// with that className

// HTMLCollection { 0: p#fPara.textMatter, 1: h1#fHeading.textMatter
// , length: 2, … }
// ​
// 0: <p id="fPara" class="textMatter">​
// 1: <h1 id="fHeading" class="textMatter">​
// fHeading: <h1 id="fHeading" class="textMatter">​
// fPara: <p id="fPara" class="textMatter">
// ​
// length: 2
// ​
// <prototype>: HTMLCollectionPrototype { item: item(), namedItem: namedItem(), length: Getter, … }

// The output that we got came in an array like structure

// document.getElementsByTagName('p');

// HTMLCollection { 0: p#fPara.textMatter, 1: p#sPara.textMatter
// , length: 2, … }
// ​
// 0: <p id="fPara" class="textMatter">​
// 1: <p id="sPara" class="textMatter">​
// fPara: <p id="fPara" class="textMatter">
// ​
// length: 2
// ​
// sPara: <p id="sPara" class="textMatter">​
// <prototype>: HTMLCollectionPrototype { item: item(), namedItem: namedItem(), length: Getter, … }


// document.querySelector('p');   // This will only return one object, that is the first one
// <p id="fPara" class="textMatter"></p>

/*
🔹 querySelector Cheat Sheet (CSS selectors)

#id           → document.querySelector("#myId")
.class        → document.querySelector(".myClass")
tag           → document.querySelector("p")         // first <p>
tag.class     → document.querySelector("p.myClass") // <p> with class
parent child  → document.querySelector("div p")     // <p> inside <div>
parent > child→ document.querySelector("div > p")   // direct child
[attr]        → document.querySelector("[href]")    // element with attr
[attr=value]  → document.querySelector("[type='text']")
:first-child  → document.querySelector("p:first-child")
:last-child   → document.querySelector("p:last-child")
:nth-child(n) → document.querySelector("li:nth-child(2)")

👉 querySelector()   → first match
👉 querySelectorAll()→ all matches (NodeList)
*/


// To select all the objects using query Selector,use querySelectorAll

// document.querySelectorAll('p');
// NodeList(4) [ p#fPara.textMatter, p#sPara.textMatter, p#tPara.textMatter, p#foPara.textMatter
//  ]
// ​
// 0: <p id="fPara" class="textMatter">​
// 1: <p id="sPara" class="textMatter">​
// 2: <p id="tPara" class="textMatter">​
// 3: <p id="foPara" class="textMatter">
// ​
// length: 4
// ​
// <prototype>: NodeListPrototype { item: item(), keys: keys(), values: values(), … }

// There is one more method for selecting any object 

// Inspect and select any element in the page and select it and then go to console 
// and write $0 and enter
// You will get that object or element we can say


// Update existing element 

// Using innerHTML  -> get/set


// $0
// <p class=​"flex items-center justify-center gap-x-2 text-base font-medium px-2">​View Courses​</p>​flex
// let x = $0;
// undefined
// x
// <p class=​"flex items-center justify-center gap-x-2 text-base font-medium px-2">​View Courses​</p>​flex
// x.innerHTML
// 'View Courses'
// x.inn
// undefined
// x.innerHTML = Hello Bro;
// VM1526:1 Uncaught SyntaxError: Unexpected identifier 'Bro'Understand this error
// x.innerHTML = '<p>Hello Jii</p>';
// '<p>Hello Jii</p>'

// This will change the text in button to Hello Jii


// 🔹 innerHTML

// Refers to the HTML content inside an element (its children).

// Changing it replaces everything inside the element, but the element itself remains.

// Example:

//         <div id="box">Hello</div>

//         <script>
//         document.getElementById("box").innerHTML = "Hi there!";
//         </script>

// Result in browser:
//         <div id="box">Hi there!</div>

// ➡️ Only the content inside <div> changed.

// 🔹 outerHTML

// Refers to the HTML of the element itself, including the element tag.

// Changing it replaces the entire element (including its tag) with new HTML.

// Example:

//         <div id="box">Hello</div>

//         <script>
//         document.getElementById("box").outerHTML = "<p>Hi there!</p>";
//         </script>


// Result in browser:
//         <p>Hi there!</p>

// ➡️ The entire <div> (including its opening and closing tags) got replaced with a <p> element.

// ✅ Summary:

// innerHTML → modifies inside the element.

// outerHTML → replaces the entire element itself.


// InnerContent and textContent

// let element = document.querySelector('#fdiv');
// undefined
// element
// <div id="fdiv">

// element.innerText
// "This is my First Text"

// element.textContent

// "\n        \n            This is my First\n            \n                Text\n            \n        \n        This is my second para\n    "


// 🔹 textContent

// Returns all the text inside an element, including hidden text (e.g., inside display:none or visibility:hidden).

// It gives the text as it is in the DOM, without considering CSS styles.

// Faster than innerText because it doesn’t re-render styles.

// Example:
//         <div id="box">
//         Hello <span style="display:none">World</span>
//         </div>

//         <script>
//         console.log(document.getElementById("box").textContent);
//         </script>

// Output:
//         Hello World
// ➡️ Even though “World” is hidden, textContent still shows it.

// 🔹 innerText

// Returns only the visible text (what the user actually sees in the browser).

// It respects CSS styling (ignores hidden elements).

// Slightly slower because it checks rendering and styles.

// Example:
//         <div id="box">
//         Hello <span style="display:none">World</span>
//         </div>

//         <script>
//         console.log(document.getElementById("box").innerText);
//         </script>

// Output:

//         Hello
// ➡️ “World” is hidden, so innerText ignores it.

// ✅ Summary:

// textContent → Raw text in DOM (includes hidden text).

// innerText → Only visible text (respects CSS, slower).

// 👉 Fun fact: innerHTML gives HTML inside the element, while textContent/innerText give only text.


// Adding new Element


// 


// let fHeading = document.createElement('h1');
// undefined
// fHeading;
// <h1>

// fHeading.textContent = "My name is Mohammad Mudassir";
// "My name is Mohammad Mudassir"
// fHeading
// <h1>

// let bodyTag = document.querySelector('body');
// undefined
// bodyTag;
// <body>

// bodyTag.appendChild(fHeading);
// <h1>

// By doing this,our page will get a h1 of "My name is Mohammad Mudassir"
// Whenever we use appendChild, child is always added to the last

// There is a method by which we can decide on which position we need to add the child

// That method is called
// insertAdjacentElement()  -> here we need to give which position we want to add and what HTML we need to add
// We have four operations in position section here
// 1. beforebegin  2. afterbegin  3. beforeend   4. afterend


// let mydiv = document.querySelector('#mydiv');
// undefined
// mydiv
// <div id="mydiv">

// let newElement = document.createElement('span');
// undefined
// newElement
// <span>

// newElement.textContent = "This is me Here";
// "This is me Here"
// newElement
// <span>

// mydiv.insertAdjacentElement('beforebegin', newElement);
// <span></span>

// This will add "This is me here" before the starting of the mydiv


// Removal of Element

// Method available for that is 
// removeChild()  --> opposite of appendChild()
// we need to have parent object,meaning from which parent we are removing and we also need to have the child which needs to be removed


        // Removing the child of a parent

        // let parent = document.querySelector('#mydiv');

        // let child = document.querySelector('#fPara');

        // parent.removeChild(child);  // this will remove the fPara that is "first"


// If we just have the child then we can get its parent by using


{/* <div id="parent">
  <p id="child">I am child</p>
</div>

<script>
let child = document.getElementById("child");

// Get parent of child
let parent = child.parentElement;

console.log(parent.id); // Output: parent
</script> */}


// SSecond method for it is

// parentNode: Similar to parentElement, but can also return the document node in some cases 
// (e.g., text nodes).