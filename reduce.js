const { reduce } = require("lodash");

const object = {
  key1: { value: 20 },
  key2: { value: 20 },
  key3: { value: 20 },
  key4: { value: 20 }
};

sum = reduce(object, (acc, entry) => acc + entry.value, 0);
console.log(sum);
