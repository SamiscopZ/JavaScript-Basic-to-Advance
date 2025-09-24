let a = prompt('Enter first number');
let b = prompt('Enter second number');

if (isNaN(a) || isNaN(b)) {
  throw SyntaxError("You didn't input a number"); //Throw will show costumed error
}
sum = parseInt(a) + parseInt(b);

try {
  console.log('The sum is ', sum * x);
} catch {
  console.log('Error comes');
}
