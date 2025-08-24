//forEach

let info = ['Abrar', 'Asif', 'Asin', 'Abdullah', 'Anware'];

info.forEach(companyInfo);

function companyInfo(value, index, itSelf) {
  console.log(value, index);
}

//array map
let knownPeople = ['Asin', 'Huma', 'Bipasha'];

knownPeople.forEach(function (value) {
  console.log(value);
});

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
