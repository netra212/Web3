// write a code that. 
// 1. logs `hi` after 1 seconds. 
// 2. logs `hello` 3 seconds after step 1. 
// 3. logs  `hello there` 5 seconds after step 2. 
console.log("I am printing the solution of the above code: -");
function step3Done(){
    console.log("Hello There.");
}
function step2Done(){
    console.log("Hello");
    setTimeout(step3Done, 5000);
}
function step1Done(){
    console.log('Hi');
    setTimeout(step2Done, 3000);
}
setTimeout(step1Done, 1000)

console.log("****Same Tasks is Accomplished by the Promisified Version:- ****");
function setTimeoutPromisified(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

setTimeoutPromisified(1000).then(function(){
    console.log("Hi");
    return setTimeoutPromisified(3000);
}).then(function(){
    console.log("Hello");
    return setTimeoutPromisified(5000);
})
.then(function(){
    console.log("Hello There..!");
})






























