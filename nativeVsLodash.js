const { range, map } = require("lodash");

const numbers = range(0, 100);

const something = map(numbers, x => x * 2);
console.log(something);

const something = numbers.map(x => x * 2);
console.log(something);
