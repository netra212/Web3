// Hello this files contains the async code of the javascript. 

const fs = require("fs");
const contents = fs.readFileSync("a.txt", "utf-8");
console.log(contents);
fs.close();

const contents2 = fs.readFileSync("b.txt", "utf-8");
console.log(contents2);





