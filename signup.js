document.getElementById("signup-form").addEventListener("submit", function(event){
    event.preventDefault(); // Prevent default form submission
    var username = document.getElementById("username").value;
    var emailid = document.getElementById("emailid").value;
    var phoneno = document.getElementById("phoneno").value;
    var passward = document.getElementById("passward").value;

    // Prepare the data object to be sent in the request body
    var data = {
        username: username,
        emailid: emailid,
        phoneno: phoneno,
        passward: passward
    };

    // Make a POST request to the server
    fetch('http://localhost:8080/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the JSON response
    })
    .then(data => {
        // Handle the successful response from the server
        console.log('Response:', data);
        alert('User registered successfully');
        window.location.href = "login.html";
    })
    .catch(error => {
        // Handle any errors that occurred during the fetch
        console.error('Error:', error);
        alert('An error occurred while registering user');
    });
});
