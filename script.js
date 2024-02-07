const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm_password");
const passwordAlert = document.querySelector(".pass-unmatch")
const formSubmit = document.querySelector("form");


formSubmit.addEventListener('submit', (event)=>{
    
    if (password.value != confirmPassword.value){
        showError();
        event.preventDefault();
    }
});

function showError() {
    passwordAlert.textContent = "Password didn't match"
}