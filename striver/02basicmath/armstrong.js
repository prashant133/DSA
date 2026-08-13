// Problem Statement:Given an integer N, return true it is an Armstrong number otherwise return false.

// An Amrstrong number is a number that is equal to the sum of its own digits each raised to the power of the number of digits.

function armstrong(number) {
  let pow = number.toString().length;
  let original = number;

  let sum = 0;

  while (number > 0) {
    const digits = number % 10;
    sum += digits ** pow;
    number = Math.floor(number / 10);
  }

  return sum === original;
}

console.log(armstrong(153));
