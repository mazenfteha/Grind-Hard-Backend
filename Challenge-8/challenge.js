const express = require("express");
const app = express();

app.use(express.json());



app.get("/positive", (req, res, next) => {
    const number = parseInt(req.query.number, 10)
    if (!Number.isInteger(number) || number <= 0) {  
        const err = new Error('The parameter "number" must be a positive integer.');  
        err.status = 400; 
        return next(err);  
    }  
    res.status(200).send(`You have provided a valid number: ${number}`);  
});

const errHandler = ((err, req, res, next) => {
    const status = err.status || 500;  
    res.status(status).send({ error: err.message });  
}) 


app.use(errHandler)

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
