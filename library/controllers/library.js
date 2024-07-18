const librarySchema = require('../model/library')

const registerLibrary = async (req, res)=>{
   const library =  await librarySchema.create({ ...req.body })
   res.status(200).json({msg: "created successfully", data: library})
}

module.exports = {registerLibrary}