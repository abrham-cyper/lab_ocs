const  mongoose = require('mongoose');

const bookBorrowingSchema = mongoose.Schema({
    studentId:{
        type:String,
        required:[true,'please provide the student id']
    },
    bookId:{
        type:String,
        required:[true,'plese provide the book id']
    },
    name: {
        type:String,
        required:[true,'plese provide the name of the book']
    },
    status: {
        type:String,
        enum: {
            values: ["borrowed", "extended", "returned"],
            message: "{VALUE} is not supported",
        },
        default: "borrowed",
    }
},{ timestamps: true })

module.exports = mongoose.model('borrowBook',bookBorrowingSchema)