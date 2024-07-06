document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Here you can make a request to your API for authentication
    // For demonstration purposes, let's assume an API endpoint /login
    
    fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => {
        if (response.ok) {
            alert("login successful..")
            // If login is successful, redirect or do something else
            window.location.href = "index.html"; // Redirect to dashboard page
        } else {
            throw new Error("Login failed");
        }
    })
    .catch(error => {
        document.getElementById("login-error").textContent = error.message;
    });
});
