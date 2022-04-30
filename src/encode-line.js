const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let tempStr = '';
  let tempChar = str.charAt(0);
  let counter = 1;
  for (let i = 1; i < str.length + 1; i++) {
    if (str.charAt(i) === tempChar) { counter++; }
    else { 
    	tempStr += counter === 1 ? tempChar :  counter + tempChar;
      tempChar = str.charAt(i);
      counter = 1;
    }
  }
  return tempStr;
}

module.exports = {
  encodeLine
};
