const fs = require('fs')

function writeToFile(filePath, content) {
    fs.writeFile(filePath, content, (err) => {
        if (err) {
            console.log(`Error writing to file: ${err.code}: ${err.message}`);
            return
        }
        console.log('Data written to output.txt');
    })
}

// Test Cases :
console.log();
writeToFile('./output.txt', 'Sample content.');
writeToFile('nonexistent-folder/output.txt', 'Content in a non-existent folder.');
console.log();
