// Example of usual way to call two function

// Example : 1
function display(some) {
  console.log(some);
}

function calculate(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

let result = calculate(34, 32);

display(result);

//Example : 2
function multiply(num) {
  console.log(num);
}

function findingResult(num1, num2) {
  let sum = num1 + num2;

  multiply(sum);
}

findingResult(4234, 212);

//* callback function

function info(introduce) {
  console.log(introduce);
}

function person(name, age, back) {
  if (back) back(`${name}, ${age}`);
}

person('Steve', 23, info);

//? Tough this way you may never use in real life project. This example used here to get know about syntax of callback function.

// asynchronous behavior

console.log('1at code');

setTimeout(() => {
  console.log('2nd code');
}, 2000);

console.log('3rd code');
