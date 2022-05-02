const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isSimple=true)
  {
    this.isSimple = isSimple;
    this.matrix = [];
    this.associatedObj = { };   
  }

  genetateMatrix() {
    let startCharCode = 65;
    let endCharCode = 90;
    let row = [];
    let index = 0;
    for (let i = startCharCode; i <= endCharCode; i++) {
      let char = String.fromCharCode(i);
      row.push(char);
      this.associatedObj[char] = index;
      index++;
    }
    
    for (let i = 0; i < row.length; i++) {
      if (i !== 0) {
        let shifted = row.shift();
        row.push(shifted);
      }
      this.matrix.push(Array.from(row));
    }
  }

  encrypt(message, key) {
    this.genetateMatrix()
    if (!message || !key) { throw new Error('Incorrect arguments!'); }
    message = message.toUpperCase();
    key = key.toUpperCase();
    key = key.padEnd(message.length, key);
    
    let newstr = '';

    let offset = 0;
    for (let i = 0; i < message.length; i++) {
      if (this.associatedObj.hasOwnProperty(message[i])) {
        newstr += this.matrix[this.associatedObj[key[i - offset]]][this.associatedObj[message[i]]]; }
      else { newstr += message[i]; offset++; }
    }
    return this.isSimple ? newstr : newstr.split('').reverse().join('');
  }
  decrypt(message, key) {
    this.genetateMatrix()
    if (!message || !key) { throw new Error('Incorrect arguments!'); }
    message = message.toUpperCase();
    key = key.toUpperCase();
    key = key.padEnd(message.length, key);

    
    let newstr2 = '';
    let offset = 0;
    for (let i = 0; i < message.length; i++) {
      let rowIndex = this.associatedObj[key[i - offset]];
      let colIndex = this.matrix[rowIndex].findIndex(item => item === message[i]);
      if (colIndex < 0) { newstr2 += message[i];  offset++;}
      else {
        for (let char in this.associatedObj){
          if (this.associatedObj[char] === colIndex) { newstr2 += char; }
        }
      }
    }
    return this.isSimple ? newstr2 : newstr2.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
