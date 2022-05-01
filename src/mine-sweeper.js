const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let temp = [];
  for (let i = 0; i < matrix.length; i++) {
  	let temp2 = [];
  	for (let j = 0; j < matrix[i].length; j++) {
    	let counter = 0;
    	// right sibling
      if (j !== matrix[i].length - 1 && matrix[i][j+1]) { counter++; }
      // left sibling
      if (j !== 0 && matrix[i][j-1]) { counter++;}
      
      // top sibling
      if (i !== 0) {
        if (matrix[i-1][j] === true) { counter++; }
        // top left sibling
        if (j !== 0 && matrix[i-1][j-1]) { counter++; } 
         // top right sibling
        if (j !== matrix[i].length - 1 && matrix[i-1][j+1]) { counter++; }
        	
      }
      //bottom sibling
      if (i !== matrix.length - 1) { 
        if (matrix[i+1][j] === true) { counter++; }
        // bottom right sibling
        if (j !== matrix[i].length - 1 && matrix[i+1][j+1]) { counter++; }	
        // bottom left sibling
        if (j !== 0 && matrix[i+1][j-1]) { counter++; }
      }
      
      temp2.push(counter);
    }
    
    temp.push(temp2);
  }
  
	return temp;
}

module.exports = {
  minesweeper
};
