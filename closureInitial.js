//What are the issues in this code ?

const main = () => {
  const numbers = [1, 2, 3, 4];
  const array = [1, 2, 3, 4];

  const multipliedValues = numbers.reduce(
    (acc, number, index) => acc.concat(number * array[index]),
    []
  );

  console.log(multipliedValues);
};

main();
