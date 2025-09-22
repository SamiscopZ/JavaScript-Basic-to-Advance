// Math.round
let roundMath = Math.round(1.5); //Returns the nearest integer. Ex: (1.4 = 1) and (1.8 = 2)
console.log(roundMath);

// Math.ceil
let ceilMath = Math.ceil(1.9);
console.log(ceilMath); //Returns the upper integer. Ex: (1.1 = 2) and (1.8 = 2)

//Math.floor
let floorMath = Math.floor(1.8);
console.log(floorMath); //Returns the lower integer. Ex: (1.8 = 1) and (1.1 = 1)

// Math.trunc
let truncMath = Math.trunc(1.9);
console.log(truncMath); //It removes everything after decimal and return integer either positive or negative number. Ex: (1.1 = 1) or (-1.1 = 1)

// Math.sign
let signMath = Math.sign(21);
console.log(signMath); //If value is positive it returns 1, if value is negative it returns -1, if value is zero it returns 0, and if value is empty or not an number it returns NaN. Ex: (22 = 1) or (-22 = -1) or (0 = 0)

// Math.pow
let powMath = Math.pow(12, 2);
console.log(powMath); //It multiplies itself by the same number a certain number of times, as specified by the exponent. Ex: (8,2) = 64 and (12,2) = 144

// Math.sqrt
let squareMath = Math.sqrt(81);
console.log(squareMath); //Returns the square root of a number. Ex: (81 = 9)

// Math.abs
let absMath = Math.abs(-52);
console.log(absMath); //Convert the negative value into positive value. Ex: (-90 = 90)

// Min and Max
let findMin = Math.min(45, 4, 2, 354, 2, 34, 343, 54, 34, 53);
console.log(findMin); //Return the smaller number. Ex:(45, 4, 2, 354, 2, 34, 343, 54, 34, 53) = 2

let findMax = Math.max(45, 34, 5, 223, 49, 54);
console.log(findMax); //Return the larger number. Ex:(45, 34, 5, 223, 49, 54) = 223

// Math.random
let randomMath = Math.random();
console.log(randomMath); //Returns a random number between 0 & 1
