// some more classes in JS..
// Date. 
const now = new Date(); // Gives the current date and time now. 
console.log(now);

// Converting into the International standard time format.
console.log(now.toISOString()); // Gives the output in the ISO format. 

// Map. 
const map = new Map();
map.set('name', 'Netra');
map.set('age', 24);
console.log(map.get('name'));
console.log(map.get('age'));
