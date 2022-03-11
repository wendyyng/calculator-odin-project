let numbers = document.querySelectorAll('[data-number]');
let operators = document.querySelectorAll('[data-operator]')
let currentDisplayNumber = document.querySelector('[data-current-number]');
let previousDisplayNumber = document.querySelector('[data-previous-number]');
let allClearButton = document.querySelector('[data-all-clear]');
let clearButton = document.querySelector('[data-clear]');
let equalButton = document.querySelector('[data-equal]');
let currentNumber = '';
let previousNumber = '';
let operator = '';

numbers.forEach(button => {
    button.addEventListener('click', () => {
      currentDisplayNumber.innerHTML = currentDisplayNumber.innerHTML + button.innerHTML;
      currentNumber = parseInt(currentDisplayNumber.innerText);
    })
})

operators.forEach(button => {
  button.addEventListener('click', () =>{
    if(isNaN(previousDisplayNumber.innerHTML.slice(-1)) 
    && currentDisplayNumber.innerHTML === '') return
    if(operator === ''){
      previousDisplayNumber.innerHTML = `${currentDisplayNumber.innerHTML} ${button.innerHTML}`;
      currentDisplayNumber.innerHTML = '';
      calculator();
      previousNumber = currentNumber;
      currentNumber = '';
      operator = button.innerHTML;
      
    }else if (operator !== ''){
      calculator();
      previousDisplayNumber.innerHTML = `${currentNumber} ${button.innerHTML}`;
      currentDisplayNumber.innerHTML = '';
      previousNumber = currentNumber;
      currentNumber = '';
      operator = button.innerHTML;
    }
    
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

//calculator function
function calculator(){
  if(previousNumber === '' && currentNumber === '') return
  switch(operator){
    case '÷':
      currentNumber = previousNumber / currentNumber;
      break;
    case '+':
      currentNumber = previousNumber + currentNumber;
      break;
    case '-':
      currentNumber = previousNumber - currentNumber;
      break;
    case 'x':
      currentNumber = previousNumber * currentNumber;
      break;
    default:
      return
  }
  previousNumber = '';
  operator = '';
}

allClearButton.addEventListener('click', () => {
  clearAll();
})

clearButton.addEventListener('click', () => {
  clear();
})

equalButton.addEventListener('click', () => {
  calculator();
  currentDisplayNumber.innerText = currentNumber;
  previousDisplayNumber.innerText = '';
})
