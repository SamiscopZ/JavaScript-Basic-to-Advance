//* for of loop

const { use } = require('react');

//array iterating
let score = [34, 54, 31, 64, 87];

for (let store of score) {
  console.log(store);
}

//Object destructuring
let ratings = [
  { userName: 'Nicolas', userInfo: 'Nothing much...' },
  { userName: 'E. Fernandez', userInfo: 'Nothing much...' },
];

for (let user of ratings) {
  console.log(user.userName, user.userInfo);
}

// string iteration
let info = 'No entry';
let su = 0;

for (let i of info) {
  su++;
  console.log(i, su);
}
