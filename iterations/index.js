const array = [1, 2, 3, 4, 5, 6, 5];

for (const number of array) {
  //   console.log(number);
}

const greeting = "hello world";
for (const greet of greeting) {
  //   console.log(greet);
}

// looping through a map
const map = new Map();
map.set("nepal", "mounteverst");
map.set("usa", "newyork");

for (const [key, value] of map) {
  //   console.log(key, value);
}

// we can not loop through an object using for of we use forin

const myObject = { fname: "yankee", lastname: "armstrong", age: "23" };

for (const [key, value] in myObject) {
//   console.log(key, value);
}

// note forof takes a value from the array and forin takes the key from the arary
const programming = ["python", "java", "javascript", "c++"];

for (const key in programming) {
  console.log(key); // index
  console.log(programming[key]); // value
  
}
