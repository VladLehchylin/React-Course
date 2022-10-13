const accountSubmit = document.getElementById('acc-submit');
const confirmWindow = document.getElementById('confirm');
const windowCancel = document.getElementById('acc-cancel');
const email = document.getElementById('acc-email');
let windowText = document.getElementById('confirm-text');
const windowConfirm = document.getElementById('acc-confirm');
const account = document.querySelector('.account');
let accountGreetings = document.querySelector('.account__greetings');
const inputs = document.querySelector('.account__container');

accountSubmit.addEventListener('click', () => {
    confirmWindow.classList.add('block');
    windowText.innerText = `Please confirm account creation for ${email.value}`;
})

windowCancel.addEventListener('click', () => {
    confirmWindow.classList.remove('block');
})

windowConfirm.addEventListener('click', () => {
    confirmWindow.classList.remove('block');
    inputs.classList.add('hide');
    accountGreetings.innerText = `Hello, user with email ${email.value}`;
    account.classList.remove('hide');

})

