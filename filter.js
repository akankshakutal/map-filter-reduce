const { filter } = require("lodash");

const statusOfWeek = {
  week1: { value: 20, status: "SAVED" },
  week2: { value: 20, status: "UNSAVED" },
  week3: { value: 20, status: "LOCKED" },
  week4: { value: 20, status: "LOCKED" }
};

const lockedWeeks = filter(statusOfWeek, week => week.status == "LOCKED");

console.log(lockedWeeks);
