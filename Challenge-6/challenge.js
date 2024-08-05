const express = require('express')
const app = express();

app.use(express.json());


app.get('/greet', greetHandler)

function greetHandler(req, res) {
    const name = req.query.name;
    if (name) {
        res.status(200).json(`Hello, ${name}!`)
    } else {
        res.status(200).json(`Hello, Guest!`)
    }
}

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});