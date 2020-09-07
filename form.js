console.log('This is form.js');
//grab the validation content
let name = document.getElementById('inputUsername');
let email = document.getElementById('inputEmail');
let phone = document.getElementById('inputPhone');
let ticketId = document.getElementById('ticketId');
//set the default statement for valid username, email & phone no.
let validUsername = false;
let validEmail = false;
let validPhone = false;
let validTicketId = false;
console.log(name, email, phone);
//add event listeners for the validation content
name.addEventListener('blur', () => {
    let regExp = /^[a-zA-Z]([0-9a-zA-z]){2,10}$/;
    let str = name.value;
    if (regExp.test(str)) {
        console.log('It matched');
        validUsername = true;
        name.classList.remove('is-invalid')
        name.classList.add('is-valid')
    } else {
        console.log("No match");
        validUsername = false;
        name.classList.add('is-invalid')
        name.classList.remove('is-valid')
    }
});
email.addEventListener('blur', () => {
    regExp = /^([a-zA-Z0-9\-\_]+)@([a-zA-Z0-9\-\_]+)\.([a-zA-Z0-9]){2,5}$/;
    let str = email.value;
    if (regExp.test(str)) {
        console.log('It matched');
        validEmail = true;
        email.classList.remove('is-invalid')
        email.classList.add('is-valid')
    } else {
        console.log("No match");
        validEmail = false;
        email.classList.add('is-invalid')
        email.classList.remove('is-valid')
    }
});
phone.addEventListener('blur', () => {
    let regExp = /^01([0-9]){9}$/;
    let str = phone.value;
    if (regExp.test(str)) {
        console.log('It matched');
        validPhone = true;
        phone.classList.remove('is-invalid')
        phone.classList.add('is-valid')
    } else {
        console.log("No match");
        validPhone = false;
        phone.classList.add('is-invalid')
        phone.classList.remove('is-valid')
    }
});
ticketId.addEventListener('blur', () => {
    let regExp = /^([0-9a-zA-Z]){10}$/;
    let str = ticketId.value;
    if (regExp.test(str)) {
        console.log('It matched');
        validTicketId = true;
        ticketId.classList.remove('is-invalid')
        ticketId.classList.add('is-valid')
    } else {
        console.log("No match");
        validTicketId = false;
        ticketId.classList.add('is-invalid')
        ticketId.classList.remove('is-valid')
    }
});
//grab the submit button
let submit = document.getElementById('submitBtn');
//add event listener for submit button
submit.addEventListener('click', (e)=>{
    let success = document.getElementById('success');
    let failure = document.getElementById('failure');
    let form = document.getElementById('bookingForm')
    e.preventDefault();
    console.log('you clicked submit button');
    if(validUsername && validEmail && validPhone && validTicketId){
       console.log('All valid');
       success.classList.add('show');
       success.classList.remove('d-none');
       failure.classList.add('d-none');
       failure.classList.remove('show');
       form.reset();
    }
    else {
        console.log('Not valid');
        failure.classList.add('show')
        failure.classList.remove('d-none')
        success.classList.add('d-none')
        success.classList.remove('show')
    }
})