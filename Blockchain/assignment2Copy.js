
const cryptographicLibrary = require("crypto");

function functionToGenerateInputCryptoHash(prefix){
    let input = 0;
    while(true){
        let inputString = "100xdevs" + input.toString();
        let hash = cryptographicLibrary.createHash("sha256").update(inputString).digest("hex");
        if(hash.startsWith(prefix)){
            return {
                input: inputString,
                hash: hash
            }
        }
        input++;
    }
}


const result = functionToGenerateInputCryptoHash("00000");











