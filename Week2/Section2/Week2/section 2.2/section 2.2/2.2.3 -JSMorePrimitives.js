// Create a variable "timeOfDay" and assign it a string
const timeOfDay = "morning";

// Create a variable "greeting" that references a template literal
const greeting = `Good ${timeOfDay}!`;

// Use "timeOfDay" in the template literal to create a message like "Good morning!" or "Good evening!"
console.log(greeting);

// Create a new variable, but do not assign it a value
let newVariable;

// Print the new variable and its type
console.log(newVariable);
console.log(typeof newVariable);
// What type should we expect?
// We should expect the type to be "undefined" since we declared but didn't assign any value.

// Assign the variable a value that indicates the variable is purposely blank
newVariable = null;
// What value should we assign?
// We can assign `null` to indicate that the variable is purposely blank.

// Print the variable and its type again
console.log(newVariable);
console.log(typeof newVariable);
// What type should we expect?
// We should expect the type to be "object" since `null` is a primitive value of type object.

// Try to print a variable that does not exist
// What should we expect to print in the CLI?
// We should expect to see "undefined" printed in the CLI for an undeclared variable.

// Print "greeting" again
console.log(greeting);
// Will this line run?
// Yes, this line will run, and it will print the value of the "greeting" variable which is "Good morning!" based on the initial value of "timeOfDay".