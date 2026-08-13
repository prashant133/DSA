// Problem Statement: Given a number ‘N’, find out the sum of the first N natural numbers .

function sumOfNaturalNumber(number, sum = 0) {
  if (number <= 0) {
    console.log(sum);
    return;
  }

  sum = sum + number;

  sumOfNaturalNumber(number - 1, sum);
}

sumOfNaturalNumber(10);
