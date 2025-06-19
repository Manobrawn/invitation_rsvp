// Function to check if the email field is valid
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Function to display messages
function displayMessage(message, color) {
    const messageDiv = document.getElementById("message");
    messageDiv.textContent = message;
    messageDiv.style.color = color;
    // Fade out message after 2 seconds
    setTimeout(function () {
        messageDiv.style.transition = "color 1s";
        messageDiv.style.color = "#f0f0f0"; // Fade to background color
    }, 2000);
}

// Function to change background image
function changeBackground(imageUrl) {
    document.body.style.backgroundImage = `url(${imageUrl})`;
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
}

// Function to handle YES button click
document.getElementById("yes-btn").addEventListener("click", function () {
    const email = document.getElementById("email").value;
    if (isValidEmail(email)) {
        displayMessage(
            "🎉 We will see you there, we are super excited to have you! 🎉",
            "#4caf50"
        );
        changeBackground(
            "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExazloaWVibDhlOGo4aWV0ZWN3bDd5ZWFhbjB1bzBibHA3emQ2ZnRuMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DKnMqdm9i980E/giphy.gif"
        );
        setTimeout(() => (document.getElementById("email").value = ""), 2000);
    } else {
        displayMessage("Please enter a valid email address.", "red");
    }
});

// Function to handle NO button click
document.getElementById("no-btn").addEventListener("click", function () {
    const email = document.getElementById("email").value;
    if (isValidEmail(email)) {
        displayMessage(
            "🙁 What a pity! We hope you can make it next time. 🙁",
            "#f44336"
        );
        changeBackground(
            "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGM1bzl2YmViM2xoczh6b2k3ODNpOXBibndxamFkMHB4cmFpaWFveiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/OPU6wzx8JrHna/giphy.gif"
        );
        setTimeout(() => (document.getElementById("email").value = ""), 2000);
    } else {
        displayMessage("Please enter a valid email address.", "red");
    }
});
