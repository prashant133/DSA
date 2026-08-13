// Problem Statement: Given an integer N, return the number of digits in N.

function countNumber(number) {
  let count = 0;

  while (number > 0) {
    const temp = number % 10;
    count++;

    number = Math.floor(number / 10);
  }

  console.log(count);
}

countNumber(12345678901);
