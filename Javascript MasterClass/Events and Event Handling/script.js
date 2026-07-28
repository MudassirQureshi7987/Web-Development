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



