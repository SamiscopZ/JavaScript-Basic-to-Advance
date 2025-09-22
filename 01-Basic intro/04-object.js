//Object

let person = {
  firstName: 'David',
  lastName: 'Warner',
  age: 34,
};

console.log(person);

const samsung = {
  model: 'Samsung A22 5G',
  display: 'Oled',
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
