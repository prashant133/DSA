// Problem Statement: Given an integer N, return true if it is a palindrome else return false.
// A palindrome is a number that reads the same backward as forward.
// For example, 121, 1331, and 4554 are palindromes because they remain the same when their digits are reversed.

function palindromeNumber(number) {
  let newNumber = number;
  let reverse = 0;
  while (newNumber > 0) {
    const temp = newNumber % 10;

    reverse = reverse * 10 + temp;

    newNumber = Math.floor(newNumber / 10);
  }

  //   if (reverse === number) {
  //     return true;
  //   } else {
  //     return false;
  //   }

  return reverse === number;
}

console.log(palindromeNumber(1221));

console.log(palindromeNumber(11121));
