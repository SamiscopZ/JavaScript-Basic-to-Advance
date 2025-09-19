//* IIFE

(function (a, b) {
  console.log(a + b);
})(43, 27);

//IIFE with Arrow function
((a, b, c) => {
  console.log(a - b * 2);
})(524, 239);

//* callback function
function info(userInfo) {
  console.log(userInfo);
}

function user(name, age, profession) {
  name;
  age;
  profession;

  return `${name}, ${age}, ${profession} `;
}

info(user('David Waugh', 54, 'Cricketer'));
