// Problem Description: Given an integer N, write a program to print numbers from 1 to N.

function printNumbers(count, number) {
  if (count > number) return;

  console.log(count);

  count++;

  printNumbers(count, number)
}

printNumbers(1, 100);
