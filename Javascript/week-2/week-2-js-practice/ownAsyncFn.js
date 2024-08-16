
// Defining your own async function:-

// Q: Write a function that
// - Reads the contents of a file
// - Trims the extra space from the left and right
// - Writes it back to the file

const fs = require("fs");

// cleanFile() -> is a Promisified function. 
// It returns the new Promise() -> object, which contains the resolve function.
function cleanFile(filePath, cb){
    // new Promise is object which contains the resolve function, and Inside the resolve function, we performs the file read and write operations. 
    return new Promise(function (resolve) {
        fs.readFile(filePath, "utf-8", function(err, data){
            data = data.trim();
            fs.writeFile(filePath, data, function(){
                resolve();
            })
        })
    })
}

async function main(){
    await cleanFile("a.txt");
    console.log("Done Cleaning File.");
}
main();

