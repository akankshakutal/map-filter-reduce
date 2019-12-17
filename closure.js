const numbers = [1, 2, 3, 4];

// const reducer = () => {
//   return (acc, number) => acc + number;
// };
// const sum = numbers.reduce(reducer());
// console.log(sum);

const reducer = num => {
  return (acc, number) => acc.concat(number * num);
};

const multipliedValues = numbers.reduce(reducer(2), []);
console.log(multipliedValues);
