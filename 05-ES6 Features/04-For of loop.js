//* for of loop

//array iterating
let score = [34, 54, 31, 64, 87];

for (let store of score) {
  console.log(store);
}

//Object destructuring
let ratings = [
  { userName: 'Shohag', userInfo: 'Nothing much...' },
  { userName: 'Sami', userInfo: 'Nothing much...' },
];

for (let user of ratings) {
  console.log(user.userName);
}

//string iteration
let info = 'No entry';
let su = 0;

for (let i of info) {
  su++;
  console.log(i, su);
}
