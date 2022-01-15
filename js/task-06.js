const inputEl = document.querySelector('#validation-input');
const lenthEl= inputEl.dataset.length;
inputEl.addEventListener('blur', onInputBlur)
function onInputBlur(event) {
    if (event.currentTarget.value.length == lenthEl) {
        event.currentTarget.classList.add('valid');
        event.currentTarget.classList.remove('invalid');
    }
    else {
         event.currentTarget.classList.remove('valid');
        event.currentTarget.classList.add('invalid');
    }
 }