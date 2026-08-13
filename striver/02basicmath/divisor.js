// Problem Statement: Given an integer N, return all divisors of N.
// A divisor of an integer N is a positive integer that divides N without leaving a remainder.
//  In other words, if N is divisible by another integer without any remainder, then that integer is considered a divisor of N.

function divisor(number) {
  let divisor = [];
  let original = number;

  while (number > 0) {
    if (original % number === 0) {
      divisor.push(number);
    }

    number--;
  }
  return divisor;
}

console.log(divisor(46));
