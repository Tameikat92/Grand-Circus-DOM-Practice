

const submitButton = document.getElementById('submitBtn');
const outPutParagraph = document.getElementById('output')
const nameInput = document.getElementById('name');

submitButton.addEventListener('click', function(){
    const userName = nameInput.value;
    outPutParagraph.textContent = "Hello," + userName + '!';
});


