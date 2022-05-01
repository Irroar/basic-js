const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (sampleActivity === undefined) { return false; }
  if (typeof sampleActivity !== 'string') { return false; }
  if (!Number(sampleActivity)) { return false; }
	let ln = 0.693;
  let t = Math.log(MODERN_ACTIVITY / Number(sampleActivity)) / (ln / HALF_LIFE_PERIOD);
  if (t < 0 || isNaN(t)) { return false; }
  return Math.ceil(t);
}

module.exports = {
  dateSample
};
