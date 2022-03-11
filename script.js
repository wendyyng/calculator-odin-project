const numbers = document.querySelectorAll('[data-number]');
const operators = document.querySelectorAll('[data-operator]')
const currentDisplayNumber = document.querySelector('[data-current-number]');
const previousDisplayNumber = document.querySelector('[data-previous-number]');
const allClearButton = document.querySelector('[data-all-clear]');
const clearButton = document.querySelector('[data-clear]');
const equalButton = document.querySelector('[data-equal]');
const percentageButton = document.querySelector('[data-percentage]');
let currentNumber = '';
let previousNumber = '';
let operator = '';

//Number Buttons
numbers.forEach(button => {
    button.addEventListener('click', () => {
      if (currentDisplayNumber.innerHTML === "0"){
        currentDisplayNumber.innerHTML = button.innerHTML;
        currentNumber = parseFloat(button.innerHTML);
        return;
      }
      currentDisplayNumber.innerHTML = currentDisplayNumber.innerHTML + button.innerHTML;
      currentNumber = parseInt(currentDisplayNumber.innerText);
      console.log(currentNumber)
      console.log(typeof(currentNumber))
    })
})
//Operator Buttons
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

//Calculator Function
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

//Percentage Button
percentageButton.addEventListener('click', () => {
  if(currentNumber === 0) return;
  currentNumber = currentNumber * 0.01;
  currentDisplayNumber.innerHTML = currentNumber;
})

//All Clear Button
allClearButton.addEventListener('click', () => {
  clearAll();
})

//Clear Button
clearButton.addEventListener('click', () => {
  clear();
})

//Equal Button
equalButton.addEventListener('click', () => {
  calculator();
  currentDisplayNumber.innerText = currentNumber;
  previousDisplayNumber.innerText = '';
})
