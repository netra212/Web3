function setTimeoutPromisified(duration){
    return new Promise(function(resolve){
        setTimeout(resolve, duration);
    })
}

async function solve(){
    await setTimeoutPromisified(1000);
    console.log("Hi");

    await setTimeoutPromisified(3000);
    console.log("Hello");

    await setTimeoutPromisified(5000);
    console.log("Hii There..!");
}

solve();

console.log("After solve function.");

// 

const fs = require("fs");

function setTimeoutPromisified(duration){
    return new Promise(function(resolve){
        setTimeout(resolve, duration);
    });
}

function readFileAsync(){
    return new Promise(function(resolve, reject){
        fs.readFile("hellol.txt", "utf-8", function(err, data){
            if(err){
                reject("File not found error is here.");
            }
            else{
                resolve(data);
            }
        })
    })
}
readFileAsync().then(function(x){
    console.log("Files has been read.");
}).catch(function(e){
    console.log(e);
})


