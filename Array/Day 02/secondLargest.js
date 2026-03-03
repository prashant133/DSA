// // Write a function that returns the second largest distinct element in an unsorted integer array.

// // Example
// // Input: [10, 5, 20, 8];
// // Output: 10;

// // Example
// // Input: [10, 20, 20, 8];
// // Output: 10;

// const arr = [10, 5, 20, 8];

// function secondLargest(arr) {
//   if (arr.length <= 1) return null;

//   let largest = -Infinity;
//   let secondLargest = -Infinity;

//   for (let num of arr) {
//     if (num > largest) {
//       secondLargest = largest;
//       largest = num;
//     } else if (num > secondLargest && num !== largest) {
//       secondLargest = num;
//     }
//   }
//   console.log(secondLargest === -Infinity ? -1 : secondLargest);
// }

// secondLargest(arr);
