const mongoose = require('mongoose');
//Set up default mongoose connection
const connectDB = (url) => {
   return mongoose.connect(url, { useNewUrlParser: true })
}
module.exports = connectDB
