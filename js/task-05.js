const inputEl = document.querySelector('#name-input');
const currentInputEl = document.querySelector('span#name-output')
inputEl.addEventListener('input', onInputChange);
function onInputChange(event){
    if (event.currentTarget.value === '') {
        currentInputEl.textContent = "Anonymous";
    }
    else {
       currentInputEl.textContent = event.currentTarget.value;
    }
}