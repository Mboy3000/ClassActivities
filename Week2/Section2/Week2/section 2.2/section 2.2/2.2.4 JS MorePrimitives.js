// Create five variables and assign them values
let VarOne = "string";
let VarTwo = true;
let VarThree = 10;
let VarFour = undefined;
let VarFive = null;

// Each variable should reference a different primitive data type
// REMEMBER: you should never DELIBERATELY assign "undefined" to a variable

// Print the type of each variable in this order: string, number, boolean, undefined, null
console.log(typeof VarOne, typeof VarThree, typeof VarTwo, typeof VarFour, typeof VarFive);

// Create a variable that references a template literal
// Inside the template literal, use two of the above variables
const template = `VarOne: ${VarOne}, VarThree: ${VarThree}`;

// Reassign the value of the variable that references "null"
VarFive = "new value";

// Print the value and its type
console.log(VarFive, typeof VarFive);

// Print a variable that causes a ReferenceError
// console.log(nonExistentVariable);

// Alter the previous line to no longer cause a ReferenceError
let nonExistentVariable;
console.log(nonExistentVariable);
