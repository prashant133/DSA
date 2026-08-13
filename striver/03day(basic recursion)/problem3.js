// Problem Description: Given an integer N, write a program to print numbers from N to 1.

function printNumbers(count, number) {

   if(number < count) return; 

   console.log(number)

   number--;

   printNumbers(count,number)

}

printNumbers(1,10)