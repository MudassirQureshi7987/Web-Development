// let abcd = document.getElementsByClassName("abcd");
// console.log(abcd);

// let h1 = document.querySelector("h1");
// console.dir(h1);
// h1.textContent = "Hello Mudassir";  // innerText also does same

// h1.innerHTML = "<i>Hello Mudassir</i>";  // innerHTML allows us to add HTML tags inside the element
// h1.hidden = true;  // hides the element from the page but still exists in the DOM

// Attribute Manipulation 

//  let a = document.querySelector("a");
// a.href = "https://www.google.com"; // works
// a.setAttribute("href", "https://www.google.com"); // works

// console.log(a.getAttribute("href")); // works
// let img = document.querySelector("img");
// img.setAttribute(
//     "src",
//     "https://picsum.photos/500/300"
//     );

// a.removeAttribute("href"); // removes the attribute from the element

// let h1 = document.createElement("h1");
// h1.textContent = "Hello Mudassir";  // innerText also does same
// h1.innerHTML = "<i>Hello Mudassir</i>";  // innerHTML allows us to add HTML tags inside the element
// document.querySelector("body").append(h1); // adds the element at the end of the body
// document.querySelector("body").prepend(h1); // adds the element at the start of the body

// let h1 = document.querySelector("h1");
// h1.style.color = "red"; // changes the color of the text

// Changing CSS styles using JS

// Adding class to an element using JS

// let h1 = document.querySelector("h1");
// h1.classList.add("abcd");
// // h1.classList.remove("abcd"); 
// // h1.classList.toggle("abcd"); // adds the class if it doesn't exist, removes it if it does

// // Select all <li> elements and print their using a loop
// let lis = document.querySelectorAll("li");
// lis.forEach((li) => {
//     console.log(li.textContent);
// });

// remove diabled attribute from a button using JS

let button = document.querySelector("button");
button.removeAttribute("disabled");

// create a new list item <li>New Task</li> and add it to the end of the list <ul>
//  using JS

let liq = document.createElement("li");
liq.textContent = "New Task";
document.querySelector("ul").append(liq);

// Add a highlight class to all the even items in a list using JS

let lis = document.querySelectorAll("ul li:nth-child(2n)");
lis.forEach((li) => {
    li.classList.add("highlight");
});
