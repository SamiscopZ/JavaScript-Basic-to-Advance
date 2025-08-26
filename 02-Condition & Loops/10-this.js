//this keyword
let info = {
  firstName: 'Samiul',
  lastName: 'Islam',
  fullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
};
console.log(info.fullName());
