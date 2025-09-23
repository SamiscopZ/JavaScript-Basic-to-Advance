// *Array methods

const myList = ['apple', 'orange', 'mango', 'banana', 'jackfruit'];

myList[3] = 'Pineapple'; //to add new element at 3
console.log(myList);
// Output: [('apple', 'orange', 'mango', 'Pineapple', 'jackfruit')];

//? To add8 new an element of an array at the end
const mobileComp = ['Samsung', 'Vivo', 'OnePlus'];
mobileComp.push('Apple');

console.log(mobileComp);
// Output:['Samsung', 'Vivo', 'OnePlus', 'Apple'];

//? To remove an element of an array at the end
const charger = ['Xiaomi', 'Samsung', 'Walton'];
charger.pop();

console.log(charger);
// Output: ['Xiaomi', 'Samsung']

//? To remove an element of an array at the start
const laptop = ['Acer', 'Dell', 'HP'];
laptop.shift();

console.log(laptop);
// Output: ['Dell', 'HP'];

//? To add new an element of an array at the start
const boardCom = ['Asus', 'Ryzen', 'Intel'];
boardCom.unshift('Nvidia');

console.log(boardCom);
// Output: ['Nvidia', 'Asus', 'Ryzen', 'Intel']

//? To find an index of an element of an array
const bestBatsman = ['Babar', 'Williamson', 'Root', 'Smith'];

console.log(bestBatsman.indexOf('Williamson'));
// Output: 1

//? To check if a value in an array
const app = ['YouTube', 'WhatsApp', 'Telegram'];
console.log(Array.isArray(app));
// Output: true

//* Array to string convert

//? Converts the entire array into a comma-separated string.
const fruits = ['Banana', 'Mango', 'Apple'];
console.log(fruits.toString());

// Output: Banana,Mango,Apple

//? Convert array to string, need an element index no .at(1)
console.log(fruits.at(2));

console.log(fruits.join('!')); //Convert array to string and add something that will show after every element

const juice = ['Lemon', 'Mango', 'Orange'];
delete juice[1]; //! This method is not recommended to use.

console.log(juice); //using delete will delete an element but it will remain as a undefined
// Output:['Lemon', empty, 'Orange'];

const cricketerList = ['Smith', 'Root', 'Williamson', 'Stokes'];
const footballerList = ['L. Martinez', 'Di Maria', 'T. Almada'];

console.log(cricketerList.concat(footballerList)); //Add multiple array in one array

const arr = [
  [1, 2],
  [3, 4],
  [5, 6],
];

console.log(arr.flat());
//Output: [1, 2, 3, 4, 5, 6]

const apps = ['YouTube', 'WhatsApp', 'Telegram'];
console.log(Array.isArray(apps));
const arr1 = [1, 2, 3, 4];
arr1.splice(0, 1); //To remove element from an array, it changes the main array and return it.

console.log(arr1);

const arr2 = [5, 6, 7, 8, 9];
const arr22 = arr2.toSpliced(1, 2); //To remove element from an array, it creates a new array and return it.

console.log(arr22, arr2);
