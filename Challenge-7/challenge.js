const express = require("express");
const app = express();

app.use(express.json());

app.use(requestLoggerMiddleware);
app.get("/request", (req, res) => {
    res.status(200).json({ message : "this request should log" });
});


function requestLoggerMiddleware(req, res, next) {
    const timeStamp = new Date()
    const requestMethod = req.method
    console.log(
        `Timestamp: ${timeStamp} - Request method: ${requestMethod} request received`
    );
    next();
}

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
