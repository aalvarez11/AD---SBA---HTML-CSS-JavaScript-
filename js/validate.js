console.log("validate.js loaded \nloading listeners");

// start the script on page load
window.onload = init();

// add a listener to the form submit button
function init() {
    // create a variable ref to the form
    let formElement = document.getElementById("register-form");
    //let robotVal = document.getElementById("robot-check");

    // attach listener and function to execute
    formElement.addEventListener("submit", validateForm);
    //robotVal.addEventListener("change", robotChange);
    printSelectOptions();
}

function comparePasswords(pass1, pass2) {
    // regular expression for checking the initial password, req 1 low, 1 up, 1 num, len >= 8
    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");

    // check the initial password
    if (!strongRegex.test(pass1)) {
        return "Password should contain 1 lowercase letter, 1 uppercase letter, and 1 number.";
    }

    // check if both passwords match
    if (pass2 !== pass1) {
        return "Passwords do not match.";
    } else {
        return null;
    }
}

function validateForm(event) {
    //
    event.preventDefault();

    console.log("submit button clicked");

    // get the two passwords from user input
    const passwordInit = document.getElementById("psw").value;
    const passwordRep = document.getElementById("psw-repeat").value;

    // use validation function to check the passwords
    let validationMsg = comparePasswords(passwordInit, passwordRep);

    if (validationMsg != null) {
        console.log(validationMsg);
        document.getElementById("form-error").innerText = validationMsg;
    } else {
        console.log("Passwords are OK");
    }
}

function robotChange(event) {
    event.preventDefault();

    let robotVal = document.getElementById("robot-check");

    if (robotVal == 2) {
        document.getElementById("robot-check-response").innerHTML = "not a robot";
    }
}

function printSelectOptions() {
    let robotVal = document.getElementById("robot-check");
    console.log(robotVal.length);

    for (let i = 0; i < robotVal.length; i++) {
        console.log(robotVal[i].value);
        console.log(robotVal[i].text);
    }
}