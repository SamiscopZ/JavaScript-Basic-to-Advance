//* Rest parameter
function number(a, b, c, d, ...arg) {
  console.log(a, b, c, d, arg); //arg creates a separate array.
  console.log(a, b, c, d, ...arg); //..arg makes them individual elements.
}

number(2, 3, 4, 2, 33, 3, 4, 3, 4, 33);

//*Spread operator
let arr = [9, 8, 6, 55];
let aa = [...arr]; //Exact copy of arr

arr.push(33, 3); //This won't change in aa

let newArr = [...arr, 7, 998];

//? Summary : If you use "..."  it in a function as parameter, it's called Rest operator otherwise it's called Spread operator.
