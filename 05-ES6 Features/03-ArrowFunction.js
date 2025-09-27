// Arrow Function

let myArrow = (a, b) => a + b;

console.log(myArrow(54, 26));
console.log(myArrow(54, 26), myArrow.length); //.length will return, how many parameter in this function.

// If you need only one parameter, you can use  this way
const printThis = a => {
  console.log('Printing this...', a);
};

printThis('paper');

// If you have one parameter and one statement, you can use this way.
let print = info => info;
print('Sami');

let total = sum => console.log(2 * sum);

total(30);
