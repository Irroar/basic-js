const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let len = String(n).length;
  let counter = 0;
  
  let nextNums = n;
  while (len > 1) {
    counter = 0;
    for (let i = 0; i < len; i++) {
       counter += nextNums % 10;
       nextNums = Math.floor(nextNums / 10);
    }
    len = String(counter).length;
    nextNums = counter;
  }
  return counter;
}

module.exports = {
  getSumOfDigits
};
