const arr = ["a", "a", "b", "a", "c", "b", "a", "b", "b", "c", "c", "c"];

// Find the first index of "a", "b", and "c"
const firstIndexOfA = arr.indexOf("a");
const firstIndexOfB = arr.indexOf("b");
const firstIndexOfC = arr.indexOf("c");

// Find the last index of "a", "b", and "c"
const lastIndexOfA = arr.lastIndexOf("a");
const lastIndexOfB = arr.lastIndexOf("b");
const lastIndexOfC = arr.lastIndexOf("c");

// If the first index and last index of "a" is not the same, remove the last instance
// Repeat until there is just one "a"
while (firstIndexOfA !== lastIndexOfA) {
  arr.splice(lastIndexOfA, 1);
}

console.log(arr); // Output: ["a", "a", "b", "a", "c", "b", "b", "c", "c", "c"]
