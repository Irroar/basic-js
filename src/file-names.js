const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let tempStorage = [];
  for (let name of names) {
  	if (tempStorage.includes(name)) {
    	let newName = `${name}(1)`;
      if (tempStorage.includes(newName)) {
      	let index = Number(newName.slice(-2, -1));
        console.log('index: ' + index)
        newName = `${name}(${index+1})`;
      }
    	tempStorage.push(newName);
    }
    else {
    	tempStorage.push(name);
    }
  }
  
  return tempStorage;
}

module.exports = {
  renameFiles
};
