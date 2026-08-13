// Problem Statement: You are given an array. The task is to reverse the array and print it.

function reverseArray(array, index = array.length - 1) {
  if (index < 0) return;

  console.log(array[index]);

  reverseArray(array, index - 1);
}

reverseArray([1, 2, 3, 4, 5]);
