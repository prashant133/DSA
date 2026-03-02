const arr = [56, 75, 5, 55, 34, 67, 89, 23, 56, 23, 57, 45, 12, 24];

const arr2 = [1, 2, 3, 4, 5, 6];

// sorted = arr.sort((a, b) => a - b);

// console.log(sorted);

function isSorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      console.log("not sorted");
      return;
    }
  }
  console.log("sorted");
}

isSorted(arr);
isSorted(arr2);
