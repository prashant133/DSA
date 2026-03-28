const array = [2, 0, 4, 5, 0, 5, 1, 0];

// using an extra array
function moveZeros(arr) {
  let result = [];
  // push the non zero values to new array
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      result.push(arr[i]);
    }
  }

  // count the zero value then push the value
  let zeroCount = arr.length - result.length;

  while (zeroCount > 0) {
    result.push(0);
    zeroCount--;
  }
  return result;
}

// console.log(moveZeros(array));

// two pointer approach

function twoPointerApproach(arr) {
  let i = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] !== 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    }
  }

  return arr;
}

console.log(twoPointerApproach(array));
