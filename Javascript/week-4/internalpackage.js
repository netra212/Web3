const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, '../../index.js', '/projects', "/index.js");

console.log(filePath);

// fs.readFile("a.txt", (err, data) => {
//     if (err){
//         console.log("Error on the file. ");
//     }
//     else{
//         console.log("Data will be display here.");
//     }
// })

console.log(__dirname);

/* 
 * "chalk": "^5.3.0", [MAJOR.MINOR.PATCH]
 * MAJOR -  Major version changes indicate significant updates or breaking changes
 * MINOR -  Minor version changes signify the addition of new features or improvements in a backward-compatible manner.
 * PATCH - Patch version changes include backward-compatible bug fixes or minor improvements that address issues without adding new features or causing breaking changes.
 */ 