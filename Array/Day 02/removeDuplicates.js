// remove duplicates

const arr = [10, 11, 12, 14, 13, 11, 12];

function removeDuplicates(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1);
        j--;
      }
    }
  }
  console.log(arr);
}

removeDuplicates(arr);
