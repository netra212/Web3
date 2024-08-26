// Create a command line interface that lets the user specify a file path and the nodejs process counts the number of words inside it.
const fs = require("fs");
const {Command} = require("commander");
const program = new Command();

program
    .name('Counter')
    .description('CLI to do file based tasks')
    .version('0.8.0');

program.command('count')
    .description('Count the number of lines in a file')
    .argument('<file>', 'file to count')
    .actino( (file)=> {
        fs.readFile(file, 'utf-8', (err, data) => {
            if(err){
                console.log("Error", err);
            }
            else{
                // console.log("Data", data);
                const lines = data.split('\n').length;
                console.log(`There are ${lines} lines in ${files}`);
            }
        });
    });

program.parse()

// Every promise is a thenable. 
// Every thenable is not a promise. 