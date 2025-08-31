class Car {
  constructor(model, year) {
    this.model = model;
    this.year = year;
  }
}

let car = new Car('Toyota', 2012);
let car1 = new Car('BMW', 2018);
let car2 = new Car('Tata', 2020);
let car3 = new Car('Tesla', 2022);

console.log(car, car1, car2, car3);

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const user1 = new Person('David', 32);
const user2 = new Person('Smith', 45);

console.log(user1, user2);
