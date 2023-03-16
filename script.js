const previousOperandTextElement = document.querySelector(".previous-operand");
const currentOperandTextElement = document.querySelector(".current-operand");
const clearButton = document.getElementById("clear");
const deleteButton = document.getElementById("delete");
const changeSignButton = document.getElementById("change");
const multiplyButton = document.getElementById("multiply");
const subtractButton = document.getElementById("subtract");
const addButton = document.getElementById("add");
const divideButton = document.getElementById("divide");
const equalsButton = document.getElementById("equals");
const decimalButton = document.getElementById("decimal");
const numberButtons = document.querySelectorAll("[id^='one'], [id^='two'], [id^='three'], [id^='four'], [id^='five'], [id^='six'], [id^='seven'], [id^='eight'], [id^='nine'], [id^='zero']");

let currentOperand = "0";
let previousOperand = "";
let operation = undefined;

function updateDisplay() {
  currentOperandTextElement.innerText = currentOperand;
  previousOperandTextElement.innerText = previousOperand;
}

function appendNumber(number) {
  if (currentOperand === "0" && number !== ".") {
    currentOperand = number.toString();
  } else {
    currentOperand = currentOperand.toString() + number.toString();
  }
}

function chooseOperation(op) {
  if (currentOperand === "") return;
  if (previousOperand !== "") {
    compute();
  }
  operation = op;
  previousOperand = currentOperand;
  currentOperand = "";
}

function compute() {
  let computation;
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(current)) return;
  switch (operation) {
    case "+":
      computation = prev + current;
      break;
    case "-":
      computation = prev - current;
      break;
    case "*":
      computation = prev * current;
      break;
    case "÷":
      computation = prev / current;
      break;
    default:
      return;
  }
  currentOperand = computation;
  operation = undefined;
  previousOperand = "";
}

function clear() {
  currentOperand = "0";
  previousOperand = "";
  operation = undefined;
}

function deleteNumber() {
  currentOperand = currentOperand.toString().slice(0, -1);
}


function changeSign() {
  currentOperand = parseFloat(currentOperand) * -1;
}

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    appendNumber(button.innerText);
    updateDisplay();
  });
});

decimalButton.addEventListener("click", () => {
  appendNumber(".");
  updateDisplay();
});

clearButton.addEventListener("click", () => {
  clear();
  updateDisplay();
});

deleteButton.addEventListener("click", () => {
  deleteNumber();
  updateDisplay();
});

changeSignButton.addEventListener("click", () => {
  changeSign();
  updateDisplay();
});

addButton.addEventListener("click", () => {
  chooseOperation("+");
  updateDisplay();
});

subtractButton.addEventListener("click", () => {
  chooseOperation("-");
  updateDisplay();
});

multiplyButton.addEventListener("click", () => {
  chooseOperation("*");
  updateDisplay();
});

divideButton.addEventListener("click", () => {
  chooseOperation("÷");
  updateDisplay();
});

equalsButton.addEventListener("click", () => {
  compute();
  updateDisplay();
});
