// call method

const person = {
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

const person1 = {
  firstName: 'Ahmed',
  lastName: 'Shihab',
};

console.log(person.fullName.call(person1));

// apply method
const employee = {
  fullName: 'David Waugh',
  info(name, age) {
    return `Employee name is ${name}, his age and profession is ${age} years and ${this.prof2}`;
  },
};

const prof = {
  prof1: 'Executive Manager',
  prof2: 'Team Leader',
};

let introduce = employee.info.apply(prof, ['David Waugh', 54]);

console.log(introduce);

//? call invokes a function with arguments listed individually (optional), while apply invokes it with arguments provided as an array (required).

// function binding method

let data = {
  firstName: 'Joe',
  lastName: 'Root',
  display() {
    console.log(this.firstName + ' ' + this.lastName);
  },
};

setTimeout(data.display.bind(data), 3000);
