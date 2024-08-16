
/*
 * 1. Create a public-private key-pair.
 * 2. Define a message to sign. 
 * 3. Convert message to UInt8Array. 
 * 4. Sign the message using the Private key. 
 * 5. Verify the message using the public key.


// import * as ed from "@noble/ed25519";

// const ed = require("@noble/ed25519");

async function main(){

    // Generate a secure random private key. 
    const privateKey = ed.utils.randomPrivateKey(); // returns the random private key. 
    console.log(privateKey);

    // Conver the message "Hello World" into a UInt8Array. 
    const  message = new TextEncoder().encode("Hello World");
    console.log(message);

    // Generate the public key from the private key. 
    const publicKey = await ed.getPublicKeyAsync(privateKey);
    console.log(publicKey);

    // Sign the Message. 
    const signature = await ed.signAsync(message, privateKey);
    console.log(signature);

    // Verify the Signature : This verification happens in the miners. 
    const isValid = await ed.verifyAsync(signature, message, publicKey);
    console.log(isValid);

    // Output the result. 
    console.log(isValid);
}


*/