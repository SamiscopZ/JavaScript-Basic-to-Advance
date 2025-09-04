//If

let age = 10;

if (age >= 12) {
  console.log(`Welcome to our group`);
} else {
  console.log(`You are under age`);
}

// if else if
let a = 45;
let b = 45;

if (a > b) {
  console.log('a is greater than b');
} else if (a < b) {
  console.log('b is greater than a');
} else {
  console.log('Both are equal');
}
//Nesed if
let yourAge = 11;
let country = 'UK';

if (country == 'UK') {
  if (yourAge >= 18) {
    console.log('You can have driving licence');
  } else {
    console.log(`You can't have driving licence`);
  }
} else {
  console.log("Your aren't form UK");
}

//* Ternary operator
let myAge = 33;
let massage = myAge >= 18 ? 'You can drive' : "You can't drive";

console.log(massage);

// Multiple condition in ternary operator
let speed = 100;
let speedMitre =
  speed > 120
    ? 'You are speeding'
    : speed > 80
    ? 'You are speeding under limit'
    : 'Your speed is good';

console.log(speedMitre);

//* switch case
let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = 'Saturday';
    break;

  case 2:
    dayName = 'Sunday';
    break;
  case 3:
    dayName = 'Monday';
    break;
  case 4:
    dayName = 'Tuesday';
    break;

  case 5:
    dayName = 'Wednesday';
    break;

  case 6:
    dayName = 'Thursday';
    break;

  case 7:
    dayName = 'Friday';
    break;

  default:
    dayName = 'Invalid input';
}

console.log(dayName);
