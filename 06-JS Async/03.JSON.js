// JSON format
//? JSON stands for JavaScript Object Notation. JSON is used for storing data instead of using Object. Object takes bulk size of storage, but JSON is text format so it takes low storage. JSON is language independent.

// example: 1
const data = '{"name": "David", "age": 43, "available": true}';

console.log(data);

// example: 2
const info = {
  fullName: 'Alfonso David',
  profession: 'Footballer',
  readyToPlay: true,
  injured: false,
};

//Converting an object to a JSON text.
const details = JSON.stringify(info);

console.log(details);

//? Converting JSON text to an object.
const jsonStr = '{"name": "Sami", "age" : 21, "employed": false}';

const obj = JSON.parse(jsonStr);

console.log(obj.name);

//* Converting JSON text to an array.
const fruits = '["Apple","Mango","Lemon","Orange"]';

const fruitsList = JSON.parse(fruits);
console.log(fruitsList);

//! You can't use Date, Function, undefined in JSON, but there is a way to use Date.

const mangerInfo =
  '{ "name": "De Jong", "birth": "1990-04-21", "serviceYear":"10 Years", "retired":false}';

const manager = JSON.parse(mangerInfo, (key, value) => {
  if (key === 'birth') {
    return new Date(value);
  }
  return value;
});
console.log(manager);

//? Converting an object to a JSON text.
const captain = {
  fullName: 'Steve Smith',
  age: 34,
  roll: 'Batsman/Bowler',
  jersey: 49,
};

const skipper = JSON.stringify(captain);
console.log(skipper);
