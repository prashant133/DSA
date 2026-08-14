// Problem Statement: Given an integer N. Print the Fibonacci series up to the Nth term.

function fibonacciSeries(num) {
  if (num <= 1) return num;

  return fibonacciSeries(num - 1) + fibonacciSeries(num - 2);
}

console.log(fibonacciSeries(7));
