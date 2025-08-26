//*Date

let currDate = new Date('2024-08-11');
console.log(currDate);

//get date method
let myDate = new Date();

console.log(myDate.getFullYear());
console.log(myDate.getMonth());
console.log(myDate.getDate());
console.log(myDate.getDay());
console.log(myDate.getHours());
console.log(myDate.getMinutes());
console.log(myDate.getSeconds());

//set date method
let setDate = new Date();

setDate.setFullYear(2024, 11, 30);

//* You can use setDate to set Year, Month, Date, Day, Hours, Second, Minutes (Such as getDate).
