// 1) Create a variable to represent the current number
let currentNumber = 1;

// 2) Create a variable to represent the current total
let currentTotal = 0;

// 3) Write a while loop that sums the numbers from 1 to 100
while (currentNumber <= 100) {
  currentTotal += currentNumber;
  currentNumber++;
}

console.log("Total using while loop:", currentTotal);


// Now using the same variables you created in steps 1 and 2, create a **for** loops that TOTALS the numbers from 1 to 100

// 1) write a for loop that sums the numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    currentTotal += i;
  }
  
  console.log("Total using for loop:", currentTotal);

  //Total using while loop: 5050
//Total using for loop: 5050