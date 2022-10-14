const MIN_PASS_LENGTH = 6;

const loginForm = document.querySelector('.login');
const email = document.querySelector('#login-email');
const password = document.querySelector('#login-password');
const loginSubmit = document.querySelector('#login-submit');
const dialog = document.querySelector('.dialog');
const dialogCancel = document.querySelector('#dialog-cancel');
const dialogConfirm = document.querySelector('#dialog-confirm');
const account = document.querySelector('.account');
const errorEmail = document.querySelector('#error-email');
const errorPassword = document.querySelector('#error-pass');

let dialogText = document.querySelector('.dialog__text');
let accountGreetings = document.querySelector('.account__greetings');

let checkEmail = email => {
    if(email.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
        return true;
    }
    errorEmail.classList.remove('hidden');
    return false;
};

let checkPass = pass => {
    if(pass.value.length >= MIN_PASS_LENGTH) {
        return true
    }

    errorPassword.classList.remove('hidden');
    return false;
};

loginSubmit.addEventListener('click', () => {
    let validEmail;
    let validPass;
    
    if(checkEmail(email)) {
        validEmail = true;
        errorEmail.classList.add('hidden');
    } else {
        errorEmail.classList.remove('hidden');
    }

    if(checkPass(password)) {
        validPass = true;
        errorPassword.classList.add('hidden');
    } else {
        errorPassword.classList.remove('hidden');
    }

    if(validPass && validEmail) {
        errorEmail.classList.add('hidden');
        errorPassword.classList.add('hidden');
        dialog.classList.remove('hide');
        dialogText.innerText = `Please confirm account creation for ${email.value}`;
    }
})

dialogCancel.addEventListener('click', () => {
    dialog.classList.add('hide');
})

dialogConfirm.addEventListener('click', () => {
    dialog.classList.add('hide');
    loginForm.classList.add('hide');
    accountGreetings.innerText = `Hello, user with email ${email.value}`;
    account.classList.remove('hide');
})