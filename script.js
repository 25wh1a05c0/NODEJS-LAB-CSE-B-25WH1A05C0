const loginForm = document.getElementById("loginform");
loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); 
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
    if (username === "") 
    {
        alert("Please fill in the username.");
        return;
    }
    if (password === "") 
    {
        alert("Please fill in the password.");
        return;
    }
    alert("Login successful!");
});