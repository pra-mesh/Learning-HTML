# JavaScript

It is a client side scripting language. Used to make the web page interactive.
We can use javascript in a webpage in various way:

1. Internal:

   Code is written inside a \<script>\</script> tag
2. Inline:

   Event as interaction can be scripted with in the tag we use Inline

3. External

   We use script tag with src to to load a external script file.

Generally we load a script file or write a script code at the bottom of the body part of a html.

## Comments

1. Single Line Comment \//
2. Multi Line Comment \/\*\*/

## Variable

Variables are containers thta hold data. Variables are used to store data in a memory location.

Types of variable

ES5 (ECMAScript 5)

- _var_

  var is a legacy variable declarations that was introduced on ES5 it holds data that can be changed do not use var for new projects

ES6 (ECMAScript 6)

- _let_

  if designed to change in future we use let

- _const_
  if designed to change same we use const

## DataTypes

### Primitive

1. String let color ="Yellow";
2. Number let weight ="7.5";
3. Bigint let hugeString = BigInt ("900719925474099") //900719925474099ln value with more than 10^9
4. Boolean let x = true;
5. Undefined let x;
6. NUll let foo = null; //foo has no type and value --- learn more about it
7. Symbol //symbols are notation to create unique ID Eg: const s = Symbol("Pramesh")

By default JS takes all variable as an string so whenever a variable with stirng and numeric value we try to perfom math operation it might not work as expected.

### The object Data Type (Complex Data Type) or Non-Primitive data

Non-primitive data types are modifiable or mutable.

1. Object
2. array
3. date

### Checking Data types

```js
console.log(typeof Data);
```

## Hoisting

It is a behavior where variable and functionn is declarations are moved to the top of their containing scope during the compilation phase, before the code is executed. Only declaration are hoisted not insitalizations

## Unary Operator

```js
let x = 10;
let result = 0;
result++;
result += x;
```

## Date

we can use date object to create a data varaible. It is a complex data type;

```js
let currentDate = new Date();
let birthday = new Date(1992, 7, 5, 0, 0, 0);
```

## String interpolation

We use a back tick ` with a \${data/operation} for string interpolation in javascript.

## Array

Array is collation of similar data type.We define array in js using square bracket []. Array are zero based counting system andthe value are accessed by square bracket and index [0].
If out of range value is readed it will return undefined.
