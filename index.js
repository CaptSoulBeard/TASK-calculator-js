/**
 *
 * This function will be called when clicking on any button.
 * It's going to give you text as a parameter
 * This is your starting point
 * If you click on button 0, the text will be "0"
 * If you click on button +, the text will be "+"
 * ,... and so on
 */

let array = [];
let operator;
let firstNumber;
let secondNumber;

function buttonClick(text) {
  // if (!isNaN(text)) {
  //   printOnConsole(text);
  //   if (array.length < 2) {
  //     array.push(text);
  //     console.log(array);
  //     console.log(array.length);
  //   }
  // } else if (text === "AC") {
  //   printOnConsole(0);
  // } else if (text !== "AC" && isNaN(text)) {
  //   operator = text;
  //   console.log("Step 1");

  // printOnConsole(typeof text);

  if (Number(text)) {
    printOnConsole(text);
    array.push(text);
    firstNumber = array[0];
    secondNumber = array[1];

    console.log(array);
    console.log(`Your first number is: ${firstNumber}`);
    console.log(`Your second number is: ${secondNumber}`);
  } else if (
    text === "±" ||
    text === "%" ||
    text === "÷" ||
    text === "x" ||
    text === "-" ||
    text === "+"
  ) {
    operator = text;
    console.log(operator);
  } else if (text === "=") {
    if (operator === "±") {
      printOnConsole(``);
    } else if (operator === "%") {
      printOnConsole(``);
    } else if (operator === "÷") {
      result = firstNumber / secondNumber;
      printOnConsole(result);
    } else if (operator === "x") {
      printOnConsole(firstNumber * secondNumber);
    } else if (operator === "-") {
      printOnConsole(firstNumber - secondNumber);
    } else if (operator === "+") {
      printOnConsole(firstNumber + secondNumber);
    }
  } else if (text === "AC") {
    printOnConsole(0);
    array.splice(0, array.length);
    operator = undefined;
    console.log(array);
    console.log(operator);
  }
}

//   let result;
//   console.log("Length of array", array.length);
//   if (array.length > 1) {
//     if (operator === "+") {
//       console.log(array);
//       result = array[0] + array[1];

//       console.log("Step 3");
//     }
//   }
//   if (text === "=") {
//     printOnConsole(result);
//   }
// }

/** Supporting functions
 * 1. `printOnConsole(text)`, takes any text, and renders the console part of the web page
 * 2. `updateHistory(array)`, takes an array of strings and renders it on the web page
 */

// Remove Me after testing
printOnConsole("123");
updateHistory(["This is a sample history", "1 + 5 = 6", "5 x 10 = 50"]);
