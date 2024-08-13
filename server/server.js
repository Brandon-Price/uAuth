const express = require('express');
const userRoute = require("./routes/user");

const app = express();
const port = process.env.PORT || 5000;

app.use("/api/users", userRoute);

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})