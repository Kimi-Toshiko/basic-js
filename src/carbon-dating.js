const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  const ln2 = 0.693;
  const res = MODERN_ACTIVITY / Number(sampleActivity) / HALF_LIFE_PERIOD / ln2;
  
  if (typeof sampleActivity !== 'string' || isNaN(Number(sampleActivity)) || sampleActivity > 15 || sampleActivity <= 0)
    return false;
  else {
    return res === Infinity ? false : Math.floor(res);
  }
};