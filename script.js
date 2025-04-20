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

let displayNumber = 0;

const display = document.querySelector("#display-content")
display.textContent = "banana"
const btn0 = document.querySelector("#button0");
const btn1 = document.querySelector("#button1");
const btn2 = document.querySelector("#button2");
const btn3 = document.querySelector("#button3");
const btn4 = document.querySelector("#button4");
const btn5 = document.querySelector("#button5");
const btn6 = document.querySelector("#button6");
const btn7 = document.querySelector("#button7");
const btn8 = document.querySelector("#button8");
const btn9 = document.querySelector("#button9");
const btnAdd = document.querySelector("#add");
const btnSub = document.querySelector("#subtract");
const btnDivide = document.querySelector("#divide");
const btnMultiply = document.querySelector("#multiply");
//Buttons Listeners
btn0.addEventListener("click", (e) =>{
  displayNumber = 0;
  display.textContent = displayNumber;
})
btn1.addEventListener("click", (e) =>{
  displayNumber = 1;
  display.textContent = displayNumber;
})
btn2.addEventListener("click", (e) =>{
  displayNumber = 2;
  display.textContent = displayNumber;
})
btn3.addEventListener("click", (e) =>{
  displayNumber = 3;
  display.textContent = displayNumber;
})
btn4.addEventListener("click", (e) => {
  displayNumber = 4;
  display.textContent = displayNumber;
})
btn5.addEventListener("click", (e) =>{
  displayNumber = 5;
  display.textContent = displayNumber;
})
btn6.addEventListener("click", (e) =>{
  displayNumber = 6;
  display.textContent = displayNumber;
})
btn7.addEventListener("click", (e) =>{
  displayNumber = 7;
  display.textContent = displayNumber;
})
btn8.addEventListener("click", (e) =>{
  displayNumber = 8;
  display.textContent = displayNumber;
})
btn9.addEventListener("click", (e) =>{
  displayNumber = 9;
  display.textContent = displayNumber;
})

