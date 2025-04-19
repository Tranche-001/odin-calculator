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

console.log(add(2,3))
console.log(subtract(2,3))
console.log(multiply(2,3))
console.log(divide(2,3))