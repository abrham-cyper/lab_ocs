const borrowBook = require('../model/borrowBook')
const librarySchema = require('../model/library')
const borrowBookSchema = require('../model/borrowBook')
const viewAvilableCapacity = async (req,res,next) => {
    const libraryId = req.params.id
    const {avilableCapacity} = await librarySchema.find({name:libraryId})
    if(!avilableCapacity){
       return res.status(400).send('please provide ligit library id')
    }
    res.status(200).json({success: true, capacity: avilableCapacity})
}

const studentGetsToTheLibrery = async (req,res) => {
    const libraryId =  req.params.id
    const {studentId} = req.body
    if(!studentId){
        res.status(400).send('please provide student id')
    }
    else{
        const {avilableCapacity} = await librarySchema.find({name:libraryId})
        if(!avilableCapacity){
            res.status(400).send('please provide a valid library id')
        }
        else{
            avilableCapacity -= 1
        }
        const updatedSchema = await librarySchema.findByIdAndUpdate({ name: libraryId }, ...avilableCapacity, {
            new: true,
            runValidators: true,
        });
        res.status(200).json({success:true, data: updatedSchema });
    }
}
const studentGetsOutOfTheLibrary = async (req,res) => {
    const libraryId =  req.params.id
    const {studentId} = req.body
    if(!studentId){
        res.status(400).send('plese provide student id')
    }
    else{
        const {avilableCapacity} = await librarySchema.findOne({name:libraryId})
        const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
        const checkIfBorrowed = await borrowBookSchema.findOne({studentId: this.studentId, createdAt: { $lt: twentyFourHoursAgo }})
        if(checkIfBorrowed && checkIfBorrowed.status != "returned"){
            return res.status(200).json({msg:"please first return the book you borrowed before leaving the library"})
        }
        if(!avilableCapacity){
           return res.status(400).send('plese provide a valid library id')
        }
        else{
            avilableCapacity += 1
        }
        
        
        const updatedSchema = await librarySchema.findByIdAndUpdate({ name: libraryId }, ...avilableCapacity, {
            new: true,
            runValidators: true,
        });
        res.status(200).json({success:true, data: updatedSchema });
    }
}

module.exports = {viewAvilableCapacity,studentGetsOutOfTheLibrary,studentGetsToTheLibrery}