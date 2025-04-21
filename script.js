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

// Uma vez que os botões estão criados
// O próximo passo é configurar o funcionamento deles.

//----- BUTTON FUNCTIONS -----------

let numberButtons = document.querySelectorAll(".unit");
numberButtons.forEach(button => {
  button.addEventListener("click", () => {
    
  })
});













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

let number1 = 0;
let number2 = 0;
let operator = '';

function operate(operator, a, b){
  switch(operator){
    case '+':
      add(a,b);
      break;
    case '-':
      subtract(a,b);
      break;
    case '*':
      multiply(a,b);
      break;
    case '/':
      divide(a,b);
      break;
  }
}

// let displayNumber='';

// const display = document.querySelector("#display-content")
// display.textContent = ""

// const btn9 = document.querySelector("#button9");
// const btnAdd = document.querySelector("#add");
// const btnSub = document.querySelector("#subtract");
// const btnDivide = document.querySelector("#divide");
// const btnMultiply = document.querySelector("#multiply");
// const btnEqualSign = document.querySelector("#equal-sign");

//Number Saving Logic
let numbers = {
  a: null,
  b: null
}

function saveNumbers(numbers, number){
  if(!numbers.a){
    numbers.a = number;
  }
  else{
    numbers.b = number;
  }
}







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
