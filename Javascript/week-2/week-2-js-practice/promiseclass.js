// This is the promise classes. 
// Calling a promise is easy, defining your own promise is where things get hard.
// A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. Promises are used to handle asynchronous operations more effectively than traditional callback functions, providing a cleaner and more manageable way to deal with code that executes asynchronously, such as API calls, file I/O, or timers.

// Using a function that return a promise.
function setTimeoutPromisified(ms){
    // Below code will return the object of the Promise class. 
    let promsie_object =  new Promise(
        resolve => setTimeout(resolve, ms)
    )
    return promsie_object;
}
function callback(){
    console.log("3 Seconds time has been passed.");
}
setTimeoutPromisified(3000).then(callback);

// setTimeout function --> promises a function that it will returns something in future. 
// we can use callback based approach. 
// promise based approach. 
// setTimeoutPromisified -> returns an Object of the Promise class like this promise {pending}.

// A callback function is a function that is passed into another functionu as an argument which is then invoked inside the outer function to complete an action.
console.log("Netra is a hacker");
console.log("Netra is a hecker");

setTimeout(() => {
    console.log("I am inside settimeout.")
}, 2000);
console.log("The End of the Program.");

console.log("This is Promises");
let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if(a < 0.5){
        reject("No random number was not supporting you.");
    }
    else{
        setTimeout(() => {
            console.log("Yes, I am done.");
            resolve("Netra");
        }, 3000)
    }
})
prom1.then((a) => {
    console.log(a)
}).catch((err) => {
    console.log(err);
})

/*
 * Promise:
 Imagine that you are a top singer, and fans ask day and night for your upcomming song. 

 To get some relief, you promise to send it to them when it's published. You give your fans a list. Thye can fill in their email address, so that when the song becomes available, all subscribed parties instantly receive it. And even if somthing goes very wrong, say, a fire in the studio, so that you can't publish the song, they will still be notified. 

 Everyone is happy: you, because the people don't crowd you anymore, and fans, because, they won't miss the song. 

 This is a real-life analogy for things we often have in Programming:
 1. A "producing code" that does something and takes time. For instance, some code that loads the data over a network. That's a "singer".

 2. A "consuming code" that wants the result of the "producing code" once it's ready. Many functions may need that result. These are the "fans".

 3. A promise is a special Javascript Object that Links the "producing code" and "the consuming code" together. In term of our analogy: this is the "subscription-list". The "producing code" takes whatever time it need to produce the promised result, and the "promise" makes the result available to all of the subscribed code when it"s ready.

 */
//  The constructor syntax for a promise Object is:
 let promise = new Promise(function(resolve, reject) {
    // executor (the producing code, "singer")
 });

 /*
  * The function passed to new Promise is called executor. When new Promise is created, the executor runs automatically. It contains the "producing code" which should eventually produce the result. In terms of the analogy above: the executor is the "singer".

  * It's argument are resolve and reject are callbacks provided by Javascript itself. Our code is only inside the executor. 

  * When the executor obtains the result, be it soon or late, does not matter, it should call one of these callbacks:
  -> resolve(value) --> If the Job is finished successfully, with result value. 
  -> reject(error)  --> If an error has occured, error is the error Object. 

  * So, To summarize, executor runs automatically and attempts to performs a job. When it is finished with the attempt, it  call resolve, if it was successful or reject if there was an error.
  
  * The promise object returned by the new Promise constructor has these internal properties:
  -> state --> Initially "pending", then changes to either "fulfilled" when resolve is called or "rejected" when reject is called. 
  -> result --> Initially undefined, then changes to value when resolve (value) is called or error when reject (error) is called. 

  So, the executor eventually moves promise to one of these states:

  new Promise(executor) 
  a. state: "pending", result: "undefined" ---> resolve (value) --> state: "fulfilled", result: value.

  new Promise(executor) 
  b. state: "pending", result: "undefined" ---> reject  (error) --> state: "reject", result: error.

  */

//   Later, we'll see how "fans" can subscribe to these chanages.
//   Here's an example of a promise constructor and a simple executor function with "producing code" that takes time (via setTimeout)

let simplePromiseResolve = new Promise( function(resolve, reject) {
    // the function is executed automatically when the promise is constructed. 

    // after 1 seconds signal that the job is done with result "done"
    setTimeout(() => resolve("done"),1000);
})

// we can see the two things by running the above code:
// 1. The executor is called automatically and immediately (by new Promise).
// 2. The executor receives two arguments: resolve and reject. These functions are pre-defined by the Javascript engine, so we don't need to create them. We should only call one of them when ready. 
// After one second of "processing", the executor calls resolve("done") to produce the result. This changes the state of the promise object. 


/* 
 *  new Promise(executor)
    state: "pending", result: undefined --- resolve("done") ---> state: "fulfilled", result: "done"
    This was the example of a successful Job completion, a "fulfilled promise".
    And now an example of the executor rejecting the promise with an error: 
 */

// Now, an exmple of the executor rejecting the promise with an error.
// let simplePromiseReject = new Promise(function(resolve, reject){
//     // after 1 second signal that the job is finished with an error. 
//     setTimeout(() => reject(new Error("Whoops...!")), 1000);
// })

// This call to reject(...) moves the promise object to "rejected" state:

/*
 * 
 new Promise(executor)
 state: "pending", result:undefined --- reject (error) ---> state:"rejected", result: error.
 
 To summarize, the executor should performs a Job (Usually something that takes time) and then call resolve or reject to change the state of the corresponding promise Object.

 The Promised that is either resolved or rejected is called "settle", as opposed to an initially "pending" promise.

 **There can be only a single result or an error.**
  The executor should call only one resolve or one reject. Any state change is final. 
  All further calls of resolve and reject are ignored:
 */

let newSimplePromiseExecutor = new Promise(function(resolve, reject){
    resolve("done");
    reject(new Error("...")); // Ignored.
    setTimeout(() => resolve("...")) ; // Ignored.
})


function setTimeoutPromisified(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

function callback(){
    console.log("3 Seconds have passed.");
}

setTimeoutPromisified(3000).then(callback);

