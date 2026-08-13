// objects

const User = {
  name: "yankee",
  age: 10,
  isLoggedIn: false,
  loggedInDays: ["sat", "mon", "tue"],
};

// different way of accessing the value in the object
// console.log(User.loggedInDays);
// console.log(User["isLoggedIn"]);

const sym = Symbol("$");
const User2 = {
  name: "yankee",
  age: 10,
  isLoggedIn: false,
  loggedInDays: ["sat", "mon", "tue"],
  [sym]: sym,
};

// console.log(User2[sym]);
// console.log(typeof(User2[sym]));

// console.table(User2);

// we can also change the value of the object
User2.name = "jeni";

// if we don't want to change the value of the object in the object we can freeze it
Object.freeze(User2);
User2.name = "yankee"; // here the value will be jeni because if frooze the object before changing it to yankee

// console.log(User2)

// nesting in objects
const regularUser = {
  fullname: {
    userfullname: {
      firstname: "yankee",
      lastname: "vasquez",
    },
  },
};

console.log(regularUser.fullname?.userfullname?.firstname);

// concat the two obj

const obj1 = { 1: "a", 2: "2" };
const obj2 = { 3: "a", 4: "2" };
const obj3 = { 5: "a", 6: "2" };

// first way
const obj4 = Object.assign({}, obj1, obj2, obj3); //empty object is target object that means all the  obj i.e obj1,obj2,obj3 which is known as source will be concat to empty object

// using spread operator
const obj5 = {...obj1,...obj2,...obj3}
console.log(obj4);
console.log(obj5)



// object inside the array and acessing it
const user = [
  {
    id: 1,
    email: "email@gmail.com",
  },
  {
    id: 2,
    email: "email@gmail.com",
  },
  {
    id: 3,
    email: "email@gmail.com",
  },
];

console.log(user[1]);


// different methods
console.log(Object.values(User)); // returns the value of the object
console.log(Object.keys(User)); // returns the keys of the object
console.log(User.hasOwnProperty("loggedInDays")); // checks the property



