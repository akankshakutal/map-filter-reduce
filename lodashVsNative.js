const { values, sumBy, reduce } = require("lodash");

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
