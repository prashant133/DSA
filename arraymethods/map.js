// map
// -> gives back new array but same number of element
// ->does not change original array

const arr = [1, 2, 3, 4, 5, 6];

const newArr = arr.map(function (val) {
  return val;
});

console.log(newArr);

// adding the elements of the arry
let sum = 0;
arr.map(function (val) {
  sum = sum + val;
});
console.log(sum);

// multipy the elements of the array
let multipy = 1;
arr.map(function (val) {
  multipy = multipy * val;
});
console.log(`multiplication ${multipy}`);

// odd elements in the array

let count = 0;

const odd = arr.map(function (val) {
  if (val % 2 !== 0) {
    count++;
    return val;
  }else {
    return null;
  }
});
console.log(odd); // if else is not written[1,undefined,3,undefined,5,undefined] because map returns the arry with same elements.
console.log(count);


