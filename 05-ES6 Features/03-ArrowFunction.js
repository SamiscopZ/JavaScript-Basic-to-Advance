//Arrow Function
const printThis = a => {
  console.log('Printing this...', a);
};

printThis('paper');

//If you have one parameter and one statement, you can use this way.
let print = info => info;
print('Sami');

let total = sum => console.log(2 * sum);

total(30);
