// MAIN
const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date == null || date == undefined)
    return 'Unable to determine the time of year!';
  else if (date instanceof Date && !isNaN(date.valueOf())) {
    if (date.getMonth() === 11 || date.getMonth() < 2)
      return 'winter';
    else if (date.getMonth() >= 2 && date.getMonth() < 5)
      return 'spring';
    else if (date.getMonth() >= 5 && date.getMonth() < 8)
      return 'summer';
    else
      return 'autumn';
  }
  else
    throw new Error('Input is not a date');
};
















// EXAMPLE
// function getSeason(date) {
//   if (date == null || date == undefined) {
//     console.log('Unable to determine the time of year!');
//     return 'Unable to determine the time of year!';
//   }
//   else if (date instanceof Date && !isNaN(date.valueOf())) {
//     if (date.getMonth() === 11 || date.getMonth() < 2)
//       return 'winter';
//     else if (date.getMonth() >= 2 && date.getMonth() < 5)
//       return 'spring';
//     else if (date.getMonth() >= 5 && date.getMonth() < 8)
//       return 'summer';
//     else
//       return 'autumn';
//   }
//   else
//     throw new Error('Input is not a date');
// }

// const dateObj = new Date(2134, 2, 17, 11, 27, 4, 321);
// getSeason();