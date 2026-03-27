const array = [2, 4, 5, 7, 9, 12, 6, 10, 19, 2, 4];

function maxMin() {
  let max = 0;
  let min = Infinity;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }

    if(array[i] < min){
        min = array[i]
    }
  }
  console.log("the max number in the array is : ",max);
  console.log("the min number in the array is : ", min);
}

maxMin();
