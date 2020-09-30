// MAIN
const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let resArr = [];
  if (Array.isArray(members) === false)
    return false;
  else {
    members.map(el => {
      if (typeof el === 'string') {
        let noWhitespace = el.trim().split("");
        resArr.push(noWhitespace[0].toUpperCase());
      }
    })
  }
  return resArr.sort().join("");
};