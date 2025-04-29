const upperNumbers = document.querySelector(".upper-numbers");
const middleNumbers = document.querySelector(".middle-numbers");
const bottomNumbers = document.querySelector(".bottom-numbers");
const number0AndDot = document.querySelector(".number0-dot");
//Creating Buttons
function createNumberButtons(){
  //There are 11 numbers in the numbers section
  for(let i=0; i<11; i++){
    let numberBtn = document.createElement("button");
    numberBtn.id = `button${i}`;
    numberBtn.classList.add("number");
    numberBtn.classList.add("unit");
    if(i==0){
      numberBtn.classList.replace("number", "number0");
      numberBtn.textContent = '0';
      number0AndDot.appendChild(numberBtn);
    } 
    else if(i < 4){
      numberBtn.textContent = `${i}`;
      bottomNumbers.appendChild(numberBtn);
    } 
    else if(i < 7){
      numberBtn.textContent = `${i}`;
      middleNumbers.appendChild(numberBtn);
    } 
    else if(i < 10){
      numberBtn.textContent = `${i}`;
      upperNumbers.appendChild(numberBtn);
    }
    else {
      numberBtn.classList.replace("number", "number-dot");
      numberBtn.textContent = '.';
      number0AndDot.appendChild(numberBtn);
    }
      
  }

}
createNumberButtons();

// Once the buttons are created
// The next step is to set their listeners.

let displayNumber='';

const display = document.querySelector("#display-content");
display.textContent = "0";
//----- BUTTON FUNCTIONS -----------

//Create the numbers for the display
let numberButtons = document.querySelectorAll(".number");
numberButtons.forEach(button => {
  button.addEventListener("click", () => {
    if(flagEqualNumberPath){
      numbers.accumulator = null;
      numbers.currentNumber = null;
      flagEqualNumberPath = false;
    }
    displayNumber += button.textContent;
    display.textContent = displayNumber;
  })
});

let number0Button = document.querySelector(".number0");
number0Button.addEventListener("click", () => {
  if(displayNumber && displayNumber!='0'){
    displayNumber += number0Button.textContent;
    display.textContent = displayNumber;
  }
  else{
    display.textContent = '0';
    displayNumber = '';
  }
})

//-------- OPERATORS FUNCTIONS ---------------
let operator = '';
const btnAdd = document.querySelector("#add");
const btnSub = document.querySelector("#subtract");
const btnDivide = document.querySelector("#divide");
const btnMultiply = document.querySelector("#multiply");
const btnEqualSign = document.querySelector("#equal-sign");


//Number Saving Logic
let numbers = {
  accumulator: null,
  currentNumber: null
}

function saveNumbers(numbers, number){
  //Turn number from a string into a int/float
  number = +number;
  if(!numbers.accumulator){
    numbers.accumulator = number;
  }
  else{
    numbers.currentNumber = number;
  }
}
//Operations

function add(a, b) {
  return a + b;
}
function subtract(a, b){
  return a - b;
}
function multiply(a, b){
  return a * b;
}
function divide(a, b){
  return a / b;
}

function operate(operator, a, b){
  //Turn the strings into numbers so it work inside the operations functions

  switch(operator){
    case '+':
      return add(a,b);
      break;
    case '-':
      return subtract(a,b);
      break;
    case '*':
      return multiply(a,b);
      break;
    case '/':
      return divide(a,b);
      break;
  }
}

let flagPressedMoreThanOnce = false;
btnAdd.addEventListener("click", () =>{
  operator = '+';
  saveNumbers(numbers, displayNumber);
  
  //Path N+N+
  if(numbers.currentNumber){
    numbers.accumulator = operate(operator, numbers.accumulator, numbers.currentNumber);
    display.textContent = numbers.accumulator;
  }
  //Path N++(That makes currentNumber empty)
  else if(!numbers.currentNumber && flagPressedMoreThanOnce){
    numbers.accumulator += numbers.accumulator;
    display.textContent = numbers.accumulator;
  }

  if(!numbers.currentNumber){
    flagPressedMoreThanOnce = true;
  }

  displayNumber = '';
  flagEqualNumberPath = false;
}
  

)

let flagEqualNumberPath = false;
btnEqualSign.addEventListener("click", ()=> {
  flagEqualNumberPath = true;
  saveNumbers(numbers, displayNumber);
  if(flagPressedMoreThanOnce && !numbers.currentNumber){
    //Depende da operação
    numbers.accumulator += numbers.accumulator;
    display.textContent = numbers.accumulator;
  }
  
  numbers.accumulator = operate(operator, numbers.accumulator, numbers.currentNumber);
  display.textContent = numbers.accumulator;
  displayNumber = "";
  flagPressedMoreThanOnce = false;
})

//-------- AUXILARY OPERATOS FUNCTIONS -------------
const btnClear = document.querySelector("#buttonClear");
btnClear.addEventListener("click", () =>{
  display.textContent = '0';
  displayNumber = '';
  numbers.accumulator = null;
  numbers.currentNumber = null;
  flagPressedMoreThanOnce = false;
  flagEqualNumberPath = false;
})














// const btn9 = document.querySelector("#button9");









// btn0.addEventListener("click", (e) =>{
//   displayNumber += '0';
//   display.textContent = displayNumber;
// })
// btn1.addEventListener("click", (e) =>{
//   displayNumber += '1';
//   display.textContent = displayNumber;
// })
// btn2.addEventListener("click", (e) =>{
//   displayNumber += '2';
//   display.textContent = displayNumber;
// })
// btn3.addEventListener("click", (e) =>{
//   displayNumber += '3';
//   display.textContent = displayNumber;
// })
// btn4.addEventListener("click", (e) => {
//   displayNumber += '4';
//   display.textContent = displayNumber;
// })
// btn5.addEventListener("click", (e) =>{
//   displayNumber += '5';
//   display.textContent = displayNumber;
// })
// btn6.addEventListener("click", (e) =>{
//   displayNumber += '6';
//   display.textContent = displayNumber;
// })
// btn7.addEventListener("click", (e) =>{
//   displayNumber += '7';
//   display.textContent = displayNumber;
// })
// btn8.addEventListener("click", (e) =>{
//   displayNumber += '8';
//   display.textContent = displayNumber;
// })
// btn9.addEventListener("click", (e) =>{
//   displayNumber += '9';
//   display.textContent = displayNumber;
// })


// // +
// // -clean no display


// btnAdd.addEventListener("click", (e) => {
//   saveNumbers(numbers, displayNumber);
//   operator = '+';
  
  
// })

// btnEqualSign.addEventListener("click", (e) => {
//   operate(operator, displayNumber, )
// })
