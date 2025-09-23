//Object

let person = {
  firstName: 'David',
  lastName: 'Warner',
  age: 34,
};

console.log(person);

const samsung = {
  model: 'Samsung A22 5G',
  displayRes: '4k',
  battery: '5000mh',
  rom: '64gb',
  ram: '4gb + (4gb virtual)',
  camera: {
    back: '58px',
    front: '10px',
  },
};

//this keyword
let info = {
  firstName: 'David',
  lastName: 'Miller',
  fullName: () => {
    return this.firstName + ' ' + this.lastName;
  },
};
console.log(info.fullName());

//? Checking what are the keys in an object
let employer = {
  name: 'Steve',
  age: 23,
  isMarried: false,
};
console.log(Object.keys(employer));
// Output: ['name', 'age', 'isMarried']

//? Checking what are the values in an object
let player = {
  name: 'L. Martinez',
  team: 'Argentina',
  goals: 33,
};

console.log(Object.values(player));
// Output:['L. Martinez', 'Argentina', 91]
