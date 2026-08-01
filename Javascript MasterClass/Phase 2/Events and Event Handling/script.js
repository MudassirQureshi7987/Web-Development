// let p = document.querySelector('p');

// p.addEventListener('click', function() {
//     p.style.color = 'red';
// });  
// // double click event
// p.addEventListener('dblclick', function() {
//     p.style.color = 'blue';
// });

// // Removing event listener
// let h1 = document.querySelector('h1');
// function changeColor() {
//     h1.style.color = 'green';
// }

// h1.addEventListener('click', changeColor);
// h1.removeEventListener('click', changeColor);

// let inp = document.querySelector('input');

// inp.addEventListener("input", function(evt) {
//     console.log(evt.target.value);  // evt.data is used for input event, but it is not supported in all browsers, so we use evt.target.value instead
// });

// let inp = document.querySelector('input');

// // inp.addEventListener("input", function(evt) {
// //     if(evt.data !== null) {
// //         console.log(evt.data);  // evt.data is used for input event, but it is not supported in all browsers, so we use evt.target.value instead
// //     }
// // });

// // Change event is fired when the input loses focus and the value has changed

// // let sel = document.querySelector('select');
// // let device = document.querySelector('#device');

// // sel.addEventListener("change", function(evt) {
// //     console.log(evt.target.value);
// // });

// // sel.addEventListener("change", function(evt) {
// //     device.textContent = `You have selected ${evt.target.value}`;
// // });

// // let display = document.querySelector('#display');

// // window.addEventListener("keydown", function(evt) {
// //     if(evt.key === " ") {
// //         display.textContent = "Space";
// //     } else {
// //         display.textContent = evt.key;
// //     }
// // });

// // let fileinp = document.querySelector('#fileinp input');
// // let btn = document.querySelector('#btn');

// // btn.addEventListener("click", function() {
// //     fileinp.click();
// // });

// // fileinp.addEventListener("change", function(evt) {
// //     const file = evt.target.files[0];
// //     if(file) {
// //         btn.textContent = file.name;
// //     }
// // });

// // let form = document.querySelector('form');
// // let inputs = document.querySelectorAll('input');

// // form.addEventListener("submit", function(evt) {
// //     evt.preventDefault();  // Prevent the default form submission behavior

// //     console.log(inputs[0].value, inputs[1].value, inputs[2].value, inputs[3].value);  // Log the values of all inputs
// // });

// const form = document.querySelector("form");
// const cardContainer = document.querySelector("#cards");

// form.addEventListener("submit", function (e) {
//     e.preventDefault();

//     const inputs = document.querySelectorAll("input");

//     let card = document.createElement("div");
//     card.classList.add("card");

//     let profile = document.createElement("div");
//     profile.classList.add("profile");

//     let img = document.createElement("img");
//     img.src = inputs[3].value;      // Profile picture URL

//     let h3 = document.createElement("h3");
//     h3.textContent = inputs[0].value;   // Name

//     let h5 = document.createElement("h5");
//     h5.textContent = inputs[1].value;   // Email

//     let p = document.createElement("p");
//     p.textContent = "Age: " + inputs[2].value;

//     profile.appendChild(img);

//     card.appendChild(profile);
//     card.appendChild(h3);
//     card.appendChild(h5);
//     card.appendChild(p);

//     cardContainer.appendChild(card);

//     form.reset();
// });


// let abcd = document.querySelector('#abcd');

// abcd.addEventListener("mouseover", function() {
//     abcd.style.backgroundColor = "red";
// });

// abcd.addEventListener("mouseout", function() {
//     abcd.style.backgroundColor = "blue";
// });

// // Make the div move with the mousemove

// window.addEventListener("mousemove", function(evt) {
//     abcd.style.left = evt.clientX + "px";
//     abcd.style.top = evt.clientY + "px";
// }); // make sure to set position: absolute; in the CSS for the div with id "abcd" so that it can move with the mouse.

// What is Event Bubbling?

// When an event happens on an element, it first occurs on that element, then it "bubbles up" to its 
// parent, then its parent's parent, all the way up to the document.

// Suppose we have a unordered list with list items, and we want to handle click events on the list
//  items. Instead of adding a click event listener to each list item, we can add a single click 
// event listener to the parent unordered list. When a list item is clicked, the event will bubble 
// up to the unordered list, and we can handle it there.

let ul = document.querySelector('ul');

ul.addEventListener("click", function(evt) {
    evt.target.style.textDecoration = "line-through";  // Strike through the clicked list item
    evt.target.classList.add("lt");  // can also be used to add a class to the clicked list item 
                                    // which can be used to style it with CSS
});

// Event Delegation

// Event delegation is a technique in which we add a single event listener to a parent element, 
// and that event listener will handle events for all of its child elements. This is useful when 
// we have a large number of child elements, or when the child elements are added dynamically 
// (after the page has loaded).

// Event delegation works because of event bubbling. When an event happens on a child element, it
// bubbles up to the parent element, and we can handle it there. We can use the event object's 
// target property to determine which child element was clicked.

// Event stop propagation is a technique in which we stop the event from bubbling up to the parent elements.

abcd.addEventListener("click", function(evt) {
    evt.stopPropagation();
    abcd.style.backgroundColor = "green";
});

// In the above example, when we click on the div with id "abcd", the click event will not bubble up to the window, and the window's click event listener will not be triggered.

// Event capturing is the opposite of event bubbling. In event capturing, the event first occurs 
// on the window, then on the parent element, then on the child element. We can use the third
//  parameter of the addEventListener method to specify whether we want to use event capturing
//  or event bubbling. By default, it is set to false (event bubbling). If we set it to true,
//   it will use event capturing.

// Phase 1: Event capturing
// Phase 2: Target
// Phase 3: Event bubbling

grandparent.addEventListener("click", () => {
    console.log("Grandparent Capture");
}, true);

parent.addEventListener("click", () => {
    console.log("Parent Bubble");
});

child.addEventListener("click", () => {
    console.log("Child");
});

// Grandparent Capture
// Child
// Parent Bubble

// Notice:

// Grandparent ran while coming down.
// Child ran at the target.
// Parent ran while going back up.

// Task : make a counter for text input that counts the number of characters typed in the input field and displays it below the input field.
// if length of the input is greater than 20, change the color of the counter to red, else change it to green.

let inp = document.querySelector('input');
let span = document.querySelector('span');

inp.addEventListener("input", function(evt) {
    let length = 20 - evt.target.value.length;
    span.textContent = length;

    if(length < 0) {
        span.style.color = "red";
    } else {
        span.style.color = "green";
    }   
});




