function getUsers() {

    document.querySelector(".users").innerHTML = "";

    fetch("https://randomuser.me/api/?results=3")
        .then((rawdata) => {
            return rawdata.json();
        })
        .then((data) => {

            data.results.forEach(function (user) {

                // Card
                const card = document.createElement("div");
                card.className =
                    "bg-gray-800 rounded-xl shadow-lg p-6";

                // Flex Container
                const innerFlex = document.createElement("div");
                innerFlex.className =
                    "flex items-center space-x-4";

                // Image
                const avatar = document.createElement("img");
                avatar.className =
                    "w-20 h-20 rounded-full object-cover border-2 border-blue-500";
                avatar.src = user.picture.large;
                avatar.alt = "User Image";

                // Text Container
                const textContainer = document.createElement("div");

                // Username
                const username = document.createElement("h2");
                username.className =
                    "text-xl font-semibold text-white";
                username.textContent = user.login.username;

                // Email
                const email = document.createElement("p");
                email.className =
                    "text-gray-300 break-all";
                email.textContent = user.email;

                // Append text elements
                textContainer.appendChild(username);
                textContainer.appendChild(email);

                // Append image and text
                innerFlex.appendChild(avatar);
                innerFlex.appendChild(textContainer);

                // Append flex to card
                card.appendChild(innerFlex);

                // Append card to users container
                document.querySelector(".users").appendChild(card);

            });

        })
        .catch((error) => {
            console.log(error);
        });

}

getUsers();

document
    .querySelector("#refreshBtn")
    .addEventListener("click", function () {
        getUsers();
    });


// This code demonstrates submitting a form using the Fetch API instead of the browser's default
// form submission.


let form = document.querySelector("form");
let name = document.querySelector("#name");
let email = document.querySelector("#email");
let password = document.querySelector("#password");

form.addEventListener("submit", function (evt) {
    evt.preventDefault();

    fetch("url", {
        method: "POST",
        body: JSON.stringify({
            name: name.value,
            email: email.value,
            password: password.value,
        }),
    });
});


// A more complete version

let form = document.querySelector("form");
let name = document.querySelector("#name");
let email = document.querySelector("#email");
let password = document.querySelector("#password");

form.addEventListener("submit", function (evt) {
    evt.preventDefault();

    fetch("https://example.com/api/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: name.value,
            email: email.value,
            password: password.value,
        }),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log("Success:", data);
        })
        .catch((error) => {
            console.log("Error:", error);
        });
});