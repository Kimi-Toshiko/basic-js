// MAIN
const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let res = new Array;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next') {
      if (arr[i + 1] != null || arr[i + 1] != undefined) {
        if (typeof arr[i + 2] !== 'string')
          res.push(arr[i + 2]);
      }
    }
    else if (arr[i] === '--discard-prev') {
      if (arr[i - 1] != null || arr[i - 1] != undefined) {
        if (arr[i - 2] !== '--double-next')
          res.pop();
        else {
          res.pop();
          res.pop();
        }          
      }
    }
    else if (arr[i] === '--double-next') {
      if (arr[i + 1] != null || arr[i + 1] != undefined) {
        res.push(arr[i + 1]);
        res.push(arr[i + 1]);
      }
    }
    else if (arr[i] === '--double-prev') {
      if (arr[i - 1] != null || arr[i - 1] != undefined) {
        if (arr[i - 2] !== '--discard-next') {
          if (arr[i - 2] !== '--double-next')
            res.push(arr[i - 1]);
        }          
        else {
          res.pop();
        }
      }
    }
    else
      res.push(arr[i]);
  }
  
  return res;
};













// function transform(arr) {
//   let res = new Array;
  
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === '--discard-next') {
//       if (arr[i + 1] != null || arr[i + 1] != undefined) {
//         if (typeof arr[i + 2] !== 'string')
//           res.push(arr[i + 2]);
//       }
//     }
//     else if (arr[i] === '--discard-prev') {
//       if (arr[i - 1] != null || arr[i - 1] != undefined) {
//         if (arr[i - 2] !== '--double-next')
//           res.pop();
//         else {
//           res.pop();
//           res.pop();
//         }          
//       }
//     }
//     else if (arr[i] === '--double-next') {
//       if (arr[i + 1] != null || arr[i + 1] != undefined) {
//         res.push(arr[i + 1]);
//         res.push(arr[i + 1]);
//       }
//     }
//     else if (arr[i] === '--double-prev') {
//       if (arr[i - 1] != null || arr[i - 1] != undefined) {
//         if (arr[i - 2] !== '--discard-next') {
//           if (arr[i - 2] !== '--double-next')
//             res.push(arr[i - 1]);
//         }          
//         else {
//           res.pop();
//         }
//       }
//     }
//     else
//       res.push(arr[i]);
//   }

//   console.log(res);
//   return res;
// }

// transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]);