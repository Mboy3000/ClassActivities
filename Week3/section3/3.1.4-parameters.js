// Named Parameters
// Write a function that takes two named parameters:
// Print each named parameter,
// Then return the parameters added together

function addNamedParameters({ num1, num2 }) {
    console.log("num1:", num1);
    console.log("num2:", num2);
    return num1 + num2;
  }
  
  // Invoke the function and pass in two numbers
  const result1 = addNamedParameters({ num1: 5, num2: 10 });
  console.log("Result 1:", result1); // Output: 15
  
  // Invoke the function and pass in more than two numbers
  const result2 = addNamedParameters({ num1: 3, num2: 7, num3: 12 });
  console.log("Result 2:", result2); // Output: NaN (num3 is not defined)
  
  // Invoke the function and pass in only one number
  const result3 = addNamedParameters({ num1: 8 });
  console.log("Result 3:", result3); // Output: NaN (num2 is not defined)
  
  // Change the function to set default values for the parameters
  function addNamedParametersWithDefaults({ num1 = 0, num2 = 0 }) {
    console.log("num1:", num1);
    console.log("num2:", num2);
    return num1 + num2;
  }
  
  // Again, invoke the function and pass in only one number
  const result4 = addNamedParametersWithDefaults({ num1: 8 });
  console.log("Result 4:", result4); // Output: 8 (num2 is set to default value 0)
  
  // Rest Operator
  // Add a rest operator to the function's parameters
  // Add a line to the function's body to print the value of the rest operator
  
  function addWithRestOperator({ num1 = 0, num2 = 0, ...rest }) {
    console.log("num1:", num1);
    console.log("num2:", num2);
    console.log("Rest of the parameters:", rest);
    return num1 + num2;
  }
  
  // Again, invoke the function and pass in more than two numbers
  const result5 = addWithRestOperator({ num1: 2, num2: 3, num3: 4, num4: 5 });
  console.log("Result 5:", result5); // Output: 5 (num1 + num2 = 2 + 3)
  
  // Note: The rest operator collects any additional named parameters into an object named 'rest'.
  