let nm = document.querySelector('#name');
let form = document.querySelector('form');

form.addEventListener("submit", function(evt) {
    evt.preventDefault();

    if(nm.value.length < 3) {
        document.querySelector('#error').style.display = "initial";
    } else {
        document.querySelector('#error').style.display = "none";
    }
}); 

// Inline validation

// Validation can be done in HTML using the required attribute, but we can also do it in JavaScript.
//  In this case, we are checking if the name input has at least 3 characters. If it doesn't, we 
// display an error message. If it does, we hide the error message.

{/* <input required minLength = "3" maxLength = "20" type="text" id="name" name="name" placeholder="Enter your name"> */}

// The required attribute ensures that the input field must be filled out before submitting the form.
// The minLength attribute specifies the minimum number of characters that must be entered in the input field.
// The maxLength attribute specifies the maximum number of characters that can be entered in the input field.
// It can be bypassed by inspecting and changing the HTML that's why we do it in JS
// Although JS can also be bypassed so therefore at every point we do this,backend to database.
// We put multiple checks like these

// Pattern can be used in HTML,it is rarely used though
// Mostly we use regex

// const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

// function isValidEmail(email) {
//     return emailRegex.test(email);
// }

// console.log(isValidEmail("john@example.com"));      // true
// console.log(isValidEmail("abc@gmail.co.in"));       // true
// console.log(isValidEmail("hello@"));                // false
// console.log(isValidEmail("@gmail.com"));            // false
// console.log(isValidEmail("abc@.com"));              // false

let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("form");

form.addEventListener("submit", function (dets) {
    dets.preventDefault();

    document.querySelector("#emailError").textContent = "";
    document.querySelector("#passwordError").textContent = "";

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^])[A-Za-z\d@$!%*?&#^]{8,}$/;

    let emailans = emailRegex.test(email.value);
    let passwordans = passwordRegex.test(password.value);

    let isValid = true;

    if (!emailans) {
        document.querySelector("#emailError").textContent =
            "Email is incorrect";
        document.querySelector("#emailError").style.display = "initial";
        isValid = false;
    }

    if (!passwordans) {
        document.querySelector("#passwordError").textContent =
            "Password is incorrect";
        document.querySelector("#passwordError").style.display = "initial";
        isValid = false;
    }

    if (isValid) {
        document.querySelector("#resultMessage").textContent =
            "Everything is correct";
    }
});