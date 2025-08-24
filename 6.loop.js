/*
* for loop
 ? At first variable declaration
 ? Then apply condition. If true, it will execute. Otherwise it won't.
 ? Then increment or decrement.
*/

for (let x = 1; x < 10; x++) {
  console.log('Welcome to Javascript');
}

/*
* for in loop
 ? First, make an object (for in loop best to use with object).
 ? Then write a for...in loop → put a variable, then the word in, then the object name.
 ? Then execute others code.
*/
const person = {
  fname: 'David',
  age: 33,
  city: 'Tokyo',
};

for (let info in person) {
  console.log(`${info} : ${person[info]}`);
}

/*
* for of loop
 ? First, make an array or string or Maps.
 ? Then write a for...of loop → put a variable, then the word of, then the object name.
 ? Then execute others code.
*/
const fruits = ['Apple', 'Mango', 'Jackfruit', 'Orange'];

for (let taste of fruits) {
  console.log(taste);
}

/* 
* while loop
 ? First, make a variable.
 ? Then write a while loop → after the word while, put a condition inside brackets ().
 ? Inside the loop, write the code you want to run.
 ? At the end, update the variable (increment or decrement) so the loop can stop.
*/
let count = 1;

while (count <= 10) {
  console.log(count);
  count++;
}

/* 
* do while loop
 ? First, make a variable.
 ? Write do { } → inside the braces, put the code you want to run.
 ? At the end of the block, update the variable (increment or decrement).
 ? After the block, write while (condition); → the loop will keep running as long as the condition is true
*/

let counter = 1;

do {
  console.log(counter);
  counter++;
} while (counter <= 10);
