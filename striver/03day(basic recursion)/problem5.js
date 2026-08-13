// Problem Statement: Given a number X,  print its factorial.

// To obtain the factorial of a number, it has to be multiplied by all the whole numbers preceding it. More precisely X! = X*(X-1)*(X-2) … 1.

// Note: X  is always a positive number.

function findFactorialOfNumber(number, fact = 1) {
  if (number <= 0) {
    console.log(fact);
    return;
  }

  fact = fact * number;

  findFactorialOfNumber(number - 1, fact);
}

findFactorialOfNumber(10);
