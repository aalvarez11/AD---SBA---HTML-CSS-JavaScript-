console.log("validate.js loaded \nloading listeners");

// start the script on page load
window.onload = init();

// add a listener to the form submit button
function init() {
    // create a variable ref to the form
    let formElement = document.getElementById("login-form");

    // attach listener and function to execute
    formElement.addEventListener("submit", attemptLogin);
}

function attemptLogin() {
    // get the user email and password
    const email = document.getElementById("log-email").value;
    const pass = document.getElementById("log-psw").value;

    console.log(email);
    console.log(pass);

    // different accounts lead to different pages
    if (email == "admin@gmail.com" && pass == "admin") {
        window.location.href = "https://www.youtube.com/watch?v=re094oIejfA";
    } else if (email == "shop@gmail.com" && pass == "shopping") {
        window.location.href = "shop.html";
    } else if (email == "game@gmail.com" && pass == "play") {
        window.location.href = "games.html";
    } else if (email == "reg@gmail.com" && pass == "join") {
        window.location.href = "register.html";
    } else if (email == "base@gmail.com" && pass == "home") {
        window.location.href = "../index.html";
    } else {
        document.getElementById("form-error").innerText = "Invalid email or password";
    }

}