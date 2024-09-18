let inputNum = "";
let firstNum = null;
let operator = null;

function calculate(operation, num1, num2) {
  switch (operation) {
    case "÷":
      if (num2 === 0) {
        return "Cannot divide by zero";
      }
      return num1 / num2;
    case "x":
      return num1 * num2;
    case "-":
      return num1 - num2;
    case "+":
      return num1 + num2;
    default:
      return "Invalid operation";
  }
}

// console.log(calculate("+", 1, 1));

//ties the above function to the equals button via the html id, and runs once it is clicked via the 'addEventListener(click)'
document.getElementById("equals").addEventListener(click, function () {
  const secondNum = parseFloat(inputField.value);
  //we are storing the second number after clicking the equals button
  //we use parseFloat because it converts the string to a number (any value in input field are automatically a string)
  //inputField.value pulls the number we've inputted in the input field
  let result = calculate(operator, firstNum, secondNum);
  inputField.value = result;
  //this prints the result to the inputfield
  //.value represent what the user sees in the inputfield, so in this case it prints the result back into the inputField
});
