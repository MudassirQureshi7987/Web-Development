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

// inp.addEventListener("input", function(evt) {
//     if(evt.data !== null) {
//         console.log(evt.data);  // evt.data is used for input event, but it is not supported in all browsers, so we use evt.target.value instead
//     }
// });

// Change event is fired when the input loses focus and the value has changed

// let sel = document.querySelector('select');
// let device = document.querySelector('#device');

// sel.addEventListener("change", function(evt) {
//     console.log(evt.target.value);
// });

// sel.addEventListener("change", function(evt) {
//     device.textContent = `You have selected ${evt.target.value}`;
// });

// let display = document.querySelector('#display');

// window.addEventListener("keydown", function(evt) {
//     if(evt.key === " ") {
//         display.textContent = "Space";
//     } else {
//         display.textContent = evt.key;
//     }
// });

