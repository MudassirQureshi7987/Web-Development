const text = "Welcome to the Typing Animation Example!";
let index = 0;
function typeEffect() {
if (index < text.length) {
document.getElementById("typing-text").innerHTML += text.charAt(index);
index++;
setTimeout(typeEffect, 100);
}
}
window.onload = typeEffect;