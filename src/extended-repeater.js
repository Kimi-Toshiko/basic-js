const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options, finalResult) {
  let res = '';

  const pureStr = () => {
    if(typeof str === 'string')
      return str;
    else if (str === null)
      return 'null';
    else
      return str.toString();
  };

  const repeatTimes = () => options.repeatTimes ? options.repeatTimes : 0;
  const separator  = () => options.separator ? options.separator : '+';
  const addition = () => {
    if (typeof options.addition === 'string')
      return options.addition;
    else if (options.addition === null)
      return 'null';
    else
      return options.addition.toString();
  };
  const additionSeparator = () => options.additionSeparator ? options.additionSeparator : '';
  const additionRepeatTimes = () => options.additionRepeatTimes ? options.additionRepeatTimes : 1;

  if (options.addition !== undefined) {
    let strWithAddition = `${pureStr()}${addition()}`;

    for (let i = 0; i < additionRepeatTimes() - 1; i++) {
      strWithAddition += `${additionSeparator()}${addition()}`;
    }

    res += strWithAddition;

    for (let i = 0; i < repeatTimes() - 1; i++) {
      res += `${separator()}${strWithAddition}`;   
    }
  }
  else {
    res += pureStr();

    for (let i = 0; i < repeatTimes() - 1; i++) {
      res += `${separator()}${pureStr()}`;     
    }
  }

  return res;
};