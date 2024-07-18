const connectDB = require("./connectToDB/connect")

const express = require('express');
const app = express();

const materialRoute = require('./router/material')

app.use(express.json());

app.use('/api/v1/materials',materialRoute);

app.all('/', (req, res, next) => {
    res.status(400).send("soory can not find what your looking for");
});
const port = process.env.PORT || 3000

require("dotenv").config();

const start = async ()=> {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () => {
        console.log(`Server started on port ${port}`);
    });
}
start()
