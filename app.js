

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("pass");
const passwordCheck = document.getElementById("passcheck");

form.addEventListener("submit" ,function(e){
    e.preventDefault();
    checkInputs();

});

function checkInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const passwordCheckValue = passwordCheck.value.trim();

    if(usernameValue === "") {
        setError(username, "username cannot be empty");
    }else {
        setSuccess(username);
    }
    
    if(emailValue === "") {
        setError(email,"email cannot be empty");
    }else if(!isEmail(emailValue)) {
        setError(email,"email cannot be valid");

    }else {
        setSuccess(email);
    }

    if(passwordValue === "") {
        setError(password,"password cannot be empty");
    }else {
        setSuccess(password);
    }

    if(passwordCheckValue === "") {
        setError(passwordCheck, "password check cannot be empty");
    } else if (passwordValue !== passwordCheckValue) {
        setError(passwordCheck, "password does not match!")
    } else {
        setSuccess(passwordCheck);
    }

}

function setError(input,message) {
    const controlForm = input.parentElement;
    const small = controlForm.querySelector(".error");
    controlForm.className = "control-form fail";
    small.innerText = message;
}

function setSuccess(input) {
    const controlForm = input.parentElement;
    controlForm.className = "control-form sucess"
}

function isEmail(email) {
    return /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;
}