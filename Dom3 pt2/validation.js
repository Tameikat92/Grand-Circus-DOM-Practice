

const validationButton = document.getElementById('validateButton')
const emailInput = document.getElementById('email')
const emailOutputParagraph = document.getElementById('emailOut')

validationButton.addEventListener('click', function(){
    const userEmail = emailInput.value; 

    if (userEmail === ''){
        emailOutputParagraph.textContent = "Please enter email!";
    } else{
        emailOutputParagraph.textContent = 'Email entered' + userEmail;
    }



})