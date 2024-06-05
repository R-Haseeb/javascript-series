// export function getBrandSlogan() {
//   return "Our Brand Slogan";
// }
// console.log ("hye dear")
// export default {
//   getBrandSlogan,
// };

// const inputArray = [
//   { name: "Alice", age: 34 },
//   { name: "Jack", age: 22 },
//   { name: "Eva", age: 41 },
//   { name: "Bob", age: 15 },
//   { name: "Hannah", age: 29 },
//   { name: "David", age: 37 },
//   { name: "Grace", age: 50 },
//   { name: "Ivy", age: 19 },
//   { name: "Frank", age: 27 },
//   { name: "Charlie", age: 48 },
// ];
// const outputArray = inputArray.sort((a1, a2) => a1.age - a2.age);
// const outputArray = inputArray.sort((a1, a2) => {
//   const input1 = a1.name;
//   const input2 = a2.name;
//   if (input1 > input2) {
//     return 1;
//   }else {
//     return -1
//   }
// });
// console.log(outputArray);

// function inner() {
//   console.log('helo');
// };
// console.log(inner());

// const inputArray1 = [
//   { name: "Alice", age: 34 },
//   { name: "Jack", age: 22 },
//   { name: "Eva", age: 41 },
//   { name: "Bob", age: 15 },
//   { name: "Hannah", age: 29 },
//   { name: "David", age: 37 },
//   { name: "Grace", age: 50 },
//   { name: "Ivy", age: 19 },
//   { name: "Frank", age: 27 },
//   { name: "Charlie", age: 48 },
// ];
// function bubbleSort(array) {
//     let n = array.length;
//     for (let i = 0; i < n - 1; i++) {
//         for (let j = 0; j < n - 1 - i; j++) {
//             if (array[j] > array[j + 1]) {
//                 let temp = array[j];
//                 array[j] = array[j + 1];
//                 array[j + 1] = temp;
//             }
//         }
//     }
//     return array;
// }
// const outputArray1 = bubbleSort(inputArray1.slice());
// console.log(outputArray1);

// For loop
// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

// while loop
// let j = 1;
// while (j < 5) {
//   console.log(j);
//   j++;
// }

// do while loop
// let k = 0;
// do {
//   console.log(k);
// } while (k > 1);

// name function
//  function sum(a, b) {
//         return a + b;
//  };

//  console.log(sum(5, 3));

//  const add = function(a, b) {
//         return a + b;
//  };
//  console.log(add(5, 3));

// anonymous functioin
// console.log(function(a, b) {
//         return a * b;
// }(3, 4));

// name function
// function add(x, y) {
//   return x + y;
// }
// let a = 3,
//   b = 5;
// let result = add(a, b);

// console.log(result);

// callback function
// function display(x, y, add) {
//   var result = add(x, y);
//   console.log(result);
// }
// display(10, 5, add);

// event handlers
// const button = document.getElementById('myButton');
// button.addEventListener('click', function() {
//         console.log('button clicked');
// })

// Higher order function
// its takes a one or more function as argument and returns a function as a result of the function (callback function)

// function hof(greetings, greetings2) {
//   console.log("Invoice Header")
//   greetings("Rana");

//   greetings2("Haseeb");
//   console.log("Invoice Footer")
// }
// function sayHello(value) {
//   console.log("Hello "+value);
// }
// function sayGoodBye(value) {
//   console.log("Good Bye "+value);
// }
// function callEveryone() {
//   hof(sayHello, sayGoodBye);
// }
// callEveryone();

// function display(x, y, add) {
//   var result = add(x, y);
//   return function () {
//     // console.log(result);
//     return "Result is: " + result;
//   };
// }
// addition = function (x, y) {
//   return x + y;
// };
// const value = display(8, 9, addition);
// console.log(value());

// return a function as a result
// function createAdder(number) {
//   return function (value) {
//     return value + number;
//   };
// }
// const addFive = createAdder(5);

// console.log(addFive(5));

// function Recurse(x) {
//   if (x > 0) {
//     console.log(x);
//     Recurse(x - 1);
//   }
// }
// Recurse(5);

// var x = 20;
// function foo() {
//   console.log(x);
//   let x = 10;
// }
// foo();

// console.log("start");
// setTimeout(() => {
//   console.log("Timeout");
// }, 0);
// console.log("End");

// setTimeout(() => {
//   console.log("Timeout");
// }, 0);
// Promise.resolve().then(() => console.log("promise"));
// console.log("End");

// async function foo() {
//   return "hello world";
// }
// const result = foo();
// console.log(result);
// return a promiss with hello world

// console.log({} == {}); // false
// console.log([1, 2] == [1, 2]); // false

// const user1 = {
//   name: "Rana",
//   age: 25,
//   address: {
//     city: "Karachi",
//     country: "Pakistan",
//   },
// };

// const user2 = user1;

// user2.name = "Haseeb";

// user2.address.city = "lahore";

// console.log(user1);
// console.log(user2);

// const numbers = [0, 1, 2, 3, 4, 5];
// const myNumber = numbers.filter((i) => i < 3).map((n) => n + 5);
// console.log(myNumber);

// const str = "hye rana haseeb";
// const hye = str.split(" ");
// console.log(hye);

// const myHye = hye.map((n) => {
//   return n[0].toUpperCase()+n.slice(1);
// });

// console.log(myHye);

// function foo() {
//   var x = 10;
//   console.log(x);
// }
// foo();
// console.log(x);

// {
//   var a = 1;
//   var b = 2;

//   console.log(a);
//   console.log(b);
// }
// console.log(a);
// console.log(b);

// console.log(name);
// const name = "test";
// Cannot access 'name' before initialization

// var x = 20;

// function foo() {
//   console.log(x);
//   var x = 10;
// }

// foo();

// undifine
