const array = [2, 4, 5, 7, 9, 12, 6, 10, 19, 2, 4];

// brute force approach
function removeDup(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        console.log(arr[i], arr[j]);
        array.splice(j, 1);
        j--;
      }
    }
  }
  console.log(array);
}

// removeDup(array);

function twoPointer(arr) {
  // Step 1: Sort the array so duplicates come together
  arr.sort((a, b) => a - b);

  // 'i' will track the position of the last unique element
  let i = 0;

  // 'j' scans the array from the second element
  for (let j = 1; j < arr.length; j++) {
    // If current element is different from the last unique element
    if (arr[i] !== arr[j]) {
      // Move 'i' forward to the next position
      i++;

      // Place the new unique element at position 'i'
      // This overwrites duplicate values
      arr[i] = arr[j];
    }
  }

  // Return only the unique portion of the array (0 → i)
  // Because elements after 'i' are duplicates/garbage
  return arr.slice(0, i + 1);
}

console.log(twoPointer(array));
