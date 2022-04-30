const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (arguments.length === 0) { return 'Unable to determine the time of year!'; }
  try {
    date.getTime();
    if (Object.prototype.toString.call(date) !== "[object Date]" || isNaN(date)) {
      throw new Error ('Invalid date!');
    }
    let seasons = {
      'spring' : [2, 3, 4],
      'summer' :[5, 6, 7],
      'fall' : [8, 9, 10],
      'winter' : [11, 0, 1]
    }
    for (const [key, value] of Object.entries(seasons)) {
      if (value.includes(date.getMonth())) { return key; }
    }
  }
  catch(e)
  {
    throw new Error ('Invalid date!');
  }
}

module.exports = {
  getSeason
};
