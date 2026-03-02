const arr = [11, 44, 66, 33, 3, 33, 4, 66, 11, 33, 7, 98, 48];

function isMaxAndMin(arr) {
  let max = arr[0];
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }
  }

  console.log(max);
  console.log(min);
}

isMaxAndMin(arr);
