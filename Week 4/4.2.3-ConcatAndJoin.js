const arrOne = ["a", [0], "b"];
const arrTwo = [1, 2, "c", ["d", 3]];

// Concatenate arrTwo, 4, and "e" to arrOne and save the resulting array to a variable
const mergedArray = arrOne.concat(arrTwo, 4, "e");

// Print the new, merged array
console.log(mergedArray); // Output: ["a", [0], "b", 1, 2, "c", ["d", 3], 4, "e"]

// Join the merged array and print the result
const joinedArray = mergedArray.join(", ");
console.log(joinedArray); // Output: "a, 0, b, 1, 2, c, d, 3, 4, e"
