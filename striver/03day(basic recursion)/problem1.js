// Problem Description: Given an integer N, write a program to print your name N times.

function printName(name, count, n) {
  if (count === n) return;

  console.log(name);

  count++;

  // Recursive call with incremented count
  printName(name, count, n);
}
printName("yankee", 0, 5)
