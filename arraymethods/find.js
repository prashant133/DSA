// find
// -> returns the first value if the test is passed
// -> return undefined if no elements are  found
//> does not change the original array

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const ans = arr.find(function (val) {
  if (val === 9) {
    return val;
  }
});
console.log(ans);

