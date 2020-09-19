const form = document.querySelector(".Contact__form");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const messageTextAreaInput = document.getElementById("message");

form.addEventListener("submit" , (event)=> 
{
    event.preventDefault();

    let name = nameInput.value;
    let email = emailInput.value;
    let phoneNumber = phoneInput.value;
    let message = phoneInput.value;

    let formValues = {
        name,
        email,
        phoneNumber,
        message,
    }

    console.log(formValues);
    
})