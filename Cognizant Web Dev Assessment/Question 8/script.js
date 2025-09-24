function passwordformValidation() {
    var firstName = document.getElementById("firstName").value;
    var password = document.getElementById("password").value;
    var retypePassword = document.getElementById("retypePassword").value;
    var message = document.getElementById("demo");
    if (firstName === "") {
        message.textContent = "First Name has to be entered";
        return false;
    }

    if (password !== retypePassword) {
        message.textContent = "Passwords do not match";
        return false;
    }

    message.textContent = "Form submitted successfully!";
    return true;
}   