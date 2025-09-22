//Data types
/*
 ? 1. Primitive
 ? 2. Non-primitive
 */

/*
 * Primitive has 7 types of data
 */

// String
let color = 'yellow';
let firstName = 'Mohammad';

// Number
let length = 15; //integer
let weight = 90.5; //float

// Booleans
let x = true;
let y = false;

//Bigint
let z = BigInt('123456789012345678901234567890');

//undefined
let counter;
console.log(counter);

//null
let dec = null;
console.log(typeof dec, dec);

//Symbol;

/*
 * Non-Primitive has 1 type of data
 */

//Object
const person = {
  firstName: 'Memphis',
  lastName: 'Depay',
  age: 20,
  phone: '6xxxxxxx0',
  address: 'Amsterdam, Netherlands',
};
person.height = '5" 6';
delete person.age;
