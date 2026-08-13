// array methods
const arr = [1, 2, 3, 4, 5, 6];

// foreach
arr.forEach((val) => {
  console.log(val);
});

// adding the value in each element using forEach
arr.forEach(function (val) {
  const sum = (val += 1);
  console.log(sum);
});

// adding all the element of the array using forEach
let num = 0;
arr.forEach(function (val) {
  num += val;
});
console.log(num);

// even numbers in the arry
const evenNumbers = [];
let count = 0;
arr.forEach(function (val) {
  if (val % 2 === 0) {
    evenNumbers.push(val);
    count++;
  }
});
console.log(evenNumbers);
console.log(count);

// multipy the element of the arrau

let multipyNumber = 1;
arr.forEach(function (val) {
  multipyNumber = val * multipyNumber;
});
console.log(multipyNumber);
