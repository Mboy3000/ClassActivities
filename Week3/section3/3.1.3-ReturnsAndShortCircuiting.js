// Function that returns a value
function myNumberFunction() {
  let num = 2 ** 2;
  num = num + 3;
  num = num % 4;
  num = num * 14;
  return num;
}

// Change the function above to return a value

// Short Circuiting
// The console.log will not print
function shortCircuitFunction() {
  return "Zap! - Short Circuited!";
  console.log(
    "This will never print because it is after the return statement."
  );
}

// Will the following function short circuit?
let height = 50;
function checkCircusRides() {
  height < 48 && console.log("Take a ride on the carousel!");
  height < 60 && console.log("Try the bumper cars!");
  console.log("Enjoy the roller coaster!");
}

// Change the function above to use short circuiting