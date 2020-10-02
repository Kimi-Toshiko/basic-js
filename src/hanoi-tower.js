const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let ResObj = new Object;

  const sum = (1 * (1 - (2 ** disksNumber))) / (1 - 2); //sum of n members of geometric progression
  const spentTime = Math.floor(sum / (turnsSpeed / 3600));

  ResObj.turns = sum;
  ResObj.seconds = spentTime;

  return ResObj;
};