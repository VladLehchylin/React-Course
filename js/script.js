const loginForm = document.querySelector('.login');
const email = document.querySelector('#login-email');
const password = document.querySelector('#login-password');
const loginSubmit = document.querySelector('#login-submit');
const dialog = document.querySelector('.dialog');
const dialogCancel = document.querySelector('#dialog-cancel');
const dialogConfirm = document.querySelector('#dialog-confirm');
const account = document.querySelector('.account');

let dialogText = document.querySelector('.dialog__text');
let accountGreetings = document.querySelector('.account__greetings');

loginSubmit.addEventListener('click', () => {
    dialog.classList.remove('hide');
    dialogText.innerText = `Please confirm account creation for ${email.value}`;
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

