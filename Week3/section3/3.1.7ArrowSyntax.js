// Refactored functions using arrow function syntax

// Refactored myNumberFunction
const myNumberFunction = () => ((2 ** 2 + 3) % 4) * 14;

// Refactored greet function
const greet = (name) => `Hello, ${name}`;

// Refactored timeOfDayGreet function
const timeOfDayGreet = (name, timeOfDay) => `Hello, ${name}, good ${timeOfDay}`;

// Refactored tripleAndHalf function
const tripleAndHalf = (num) => {
  let triple = num * 3;
  return triple / 2;
};

// Refactored sumTwoNumbers function
const sumTwoNumbers = (num1, num2) => {
  let sum = num1 + num2;
  console.log(`The sum of your numbers is ${sum}.`);
  return sum;
};
