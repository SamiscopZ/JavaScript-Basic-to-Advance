// get keyword

//? For example: You want to take a full name using fistName and lastName properties so that it can be used later.

//* To do that... First, make an object. Add some properties and values. Inside the object write "get" keyword. Then give a name and parentheses "()". Now, add a curly braces "{}". At last, getting firstName and lastName properties using this keyword.

const person = {
  firstName: 'John',
  lastName: 'Doe',
  language: 'en ',
  get fullName() {
    return this.firstName + ' ' + this.lastName;
  },
};

console.log(person.fullName);

// set keyword

//* To use set do first step. Then write "set" keyword. Then give a name and parameter called lang. Now, add a curly braces "{}". Now, language assign lang using this keyword. At last, call person1.lang and give you value.

const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  language: 'en',
  set lang(lang) {
    this.language = lang;
  },
};

console.log((person1.lang = 'bn'));

//! Remainder: "get" is used to read a property and it doesn't take any parameter, but "set" is used to update a property and take only one parameter to set a value.
