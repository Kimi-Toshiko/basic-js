const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let counter = 0;
  const takeaway = matrix.map(el.map(el => {
    if (el === '^^')
      counter++;
  }))
  return counter;
};