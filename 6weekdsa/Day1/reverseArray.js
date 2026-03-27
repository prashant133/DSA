const array = [2, 4, 5, 7, 9, 12, 6, 10, 19];

// brute force approcah
function reverseArray(array) {
  const reverseArray = [];

  for (let i = array.length - 1; i >= 0; i--) {
    reverseArray.push(array[i]);
  }

  console.log(reverseArray);
}

// reverseArray(array);

// two pointer

function reverseTwoPointer(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    // value swaping 
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  console.log(arr)
}

reverseTwoPointer(array);

// console.log(array.reverse())
