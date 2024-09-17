

const userForm = document.getElementById('userForm');
const userNameInput = document.getElementById('username');
const passWordInput = document.getElementById('password');
const formOutput = document.getElementById('formOutput');

console.log("Script Loaded: " + new Date().toDateString());

userForm.addEventListener('submit', function(event){

event.preventDefault(); // dont do default behavior when page refreshes

const enterUsername = userNameInput.value;
const enteredPassword = passWordInput.value;

formOutput.textContent = "Username:" + enterUsername + 'Password' + enteredPassword;
});



