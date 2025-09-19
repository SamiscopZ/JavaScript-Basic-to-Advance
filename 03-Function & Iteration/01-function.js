//Function
function myFunc(a, b) {
  console.log(a * b);
}
myFunc(13, 2);

//* Returning a value of a function
function nameList(x, y) {
  return x / y;
}

let fname = nameList(50, 3);
console.log(fname);

//* Function hoisting
//* If you invoke the function before declaring it, it is called hoisting.
price(150, 50);

function price(shoe, sandal) {
  console.log(shoe + sandal);
}

//? JS Functions are First Class Citizens

//* Storing functions in variables

function getResult(a, b) {
  return a + b;
}

let sum = getResult;
console.log(sum(54, 33));
console.log(getResult(60, 33)); // Both way you can call function.

//* Multiply nested function
function mobile(samsung) {
  function laptop(mac) {
    function pc(ryzen) {
      console.log(samsung + mac + ryzen);
    }
    pc('Ryzen is most used in Pc.\n');
  }
  laptop('Mac is the most powerful laptop.\n');
}
mobile('Samsung is the leading mobile comp.\n');

// Function as a parameter (Callback function)
function summ(a, b) {
  return a + b;
}

let equal = summ;

function counter(x, y, z) {
  return z(x, y) * 4;
}

let total = counter(5, 8, equal);

console.log(total);

// Anonymous Functions
(function () {
  console.log('Anonymous function');
})(); //! Immediately Invoked Function Execution (IIFE), not recommended to use much.

// Function expression
let storingFunc = function (a, b) {
  return a + b;
};

console.log(storingFunc(43, 4)); //? In modern JS, mostly use Function expression isted of IIFE.

//* Pass by value of primitive values

function square(value) {
  value = value * value;
  return value;
}

let num = 12;
let res = square(num);

console.log(res, num);

//* Pass by value of reference value
let person = {
  name: 'Smith',
  age: 33,
};

function valueup(introduce) {
  introduce.age++;
}
valueup(person);

console.log(person);

//* Recursion in JS
function say(hello) {
  if (hello === 0) return;
  console.log(hello);
  say(hello - 1);
}
say(10);

//default parameter
function say(massage = 'Hello') {
  console.log(massage);
}

say();
