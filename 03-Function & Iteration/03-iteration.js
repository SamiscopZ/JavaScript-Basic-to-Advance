///Iterable means you through a loop in Object, Array, String, Map etc.

//forEach

let info = ['Abram', 'Asin', 'Asin', 'Abdullah', 'Anware'];

info.forEach(companyInfo); //forEach used in array. It doesn't create new array, it changes main array.

function companyInfo(value, index, itSelf) {
  console.log(value, index);
}

//array map
let knownPeople = ['Asin', 'Huma', 'Bipasha'];

knownPeople.map(function (value) {
  console.log(value);
}); //It works same as forEach, but it creates new array.

//flat map
let newArr = [98, 33, 543, 2, 22];

newArr.flatMap(function (ar) {
  console.log(ar * 2);
});

console.log(newArr);

//Array filter
let news = [1, 23, 4, 5, 6, 8, 33, 55, 43, 3, 45];

let newNews = news.filter(function (value) {
  return value > 20;
});

console.log(newNews);
