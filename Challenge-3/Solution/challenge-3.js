const { exec } = require("child_process");


function executeCommand(command) {
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log('Command Output:');
            console.log(`${stderr}`);
            return;
        }
        console.error('Command Error Output:');
        console.log(`stdout: ${stdout}`);
    });
}

// Test Cases
executeCommand('ls -la');
// Expected Output: (output of ls -la)

executeCommand('echo "Hello, Node.js!"');
// Expected Output: Hello, Node.js!