const numbers = [1, 2, 3, 4];

const reducer = () => {
  return (acc, number) => acc + number;
};

console.log(numbers.reduce(reducer()));
