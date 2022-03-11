let numbers = document.querySelectorAll('[data-number]');
let operators = document.querySelectorAll('[data-operator]')
let currentDisplayNumber = document.querySelector('[data-current-number]');
let previousDisplayNumber = document.querySelector('[data-previous-number]');
let allClearButton = document.querySelector('[data-all-clear]');
let clearButton = document.querySelector('[data-clear]');
let currentNumber = '';
let previousNumber = '';

numbers.forEach(button => {
    button.addEventListener('click', () => {
      currentDisplayNumber.innerHTML = currentDisplayNumber.innerHTML + button.innerHTML;
    
    })
})

operators.forEach(button => {
  button.addEventListener('click', () =>{
    if(isNaN(previousDisplayNumber.innerHTML.slice(-1)) && currentDisplayNumber.innerHTML === '') return
    previousDisplayNumber.innerHTML = `${previousDisplayNumber.innerHTML} ${currentDisplayNumber.innerHTML} ${button.innerHTML}`;
    currentDisplayNumber.innerHTML = '';
  })
})

function clearAll(){
  currentDisplayNumber.innerText = '';
  previousDisplayNumber.innerText = '';
  currentNumber = '';
  previousNumber = '';

}
function clear(){
  currentDisplayNumber.innerText = currentDisplayNumber.innerText.slice(0, -1);
}

allClearButton.addEventListener('click', () => {
  clearAll();
})

clearButton.addEventListener('click', () => {
  clear();
})