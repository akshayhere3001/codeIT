// console.log("Welcome to codeIT");

// var timeOut = setTimeout(login, 3000);

// function login() {
//   confirm("Login to our Page");
// }

var content = document.getElementsByTagName("body")[0];
var darkMode = document.getElementById("dark-mode");

darkMode.addEventListener("click", function () {
  darkMode.classList.toggle("active");
  content.classList.toggle("night");
});

function iclick() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// // Recursion
// // Function calls itself and helps in repeating

// // code of calculating power
// function pow(x, n) {
//   if (n == 1) {
//     return x;
//   } else {
//     return x * pow(x, n - 1);
//   }
// }
// pow(2, 2);

// // Closure
// // A Closure is a function that remembers its outer variables and can access them

// var add = (function () {
//   var counter = 0;
//   return function () {
//     counter += 1;
//     return counter;
//   };
// })();
// add();
// add();

// // New Function

// let sum = new Function("a", "b", "return a + b");
// alert(sum(23, 21));

// // Arrow Functions
// // () =>{}

// sum = (a, b) => {
//   return a + b;
// };

// console.log(sum(23, 32));

// Rest Parameter & Spread Operator
// Basically Unlimited parameter in functions

function func(...input) {
  let sum = 0;
  for (let i of input) {
    sum += i;
  }
  return sum;
}

console.log(func(1, 2));
console.log(func(1, 2, 3, 4, 5));

// Spread Operator
// It just concatinate the two items or more

let arr = [1, 2, 3];
let arr2 = [12, 13, 14];

arr = [...arr, ...arr2];
console.log(arr);

// Global Object
// It is the variable and function that are available anywhere

// Function Object
// In javascript function are the object itself

let learning = document.getElementById("list1");
learning.addEventListener("mouseenter", dropDown);

let svg = document.getElementById("svg");

function dropDown() {
  alert("hello");
}
