// Problem Statement: Given a string, check if the string is palindrome or not. A string is said to be palindrome if the reverse of the string is the same as the string.

function checkPalindrome(str, start = 0, index = str.length - 1) {
  if (start >= index) return true;
  if (str[start] != str[index]) return false;

  return checkPalindrome(str, start + 1, index - 1);
}

console.log(checkPalindrome("madam"));
console.log(checkPalindrome("madsm"));
