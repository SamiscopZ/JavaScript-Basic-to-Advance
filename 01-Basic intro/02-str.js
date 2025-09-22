//* Some most important methods for string, which are commonly used.

//charAt
let num = 'Hello World';
console.log(num.charAt(6));
// Output: W

//concat
let text = 'hello';
let text1 = 'world';

console.log(text.concat(' ', text1));
// Output: hello world

//indexOf
let str = "Hey! What's up";
console.log(str.indexOf('up'));
// Output: 12

//length
let str1 = "Hey! What's up";
console.log(str1.length);
// Output: 14

//repeat
let recap = 'Welcome Back ';
console.log(recap.repeat(3));
// Output: Welcome Back Welcome Back Welcome Back

//replace
let nam = 'S. Smith';
console.log(nam.replace('Steve', 'Smith'));
// Output: Steve Smith

// parseInt
let n = '1000.87';
console.log(parseInt(n)); //to convert string to number
// Output: 1000

// parseFloat
let nn = '1000.3456';
console.log(parseFloat(nn));
// Output: 1000.3456;

/*
 ? parseInt and parseFloat are used to convert strings to numbers. parseInt removes the decimal part after the dot (.), but parseFloat keeps it.
 */
