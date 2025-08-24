/*
 *Array methods
 */

const myList = ['apple', 'orange', 'mango', 'banana', 'jackfruit'];

myList[3] = 'Pinaple'; //to add new elements at 3
console.log(myList);

//To add new an element of an array at the end
const mobileCom = ['Samusng', 'Vivo', 'Oneplus', 'Lenevo'];
mobileCom.push('iPnone');

console.log(mobileCom);

//To remove an element of an array at the end
const charger = ['Redmi', 'Samsung', 'Walton'];
charger.pop();

console.log(charger);

//To remove an element of an array at the start
const laptop = ['Asus', 'Dell', 'Mac'];
laptop.shift();

console.log(laptop);

//To add new an element of an array at the start
const boardCom = ['Asus', 'Ryzen', 'Intel'];
boardCom.unshift('Nvdia');

console.log(boardCom);

//To find an index of an elemet of an array
const bestBatsman = ['Babar', 'Williamson', 'Root', 'Smith'];

console.log(bestBatsman.indexOf('Williamson'));

//To check if a value in an array
const apps = ['YouTube', 'WhatsApp', 'Telegram'];
console.log(Array.isArray(apps));

/*
 ?Array to string convert
 */
const fruits = ['Banana', 'Mango', 'Apple'];
console.log(fruits.toString('')); //Converts the entire array into a comma-separated string.

console.log(fruits.at(2)); //Convert arry to string, need an element index no .at(1)

console.log(fruits.join('!')); //Convert arry to string and add something that will show after every element

const juice = ['Lemon', 'Mango', 'Orange'];
delete juice[1]; //! This method is not recommended to use.

console.log(juice); //using delete will delete an element but it will reamin as a undefined

const cricketerList = ['Smith', 'Root', 'Williamson', 'Stokes'];
const footballerList = ['L. Messi', 'Di Maria', 'N. Kante'];

console.log(cricketerList.concat(footballerList)); //Add multiple array in one array

const arr = [
  [1, 2],
  [3, 4],
  [5, 6],
];

console.log(arr.flat()); //Flat

const arr1 = [1, 2, 3, 4];
arr1.splice(0, 1); //To remove element from an array

console.log(arr1);

const arr2 = [5, 6, 7, 8, 9];
const arr22 = arr2.toSpliced(1, 2);

console.log(arr22, arr2);
