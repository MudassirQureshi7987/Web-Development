// setTimeout(function() {
//     console.log("hello")
// },5000);

// // SetTimeout or setinterval is a function which takes function as a parameter
// // SetTimeout runs one time but SetInterval runs after every n seconds

// setInterval(function() {
//     console.log("Interval hello");
// },4000);

// // Clearing timeout and interval

// let tm = setTimeout(function() {
//     console.log("hello")
// },3000);

// clearTimeout(tm);

// let dm = setInterval(function() {
//     console.log("hello")
// },3000);

// clearInterval(dm)

// this function clears the timeout and therefore nothing is print

// Making a countdown from 10 to 0 and then stop the counter

// let counter = setInterval(function() {
//     if(count >= 1) {
//         console.log(count);
//         count--;
//     } else {
//         clearInterval(counter);
//     }
// },1000);

let count = 0;

let progress = document.querySelector(".progress-bar");
let percentText = document.querySelector("#percentText");

let downloadBtn = document.querySelector("#downloadBtn");
let cancelBtn = document.querySelector("#cancelBtn");

let status = document.querySelector("#downloading");

let dm; // interval id

downloadBtn.addEventListener("click", function () {

    // Prevent multiple clicks while downloading
    if (downloadBtn.disabled) return;

    count = 0;
    progress.style.width = "0%";
    percentText.textContent = "0%";

    status.textContent = "Downloading...";
    downloadBtn.textContent = "Downloading...";
    downloadBtn.disabled = true;

    dm = setInterval(function () {

        if (count < 100) {
            count++;

            progress.style.width = `${count}%`;
            percentText.textContent = `${count}%`;

        } else {

            clearInterval(dm);

            status.textContent = "Downloaded ✔";
            downloadBtn.textContent = "Download Again";
            downloadBtn.disabled = false;
        }

    }, 5000 / 100);

});


cancelBtn.addEventListener("click", function () {

    clearInterval(dm);

    status.textContent = "Download Cancelled";

    downloadBtn.textContent = "Download";
    downloadBtn.disabled = false;

    count = 0;
    progress.style.width = "0%";
    percentText.textContent = "0%";

});

