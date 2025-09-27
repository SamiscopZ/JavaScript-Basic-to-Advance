//* Destruction

// Destructuring allows to extract values from arrays or objects into variables in a clean way, making them shorter and easy to use.

// Object destructing
const user = {
  id: 339,
  name: 'Sami',
  age: 21,
  //   education: {
  //     degree: 'MSC',
  //   },
};

const { name: title } = user;

const { education: { degree } = {} } = user;

console.log(title, degree);

const person = {
  firstName: 'David',
  lastName: 'Warner',
  age: 31,
};

let { firstName, lastName } = person;
console.log(firstName, lastName);

// Array destructing
const numbers = [43, 2, 21, [444, 432, 900], 34, 98];

const [, , , [, a, b], , c] = numbers;

console.log(a, b, c);

// Swapping values
let x = 32;
let y = 43;

[x, y] = [y, x];

console.log(x, y);
