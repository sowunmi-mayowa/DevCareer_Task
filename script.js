const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.getElementById("confirm-password");
const button = document.querySelector("#submit");
const parentMsg = document.querySelector(".msg")
const inputField = document.querySelectorAll(".form-control")

button.addEventListener('click', formValidation);

function formValidation(e){
    e.preventDefault();
    if(firstName.value =="" || lastName.value =="" || email.value =="" || password=="" || confirmPassword ==""){
        let msgElem = document.createElement("div");
        msgElem.textContent = "All Fields Are Mandatory!...";
        msgElem.classList.add("alert-danger","text-center");
        inputField[0].classList.add("border-danger");
        inputField[1].classList.add("border-danger");
        inputField[2].classList.add("border-danger");
        inputField[3].classList.add("border-danger");
        inputField[4].classList.add("border-danger");
        parentMsg.appendChild(msgElem);
        setTimeout(() => msgElem.remove(), 3000);
        setTimeout(() => inputField[0].classList.remove("border-danger"), 3000);
        setTimeout(() => inputField[1].classList.remove("border-danger"), 3000);
        setTimeout(() => inputField[2].classList.remove("border-danger"), 3000);
        setTimeout(() => inputField[3].classList.remove("border-danger"), 3000);
        setTimeout(() => inputField[4].classList.remove("border-danger"), 3000);
    }
    else if(password.value=== "" && confirmPassword.value ===""){
        let msgElem = document.createElement("div");
        msgElem.textContent = "passwords are required!...";
        msgElem.classList.add("alert-danger", "text-center");
        inputField[3].classList.add("border-danger");
        inputField[4].classList.add("border-danger");
        parentMsg.appendChild(msgElem);
        setTimeout(() => msgElem.remove(), 3000);
        setTimeout(() => inputField[3].classList.remove("border-danger"), 3000);
        setTimeout(() => inputField[4].classList.remove("border-danger"), 3000);
    }
    else if(password.value !== confirmPassword.value){
        let msgElem = document.createElement("div");
        msgElem.textContent = "Password Mismatch.. Try Again!";
        msgElem.classList.add("alert-warning", "text-center");
        parentMsg.appendChild(msgElem)
        setTimeout(() => msgElem.remove(), 5000)
    }
    else if(password.value.length < 8 && confirmPassword.value.length < 8){
        let msgElem = document.createElement("div");
        msgElem.textContent = "passwords should contain more than 8 character";
        msgElem.classList.add("alert-danger", "text-center");
        inputField[3].classList.add("border-danger");
        inputField[4].classList.add("border-danger");
        parentMsg.appendChild(msgElem);
        setTimeout(() => msgElem.remove(), 3000);
        setTimeout(() => inputField[3].classList.remove("border-danger"), 3000);
        setTimeout(() => inputField[4].classList.remove("border-danger"), 3000);
    }
    else if(email.checkValidity() === false){
        let msgElem = document.createElement("div");
        msgElem.textContent = "The email entered is not valid";
        msgElem.classList.add("alert-danger", "text-center");
        inputField[2].classList.add("border-danger");
        parentMsg.appendChild(msgElem);
        setTimeout(() => msgElem.remove(), 3000);
        setTimeout(() => inputField[2].classList.remove("border-danger"), 3000);
    }
    else{
        let msgElem = document.createElement("div");
        msgElem.textContent = "Your Account Has Been Created Successfully...";
        msgElem.classList.add("alert-success", "text-center");
        parentMsg.appendChild(msgElem)
        setTimeout(() => msgElem.remove(), 5000)
        inputField[0].classList.add("border-success");
        inputField[1].classList.add("border-success");
        inputField[2].classList.add("border-success");
        inputField[3].classList.add("border-success");
        inputField[4].classList.add("border-success");
        parentMsg.appendChild(msgElem);
        setTimeout(() => msgElem.remove(), 3000);
        setTimeout(() => inputField[0].classList.remove("border-success"), 3000);
        setTimeout(() => inputField[1].classList.remove("border-success"), 3000);
        setTimeout(() => inputField[2].classList.remove("border-success"), 3000);
        setTimeout(() => inputField[3].classList.remove("border-success"), 3000);
        setTimeout(() => inputField[4].classList.remove("border-success"), 3000);
    }
}