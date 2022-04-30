const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let temp = [];
  for (let item of domains) {
    let a = item.split('.').reverse().map(a => '.' + a);
    let tempV = '';
    for (let subitem of a) {
      tempV += subitem;
      temp.push(tempV); 
    }  
  }
  return temp.reduce( (acc, item) => (acc[item] = (acc[item] || 0) + 1, acc), {} );
}

module.exports = {
  getDNSStats
};
