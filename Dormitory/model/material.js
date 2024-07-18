const mongoose = require('mongoose')

const materialSchema = mongoose.Schema({
    studentID: {
        type: String,
        required: [true,"please provide the student id"]
    },
    materials: [{
        name:String,
        amount:Number
    }],
    status: {
        type:Boolean,
        default: 0
    }
},  { timestamps: true })

module.exports = mongoose.model("materials", materialSchema);