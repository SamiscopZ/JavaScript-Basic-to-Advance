//Object literal extension
function sayHi(username, userInfo) {
  return {
    username,
    userInfo,
  };
}

console.log(sayHi('Samiul', 'Founder of SIM Group'));

let message = 'Hi, I am waiting for you';
let user = 'Ahmed';

let info = {
  message,
  user,
};

console.log(info);

let fname = 'Shohag';

//Computed property: using variable as property
let information = {
  [fname]: 'This is his nickname', //use variable as property name.
  reset() {
    console.log('Mi-Xiaomi');
  },
};

console.log(information.reset());
