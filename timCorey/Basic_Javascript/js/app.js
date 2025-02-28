// variables
//ES5
var ES5Variable = 1;
console.log(ES5Variable);
console.log(typeof ES5Variable);
console.log(ES5Variable);
var testString = "This is a test";
var testNumber = 45.87;
var testBoolean = true;

let weight = "7.5";
let hugeString = BigInt("900719925474099"); //900719925474099ln value with more than 10^9
let boolX = true;
let x;
let foo = null; //foo has no type and value --- learn more about it
// Symbol //symbols are notation to create unique ID Eg: const s = Symbol("Pramesh")

console.log(typeof weight);
console.log(typeof hugeString);
console.log(typeof boolX);
console.log(typeof x);
console.log(typeof foo);
console.log(typeof testNumber);

//Unary operator
let y = 10;
let result = 0;
result++;
console.log(result);
result += y;
console.log(result);
console.log(result++); // the sufix will not show incremental result so answer will be 11
result--;
--result;
++result;

// Date
let currentDate = new Date();
let birthday = new Date(1992, 7, 5, 0, 0, 0);
const oldDate = new Date("2020-01-01");

console.log(currentDate);
console.log(birthday);
console.log(currentDate.getFullYear());
console.log(currentDate.getMonth());
console.log(currentDate.getUTCMonth());
console.log(currentDate.getTimezoneOffset());

// Generaly data are stored iso
console.log({ iso: currentDate.toISOString() });
console.log(`My birthday is ${birthday.toLocaleDateString()}`);

