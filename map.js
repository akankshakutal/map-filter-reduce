const numbers = [1, 2, 3, 4];
const formattedNumber = numbers.map(number => `$${number} `);
console.log(formattedNumber.join(""));
