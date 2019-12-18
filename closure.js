const main = () => {
  const numbers = [1, 2, 3, 4];
  const array = [1, 2, 3, 4];

  const reducer = num => {
    return (acc, number, index) => acc.concat(number * num[index]);
  };

  const multipliedValues = numbers.reduce(reducer(array), []);
  console.log(multipliedValues);
};

main();
