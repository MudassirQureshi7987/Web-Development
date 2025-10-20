// Reflow and Repaint
// Reflow is the process of recalculating the positions and geometries of elements in the document.
// Reflow is triggered when elements are added, removed, or changed in a way that affects their size or position.
// It is an expensive operation because it requires the browser to recalculate the layout of the entire document or a significant portion of it.
// Repaint is the process of updating the pixels on the screen after a reflow has occurred.
// Repaint is triggered when visual aspects of elements change, such as color, visibility, or background.
// Repaint is generally less expensive than reflow because it does not require recalculating the layout, only updating the visual representation.
// Both processes can be expensive in terms of performance, especially if they happen frequently or on large documents.

// Code 1 
// This code creates and appends 100 paragraphs directly to the body, causing multiple reflows and repaints.
// This results in slower performance.

const t1 = performance.now();

for(let i = 0;i <= 100;i++) {
    let para = document.createElement('p');
    para.textContent = "This is my paragraph " + i;
    document.body.appendChild(para); 
    // why did we appendChild and what is appendChild?
    // appendChild is a method that adds a node to the end of the list of children of a specified parent node. 
}

const t2 = performance.now();

console.log("Time taken to create and append 100 paragraphs: " + (t2 - t1) + " milliseconds");

// Code 2
// This code creates 100 paragraphs and appends them to a single div, which is then appended to the body.
// This results in a single reflow and repaint, improving performance.
const t3 = performance.now();
let mydiv = document.createElement('div');

for(let i = 0;i <= 100;i++) {
    let para = document.createElement('p');
    para.textContent = "This is my paragraph " + i;
    mydiv.appendChild(para);
}

document.body.appendChild(mydiv);

const t4 = performance.now();

console.log("Time taken to create 100 paragraphs and append them to a single div: " + (t4 - t3) + " milliseconds");

// Documentation Fragment

// 🧩 What is a DocumentFragment?

// A DocumentFragment is a lightweight, invisible container that can hold DOM nodes (like elements, text, etc.) but is not part of the main DOM tree.

// Think of it as a temporary mini-DOM you can build and modify off-screen before inserting it all at once into the real document.

// 💡 Why Use It?

// When you directly add or modify multiple elements in the DOM (e.g., in a loop), each operation can cause reflow and repaint, slowing things down.

// A DocumentFragment avoids this problem — you can:

// Build all your new elements inside the fragment (no reflows yet).

// Append the fragment to the DOM in one operation — causing just one reflow.

// Best Code

// using DocumentFragment to optimize performance

const t5 = performance.now();
let fragment = document.createDocumentFragment();

for(let i = 0;i <= 100;i++) {
    let para = document.createElement('p');
    para.textContent = "This is my paragraph " + i;
    fragment.appendChild(para);
}

document.body.appendChild(fragment);

const t6 = performance.now();

console.log("Time taken to create 100 paragraphs using DocumentFragment: " + (t6 - t5) + " milliseconds");

// Sometimes the Code 2 would be faster and sometimes the 3 best code would be faster,it all depends 
// on the opertions and we cannot be certain