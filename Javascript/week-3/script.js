
// let counter = 0;
// function callback(){
//     document.querySelectorAll("h4")[1].innerHTML = counter;
//     counter = counter +  1;
// }
// setInterval(callback, 1000);


// Updating the element with JS. 
function updateElement(index){
    const elementUpdate = document.getElementById("todo-" + index);
    elementUpdate = "Hello, This is Netra khatri.";
    elementUpdate.parentNode.updateElement(elementUpdate);
}

// Deleting the element with JS. 
// function deleteMe(index){
//     const element = document.getElementById("todo-" + index);
//     element.parentNode.removeChild(element);
// }

// Adding an element in the DOM.
function addme(){
    const divElement = document.createElement("div");
    divElement.innerHTML = "Hii There";
    const parentElement = document.querySelector("body");
    parentElement.appendChild(divElement);
}









