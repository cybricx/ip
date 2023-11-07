document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get input values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    // Perform username and password validation (you can customize this part)
    if (username === "yourusername" && password === "yourpassword") {
        message.textContent = "Login successful!";
        message.style.color = "green";
    } else {
        message.textContent = "Invalid username or password. Please try again.";
        message.style.color = "red";
    }
});
