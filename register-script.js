const registerForm = document.getElementById("registerform");
registerForm.addEventListener("submit", function (event) {
    event.preventDefault(); 
    const name = document.getElementById("Name").value.trim();
    const password = document.getElementById("password").value;
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const age = document.getElementById("age").value;
    const dob = document.getElementById("DOB").value;
    if (name === "") 
    {
        alert("Please fill in the name.");
        return;
    }
    if (password === "") 
    {
        alert("Please fill in the password.");
        return;
    }
    if (email === "") 
    {
        alert("Please fill in the email.");
        return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) 
    {
        alert("Please enter a valid email address.");
        return;
    }
    if (phone === "") 
    {
        alert("Please fill in the phone number.");
        return;
    }
    if (age === "") 
    {
        alert("Please fill in the age.");
        return;
    }
    if (dob === "") 
    {
        alert("Please fill in the date of birth.");
        return;
    }
    alert("Registration successful!");
});