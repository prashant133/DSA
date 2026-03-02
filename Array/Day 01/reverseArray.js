const array = [11, 12, 13, 14, 15, 16, 17];

function reserveArray(array) {
  const arrayTwo = [];
  for (let i = array.length - 1; i >= 0; i--) {
    arrayTwo.push(array[i]);
  }
  console.log(arrayTwo);
}

reserveArray(array);
