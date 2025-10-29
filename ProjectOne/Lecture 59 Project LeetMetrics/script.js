document.addEventListener("DOMContentLoaded", function() {


    const searchButton = document.getElementById("search-btn");
    const usernameInput = document.getElementById("user-input");
    const statsContainer = document.querySelector(".stats-container");
    const easyProgressCircle = document.querySelector(".easy-progress");
    const mediumProgressCircle = document.querySelector(".medium-progress");
    const hardProgressCircle = document.querySelector(".hard-progress");
    const easyLabel = document.getElementById("easy-label");
    const mediumLabel = document.getElementById("medium-label");
    const hardLabel = document.getElementById("hard-label");
    const cardStatsContainer = document.querySelector(".stats-cards");

    function validateUsername(username) {
        if(username.trim() === "") {
            alert("Please enter a valid LeetCode username.");
            return false;
        }

        const regex = /^[a-zA-Z0-9_-]+$/;
        const isValid = regex.test(username);
        if(!isValid) {
            alert("Username can only contain letters, numbers, underscores, and hyphens.");
        }
        return isValid;
    }

    async function fetchLeetCodeData(username) {
        if(!validateUsername(username)) {
            return;
        }
        const url = 'https://leetcode-stats-api.herokuapp.com/${username}}';
    searchButton.addEventListener("click", function() {
        const username = usernameInput.value.trim();
        console.log("Searching for user:", username);
    });
});