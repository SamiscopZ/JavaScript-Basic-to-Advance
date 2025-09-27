//Object literal extension
function sayHi(username, userInfo) {
  return {
    username, // username: username
    userInfo, // userinfo: userinfo
  };
}

console.log(sayHi('Jackson', 'Founder of SIM Group'));
// Output: {username: 'Jackson', userInfo: 'Founder of SIM Group'}

let message = 'Hi, I am waiting for you';
let user = 'Ahmed';

let info = {
  message,
  user,
};

console.log(info);

// Computed property: using variable as property

let fname = 'Fernandez';
let information = {
  [fname]: 'This is his nickname', //use variable as property name.
  reset() {
    console.log('Mi-Xiaomi');
  },
};

console.log(information.reset());
