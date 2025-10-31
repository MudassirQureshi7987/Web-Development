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
        if (username.trim() === "") {
            alert("Please enter a valid LeetCode username.");
            return false;
        }

        const regex = /^[a-zA-Z0-9_-]+$/;
        const isValid = regex.test(username);
        if (!isValid) {
            alert("Username can only contain letters, numbers, underscores, and hyphens.");
        }
        return isValid;
    }

    async function fetchUserDetails(username) {
        const url = `https://leetcode-stats-api.herokuapp.com/${username}`;
        try {
            searchButton.textContent = "Searching...";
            searchButton.disabled = true;

            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Unable to fetch data. Please check the username and try again.");
            }

            const data = await response.json();
            console.log("User data:", data);
        } 
        catch (error) {
            statsContainer.innerHTML = `<p>No data found<p>`;

        } 
        finally {
            searchButton.textContent = "Search";
            searchButton.disabled = false;
        }
    }

    // ✅ Correct place for event listener
    searchButton.addEventListener("click", function() {
        const username = usernameInput.value.trim();
        if(!validateUsername(username)) {
            return;
        }
        console.log("Searching for user:", username);
        fetchUserDetails(username);
    });
});


