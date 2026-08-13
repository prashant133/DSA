// Check if a number is prime or not
// Problem Statement: Given an integer N,
// check whether it is prime or not. A prime number is a number that is only divisible by 1 and itself and the total number of divisors is 2..

function primeNumber(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i < number; i++) {
    console.log(i)
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

// console.log(primeNumber(56));
console.log(primeNumber(13));
// console.log(primeNumber(2));
