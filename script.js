function checkLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "Noor") {
        // Successful login
        document.getElementById("loginSection").style.display = "none";
        document.getElementById("colorSection").style.display = "block";
    } else {
        // Invalid login
        document.getElementById("loginError").textContent = "Wrong Username or Password";
    }
}

function generateColors() {
    const periodNumber = document.getElementById("periodNumber").value;
    if (periodNumber.length !== 3 || isNaN(periodNumber)) {
        alert("Please enter a valid 3-digit period number.");
        return;
    }

    const colorDisplay = document.getElementById("colorDisplay");
    colorDisplay.innerHTML = ''; // Clear previous results

    for (let i = 0; i < 5; i++) {
        const randomColor = getRandomColor();
        displayColor(randomColor, colorDisplay);
    }
}

function displayColor(color, colorDisplay) {
    const colorDiv = document.createElement("div");
    colorDiv.style.backgroundColor = color;
    colorDiv.textContent = color === "red" ? "Red 🔴🔴" : "Blue 🔵🔵";
    colorDiv.className = "color-result";
    colorDisplay.appendChild(colorDiv);
}

function getRandomColor() {
    // Generate a random number to determine the color
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
        return "red"; // Red
    } else {
        return "blue"; // Blue
    }
}
