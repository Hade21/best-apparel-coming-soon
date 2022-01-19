const warning = document.querySelector('#error');
const errorMsg = document.querySelector('.error-message');

function validasi(email) {
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value.match(mailformat)) {
        return true;
    } else {
        errorMsg.innerHTML = 'Please provide a valid email';
        warning.style.display = 'block';
        console.log(warning.style.display);
        return false;
    }
}