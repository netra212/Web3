const myPromises = new Promise((resolve, reject)=> {
    let message = true;
    if (message){
        console.log("Promises Successfully Executed.....!");
    }
    else{
        console.log("Execution Failed.");
    }
})

myPromises.then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error);
})

// What is callback hell ?
function callback(){
    console.log("Hi");
}
setTimeout(function(){
    console.log("Hi");
    setTimeout(function(){
        console.log("Hello");
        setTimeout(function(){
            console.log("Hello There..");
        }, 5000);
    }, 3000);

}, 1000);

// Solution Using the Promisified. 
function setTimeoutPromisified(duration){
    return new Promise(function(resolve){
        setTimeout(resolve, duration);
    })
}
function callback(){
    console.log("1 second has passed");
}

// Promise chaining.
setTimeoutPromisified(1000).then(function(){
    console.log("Hi");
    return setTimeoutPromisified(3000);
}).then(function(){
    console.log("Hello");
    return setTimeoutPromisified(5000);
}).then(function(){
    console.log("Hi There...!");
})

console.log("Outside the call-back hell.");

