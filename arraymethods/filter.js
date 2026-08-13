// filter
//->gives back new array but the numbers of element cany vary
// ->does not change the original array
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

const newArr = arr.filter(function (val) {
  if (val > 3) {
    return true;
  }
});
console.log(newArr);

// return the array whose value is greater than 10 and is even and count my many numbers meet the condition

let count = 0;
const newArrTwo = arr.filter(function (val) {
  if (val > 10 && val % 2 === 0) {
    count++;
    return true;
  }
});
console.log(newArrTwo);
console.log(count);
