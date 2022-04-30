const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let defaultSep = '+';
  let defaultAdditionSep = "|";
    
  let addString = '';
  let repeatedString = '';
  if (options.hasOwnProperty('addition')) {
    addString = options.addition;
    if (options.hasOwnProperty('additionRepeatTimes')) {
      for (let i = 1; i < options.additionRepeatTimes; i++) {
        addString +=  options.hasOwnProperty('additionSeparator') ? 
                      options.additionSeparator + options.addition :
                      defaultAdditionSep + options.addition;
      }
    }
  }
  repeatedString = str + addString;
  if (options.hasOwnProperty('repeatTimes')) { 
    for (let i = 1; i < options.repeatTimes; i++) {
      repeatedString += options.hasOwnProperty('separator') ? options.separator + str + addString : defaultSep + str + addString;
    }
  }
  
  return repeatedString;
}

module.exports = {
  repeater
};
