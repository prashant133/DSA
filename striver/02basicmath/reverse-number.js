// Problem Statement: Given an integer N return the reverse of the given number.

// Note: If a number has trailing zeros, then its reverse will not include them. For e.g , reverse of 10400 will be 401 instead of 00401.

function reverseNumber(number) {
  let reverse = 0;
  while (number > 0) {
    const temp = number % 10;
    reverse = reverse * 10 + temp;

    number = Math.floor(number / 10);
  }
  console.log(reverse);
}

reverseNumber(123456004);
