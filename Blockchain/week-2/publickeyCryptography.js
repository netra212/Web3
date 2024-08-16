// Encodings:
// Bytes are cools but highly unreadable. Image telling someone Like this:
// My name is 00101011101010101020
// It is easier to encode data so it is more human readable. Some comon encoding include:- 

// 1. Ascii. 

/*
 * 1 character = 7 bits.
 * Every byte corresponds to a text on the computer. 
 */

// Bytes to Ascii Conversion:
function bytesToAscii(byteArray) {
    return byteArray.map(byte => String.fromCharCode(byte)).join('');
}
  
// Example usage:
const bytes = [72, 101, 108, 108, 111]; // Corresponds to "Hello"
const asciiString = bytesToAscii(bytes);
console.log(asciiString); // Output: "Hello"


// Ascii to Bytes:
function asciiToBytes(asciiString) {
    const byteArray = [];
    for (let i = 0; i < asciiString.length; i++) {
      byteArray.push(asciiString.charCodeAt(i));
    }
    return byteArray;
}
// Example usage:
const ascii = "Hello";
const byteArray = asciiToBytes(ascii);
console.log(byteArray); // Output: [72, 101, 108, 108, 111]


// UInt8Array to ascii
function bytesToAscii(byteArray) {
    return new TextDecoder().decode(byteArray);
}
// Example usage:
const bytes1 = new Uint8Array([72, 101, 108, 108, 111]); // Corresponds to "Hello"
const asciiString1 = bytesToAscii(bytes1);
console.log(asciiString1); // Output: "Hello"


// Ascii to UInt8Array
function asciiToBytes(asciiString) {
    return new Uint8Array([...asciiString].map(char => char.charCodeAt(0)));
  }
  
// Example usage:
const ascii1 = "Hello";
const byteArray1 = asciiToBytes(ascii1);
console.log(byteArray1); // Output: Uint8Array(5) [72, 101, 108, 108, 111]

// 2. Hex. 
// 1 character = 4 bits
// A single hex character can be any of the 16 possible values: 0-9 and A-F.
function arrayToHex(byteArray) {
    let hexString = '';
    for (let i = 0; i < byteArray.length; i++) {
      hexString += byteArray[i].toString(16).padStart(2, '0');
    }
    return hexString;
  }
  
// Example usage:
const byteArray_ = new Uint8Array([72, 101, 108, 108, 111]); // Corresponds to "Hello"
const hexString1 = arrayToHex(byteArray_);
console.log(hexString1); // Output: "48656c6c6f"

// Hext to Array:
function hexToArray(hexString) {
    const byteArray = new Uint8Array(hexString.length / 2);
    for (let i = 0; i < byteArray.length; i++) {
      byteArray[i] = parseInt(hexString.substr(i * 2, 2), 16);
    }
    return byteArray;
}
  
// Example usage:
const hex = "48656c6c6f";
const byteArrayFromHex = hexToArray(hex);
console.log(byteArrayFromHex); // Output: Uint8Array(5) [72, 101, 108, 108, 111]

// 3. Base64.
// Base64 encoding uses 64 different characters (A-Z, a-z, 0-9, +, /), which means each character can represent one of 64 possible values.
const uint8Array = new Uint8Array([72, 101, 108, 108, 111]);
const base64Encoded = Buffer.from(uint8Array).toString("base64");
console.log(base64Encoded);

// 4. Base58.
// It is similar to Base64 but uses a different set of characters to avoid visually similar characters and to make the encoded output more user-friendly
// Base58 uses 58 different characters:
// Uppercase letters: A-Z (excluding I and O)
// Lowercase letters: a-z (excluding l)
// Numbers: 1-9 (excluding 0)

// Encode.
const bs58 = require('bs58');

function uint8ArrayToBase58(uint8Array) {
  return bs58.encode(uint8Array);
}

// Example usage:
const byteArray_base58 = new Uint8Array([72, 101, 108, 108, 111]); // Corresponds to "Hello"
const base58String = uint8ArrayToBase58(byteArray_base58);
console.log(base58String); // Output: Base58 encoded string

// Decode:
const bs58 = require('bs58');

function base58ToUint8Array(base58String) {
  return bs58.decode(base58String);
}

// Example usage:
const base58 = base58String; // Use the previously encoded Base58 string
const byteArrayFromBase58 = base58ToUint8Array(base58);
console.log(byteArrayFromBase58); // Output: Uint8Array(5) [72, 101, 108, 108, 111]




