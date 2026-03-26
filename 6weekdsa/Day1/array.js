// must know array methods

// 1. map

const array = [1, 2, 3, 4, 5, 6, 7];

console.log(
  array.map((array) => {
    return array;
  }),
);

const user = [{ name: "yankee" }, { name: "stupid" }];

const names = user.map((user) => user.name);

console.log("Names in the array are : ", names);

// here map function creates a new array without modifiying the original array

// 2. filter
// getting specific data

const filterArray = [1, 2, 3, 4, 5, 6];

const evenNumber = filterArray.filter((number) => number % 2 === 0);
console.log(evenNumber);

// 3. find
// get first matching item

const findNumber = array.find((number) => number === 8);
console.log("the number is : ", findNumber); //undefined

const users = [{ id: 1 }, { id: 2 }];

const findUsers = users.find((user) => user.id === 2);
console.log("found users : ", findUsers);

// 4. reduce
// (aggregation, groouping)
const sum = array.reduce((acc, cur) => acc + cur, 0);
console.log("the sum is : ", sum);

// 5. forEach
// loop no return
array.forEach((num) => {
  console.log(num);
});

// 6. some
// check if any match
const users2 = [{ role: "guest" }, { role: "admin" }];
const isAdmin = users2.some((user) => {
  return user.role === "admin";
});

console.log("The users id : ", isAdmin);

//7. every
// check if all match
const user3 = [
  { id: 1, isActive: true },
  { id: 2, isActive: true },
  { id: 3, isActive: true },
];

const allActive = user3.every((user) => user.isActive == true);
console.log("All users are active", allActive);

// 8. includes
const roles = ["admin", "guest"];

console.log("the roles includes admin ", roles.includes("admin"));

// 9. sort
const unsorted = [9, 4, 5, 8, 2, 5, 1, 2, 0];

console.log(
  "the sorted array ",
  unsorted.sort((a, b) => a - b),
);

// 10. slice
// non mutatin extraction
console.log("the sliced array ", array.slice(4, 6));

// 11. splice
// modify array(mutate)
console.log("the splice array ", array.splice(4, 6));

// 12. flat()/ flatMap
const nestedArray = [1, [2, 3], 4, [5, [6, 7]]];

console.log(nestedArray.flat(2));

// takes and arguments for how deep you want to go to change the array or make it flat

// 13. Array.from
// convert iteral into array
const randomString = "Helloyou";
console.log(Array.from(randomString));

// 14. join
// convert array to string
const join1 = ["a", "b"];

const joinedArray = join1.join("");
console.log(joinedArray);

// Real world example : API Response

const products = [
  { id: 1, category: "Electronic", productName: "mouse" },
  { id: 2, category: "Mechinical", productName: "keybord" },
];

const result = products
  .filter((product) => product.category === "Electronic")
  .map((product) => ({
    id: product.id,
    name: product.productName,
  }));
console.log("the result is ", result);

const result2 = products
  .filter((product) => {
    return product.category === "Electronic";
  })
  .map((product) => {
    return product.productName;
  })
  .join(" ");

console.log(result2);

// Shallow Copy
// Copies only the top-level properties of an object/array.
// Nested objects or arrays are still referenced, not cloned.
// Changes to nested objects in the copy affect the original.

const original = [1, 2, [3, 4]];
const shallowCopy = [...original];

shallowCopy[0] = 10; // changes only the copy
shallowCopy[2][0] = 100; // nested array is shared

console.log("the shallow copyt ", shallowCopy);

console.log(original);

console.log("------------------------------------");

// Top-level change does not affect original
// nested value changes

// Deep Copy
// Copies everything, including nested objects and arrays.
// Changes in the copy do not affect the original.

const original2 = [4, 5, [6, 7]];

const deepCopy = JSON.parse(JSON.stringify(original2));
console.log(original2);
deepCopy[0] = 10;
deepCopy[2][0] = 100;

console.log("deep copy", deepCopy);
console.log(original2)

// the original does not changed at all
