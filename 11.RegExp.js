//* Search & Match
let text =
  "Please, let me know. But if you don't know me, you will have to face problem.";

// console.log(text.search('me'));
console.log(text.search(/me/i)); //To find from all the cases (UpperCase or LowerCase)
console.log(text.match(/me/gi)); //To match same word though it is Upper or Lower case.

//* replace
let carDetails =
  'BMW is one of the most expensive car in the world. If you want to afford a BMW you will have to be billioniare.';

console.log(carDetails);
console.log(carDetails.replace('BMW', 'Tesla')); //To replace a word.
console.log(carDetails.replace(/BMW/gi, 'Tesla')); //To replace a same word in everywhere.
