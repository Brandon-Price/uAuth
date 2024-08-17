const express = require('express');
const cors = require('cors');
const userRoute = require("./routes/user");

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());

app.use(cors({ origin: 'http://localhost:3000' }));
app.options('*', cors({ origin: 'http://localhost:3000' }));
app.use("/api/users", userRoute);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})