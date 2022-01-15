const inputEl = document.querySelector('#font-size-control')
const textEl = document.querySelector('#text');
inputEl.addEventListener('input', onInputChange)
function onInputChange(event){
     const inputValue = event.currentTarget.value;
     textEl.style.fontSize = `${inputValue}px`;
}
