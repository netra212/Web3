/*
 * In order to build the system that takes an input string and output a SHA-256 hash that starts with `0000`. 
 * Points to be consider:
 * => SHA-256 is a cryptographic has function that produces a 256-bits hash value. It's an determinstic algorithms, means the same input always produces same output. 
 * 
 */

const cryptographicAlgorithms = require('crypto');

function findHashStartWithZeros(prefix){
    let inputNounce = 0;
    while(true){
        let nounceToString = inputNounce.toString();
        let generatedHash = cryptographicAlgorithms.createHash('sha256').update(nounceToString).digest('hex');
        if(generatedHash.startsWith(prefix)){
            return {
                inputNounce : nounceToString,
                generatedHash : generatedHash
            };
        }
        inputNounce++;
    }
}
const result = findHashStartWithZeros('0000');
console.log(`Input: ${result.inputNounce}`);
console.log(`Generated Hash : ${result.generatedHash}`);









