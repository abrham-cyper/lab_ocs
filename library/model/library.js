const mongoose = require('mongoose')

const librarySchema = mongoose.Schema({
    name: {
        type: String,
        required: [true,"please provide the name of the library"]
    },
    totalCapacity: {
        type:Number,
        required: [true, 'plese provide the total capacity of the library']
    },
    avilableCapacity: {
        type:Number,
        required: [true, 'hhow many avilable space in the library']
    }
})

module.exports = mongoose.model("library", librarySchema);