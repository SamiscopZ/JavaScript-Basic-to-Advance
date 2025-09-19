//class

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

// class expression
let person = class {
  constructor(name, email, phone) {
    this.name = name;
    this.email = email;
    this.phone = phone;
  }
};

const info = new person('John', 'mrjohn@gmail.com', +11023100000);

console.log(info);

//first class citizen

function factor(beClass) {
  return new beClass();
}

let aFunc = factor(
  class {
    sayHi() {
      console.log('Hello bro');
    }
  }
);

aFunc.sayHi();

// class inheritance
class Pc {
  constructor(Brand) {
    this.Brand = Brand;
  }

  now() {
    return this.Brand + ' is my main machine,';
  }
}

class PcModel extends Pc {
  constructor(Brand, Model) {
    super(Brand);
    this.Model = Model;
  }

  see() {
    return this.now() + ' And model is ' + this.Model;
  }
}

let configuration = new PcModel('Acer', 'Aspire 1');

console.log(configuration.now());
