const fs = require('fs')


function readFileContent(filePath) {
    fs.readFile(filePath, 'utf8', (err , data) => {
        if (err) {
            console.log(`Error reading file: ${err.code}: ${err.message}`);
            return;
        }
        console.log('File content :');
        console.log(data);
    })
}

//Test Cases
console.log()
readFileContent('./file.txt');
readFileContent('./empty-file.txt');
readFileContent('nonExistant.txt');
console.log()