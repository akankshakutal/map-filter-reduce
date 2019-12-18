const { values, sumBy } = require("lodash");

//example 1
const fruitNames = ["Apple", "Mango", "Banana", "Orange"];
let counts = [];
fruitNames.forEach(fruitName => counts.push(fruitName.length));
console.log(counts);

//example 2
const statusOfWeek = {
  week1: { value: 20, status: "SAVED" },
  week2: { value: 20, status: "UNSAVED" },
  week3: { value: 20, status: "LOCKED" },
  week4: { value: 20, status: "LOCKED" }
};
const keys = Object.keys(statusOfWeek);
const lockedWeeks = [];

keys.forEach(week => {
  if (statusOfWeek[week].status == "LOCKED") {
    lockedWeeks.push(statusOfWeek[week]);
  }
});
console.log(lockedWeeks);

//example 3
const object = {
  key1: { value: 20 },
  key2: { value: 20 },
  key3: { value: 20 },
  key4: { value: 20 }
};
const valueObjects = values(object);
let sum = sumBy(valueObjects, object => object.value);
console.log(valueObjects);
console.log(sum);

//example 4
const main = () => {
  const numbers = [1, 2, 3, 4];
  const array = [1, 2, 3, 4];
  const multipliedValues = [];

  numbers.forEach((number, index) =>
    multipliedValues.push(number * array[index])
  );

  console.log(multipliedValues);
};

main();

//example 5
const printer = name => console.log(name);
let name = "John";
const getPrinter = () => {
  const name = "Peter";
  return () => {
    printer(name);
  };
};
name = "devid";
let work = getPrinter();
work();
