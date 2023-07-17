// "regular" functions
function greet(name) {
    return `Hello ${name}!`;
  }
  
  function welcome(name) {
    return `${name}, welcome!`;
  }
  
  function informAboutSale(name) {
    return `${name}, we're having a sale!`;
  }
  
  // Function that takes a callback function as an argument
  function getNameAndShowMessage(callback) {
    const name = prompt("Please Enter Your Name: ");
    alert(callback(name));
  }
  
  // Pass each "regular" function into getNameAndShowMessage as a callback function
  getNameAndShowMessage(greet);
  getNameAndShowMessage(welcome);
  getNameAndShowMessage(informAboutSale);
  