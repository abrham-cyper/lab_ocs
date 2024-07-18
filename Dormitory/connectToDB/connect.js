const mongoose = require('mongoose');
//Set up default mongoose connection
const connectDB = (url) => {
   return mongoose.connect(url, {});
 };
module.exports = connectDB
