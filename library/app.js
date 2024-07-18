const connectDB = require("./connectToDB/connect")

const express = require('express');
const app = express();

const libraryRoute = require('./router/library')
const spaceInLibraryRoute = require('./router/sapceInLibrary')
const borrowBookRoute = require('./router/borrowBook')
require("dotenv").config();
app.use(express.json());

app.use('/api/v1/library',libraryRoute);
app.use('/api/v1/library/space', spaceInLibraryRoute)
app.use('/api/v1/borrowBook', borrowBookRoute)

app.all('/', (req, res, next) => {
    res.status(400).send("soory can not find what your looking for");
});
const port = process.env.PORT || 3000

const start = async ()=> {
   // await connectDB(process.env.MONGO_URI)
    app.listen(port, () => {
        console.log(`Server started on port ${port}`);
    });
}
start()
