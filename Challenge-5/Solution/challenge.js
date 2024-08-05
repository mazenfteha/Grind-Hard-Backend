const fs = require('fs');  
var path = require('path')

function checkFileExtension(filePath, expectedExtension) {
    const fileExtension = path.extname(filePath).toLowerCase();
    if (fileExtension === expectedExtension) {
        console.log(`File has the expected extension: ${expectedExtension}`)
    }
    console.log(`File does not have the expected extension. Expected: ${expectedExtension}, Actual: ${fileExtension}`)
}

// Test cases 
checkFileExtension('./file1.txt', '.txt');
// Expected Output: File has the expected extension: .txt

checkFileExtension('test-files/image.png', '.jpg');
// Expected Output: File does not have the expected extension. Expected: .jpg, Actual: .png