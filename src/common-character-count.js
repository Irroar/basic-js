const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let commonCounter = 0;

  let charsCounter1 = [...s1].reduce((set, char) => (set[char] = (set[char] || 0) + 1, set), {});
  let charsCounter2 = [...s2].reduce((set, char) => (set[char] = (set[char] || 0) + 1, set), {});

  for (let char in charsCounter1) {
    if (charsCounter2.hasOwnProperty(char)) {
      commonCounter += Math.min(charsCounter1[char], charsCounter2[char]);
    }
  }

  return commonCounter;
}

module.exports = {
  getCommonCharacterCount
};
