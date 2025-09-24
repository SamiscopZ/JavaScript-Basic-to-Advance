// let price = 555;
// console.log(typeof price);

// let learning = true;
// console.log(typeof learning);

// let dirtyCity = 'Dhaka';
// console.log(typeof dirtyCity);

// let temperature = 102.2;
// console.log(typeof temperature);

// const isHungry = true;
// console.log(typeof isHungry);

// let age = 21;
// age = 22;
// console.log(age);

// let pocketMoney = 500;
// pocketMoney = 150;
// console.log(pocketMoney);

// let studyTime = 4;
// studyTime = 0;
// console.log(studyTime);

// let friendsCount = 3;
// friendsCount = 1;
// console.log(friendsCount);

// let chairsCount = 40;
// chairsCount = chairsCount - 2;
// chairsCount = chairsCount - 6;

// console.log(chairsCount);

// let num = '20';
// console.log(parseInt(num) + 10);

// let num1 = '3.14159';
// console.log(parseInt(num1));

// let boy = 'premik boy';
// console.log(parseInt(boy));

// let num2 = 3.456;
// let num3 = 2.789;
// console.log((num2 + num3).toFixed(2));

// let teacher = {
//   name: 'Samia',
//   age: 23,
//   subject: 'Bengali',
//   experience: '4 Years',
//   isMarried: false,
// };

// console.log(teacher);

// let laptop = {
//   brand: 'Apple',
//   model: 'MackBook M1',
//   diskSpace: '128 GB',
//   displaySize: '13.5 inc',
//   ram: '8 GB',
// };

// for (obj in laptop) {
//   const details = laptop[obj];
//   console.log(obj, details);
// }

// let phone = {
//   brand: 'Samsung',
//   model: 'Galaxy S21',
//   price: 85000,
// };

// let keys = Object.keys(phone);
// for (let key of keys) {
//   // const details = phone[key];
//   console.log(phone[key], key);
// }

// const number = { a: 10, b: 20, c: 30 };

// let sum = 0;

// for (let i in number) {
//   sum = sum + number[i];
// }
// console.log(sum);

// console.log(Object.keys(number));

// let player = {
//   name: 'Messi',
//   team: 'Argentina',
//   goals: 91,
// };

// console.log(Object.keys(player));

// function returnLatter(name) {
//   return name[0];
// }

// console.log(returnLatter('Raju'));

// function inputNumber(num) {
//   if (num > 10) return num / 10;
//   else return num * 10;
// }

// console.log(inputNumber(89));

// function arr(array) {
//   return array[0] + array[1];
// }

// console.log(arr([32, 414, 423, 232, 1143, 433]));

// function checkIn(num) {
//   if (num > 0) return num * 2;
//   else return num * 3;
// }

// console.log(checkIn(-10));

// function names(nam1, nam2) {
//   if (nam1 > nam2) return true;
//   else return false;
// }

// console.log(names('Shohag', 'Sami'));

// function mul(num1, num2) {
//   let total = num1 * num2;
//   if (total > 100) return total / 2;
//   else return total;
// }
// console.log(mul(10, 9));

// function someNum(num) {
//   let sum = 0;
//   for (const number of num) {
//     if (number % 2 === 1) {
//       sum = sum + number;
//     }
//   }
//   return sum;
// }

// let numbers = someNum([34, 232, 22, 33]);
// console.log(numbers);

// function arr(num) {
//   if (num[0] < num[1]) return num[0];
//   else return num[1];
// }

// console.log(arr([431, 332, 33, 22]));

// function age(isAge) {
//   if (isAge < 18) return 'Age is 18';
//   else if (isAge < 45) return 'Actual age is ' + isAge;
//   else return 'Age is 45';
// }

// console.log(age(100));

// function arr(num) {
//   let sum = 0;
//   for (const number of num) {
//     if (number % 4 === 0) {
//       sum = sum + number;
//     }
//   }
//   return sum;
// }

// console.log(arr([2, 4, 5, 7, 32, 45]));

// function num(n) {
//   if (n < 20) return n * 2;
//   else return n / 20;
// }

// console.log(num(15));

// function mul(num) {
//   let sum = 1;
//   for (const n of num) {
//     if (n % 3 === 0) {
//       sum *= n;
//     }
//   }
//   return sum;
// }

// console.log(mul([3, 5, 6, 8, 9]));

// function ghojToMile(mile) {
//   return 1760 * mile;
// }
// console.log(ghojToMile(10));

// function to(kiloWatt) {
//   return 860 * kiloWatt;
// }
// console.log(to(10));

function hoursToSecs(hours) {
  return hours * 60 * 60;
}
console.log(hoursToSecs(24));

function cmToM(cm) {
  return cm / 100;
}

console.log(cmToM(1500));

function poundToKg(pound) {
  return 0.453 * pound;
}

console.log(poundToKg(150));
