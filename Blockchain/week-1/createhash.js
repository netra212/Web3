/*
 * Give me an input string that outputs a SHA-256 hash that  starts with `00000` . 
 ** How will you do it?** 
 * A: You will have to brute force until you find a value that starts with `00000`**
 *
*/

const crypto = require('crypto');

// Function to find an input string that produces a hash starting with '00000'
function findHashWithPrefix(prefix) {
    let input = 0;
    while (true) {
        let inputStr = input.toString();
        let hash = crypto.createHash('sha256').update(inputStr).digest('hex');
        if (hash.startsWith(prefix)) {
            return { input: inputStr, hash: hash };
        }
        input++;
    }
}

// Find and print the input string and hash
const result = findHashWithPrefix('00000');
console.log(`Input: ${result.input}`);
console.log(`Hash: ${result.hash}`);

// 
// ### Assignment #2
// What if I ask you that the `input string` should start with `100xdevs` ? How would the code change?

const crypto = require('crypto');

// Function to find an input string that produces a hash starting with '00000'
function findHashWithPrefix(prefix) {
    let input = 0;
    while (true) {
        let inputStr = "100xdevs" + input.toString();
        let hash = crypto.createHash('sha256').update(inputStr).digest('hex');
        if (hash.startsWith(prefix)) {
            return { input: inputStr, hash: hash };
        }
        input++;
    }
}

// Find and print the input string and hash
const result1 = findHashWithPrefix('00000');
console.log(`Input: ${result1.input}`);
console.log(`Hash: ${result1.hash}`);


// What if I ask you to find a nonce for the following input - 
// harkirat => Raman | Rs 100
// Ram => Ankit | Rs 10
const crypto = require('crypto');

// Function to find an input string that produces a hash starting with '00000'
function findHashWithPrefix(prefix) {
    let input = 0;
    while (true) {
        let inputStr = `
harkirat => Raman | Rs 100
Ram => Ankit | Rs 10
` + input.toString();
        let hash = crypto.createHash('sha256').update(inputStr).digest('hex');
        if (hash.startsWith(prefix)) {
            return { input: inputStr, hash: hash };
        }
        input++;
    }
}

// Find and print the input string and hash
const result2 = findHashWithPrefix('00000');
console.log(`Input: ${result2.input}`);
console.log(`Hash: ${result2.hash}`);















