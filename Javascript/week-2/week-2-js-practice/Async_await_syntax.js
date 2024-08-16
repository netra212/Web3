// Async await syntax
// The Async & await syntax in the Javascript Provides a way to write the asynchronous code that looks and behave like synchronous code, making it easier to read and maintain. 
// It builds on the top of the Promise and allows you to avoid chaining .then() & .catch() method while still working with asynchronous operations. 
// async/await is essentially syntactic sugar on top of Promises. 

function setTimeoutPromisified(ms){
    new Promise(resolve => setTimeout(resolve, ms));
}

async function solve(){
    await setTimeoutPromisified(1000);
    console.log("Hii...!!");

    await setTimeoutPromisified(3000);
    console.log("Hello...!");

    await setTimeoutPromisified(5000);
    console.log("Hello There..!.!");
}

solve()

// Note: We are allowed to call the await only inside a function if that function is async. 
// We cannot have the top level await. 








