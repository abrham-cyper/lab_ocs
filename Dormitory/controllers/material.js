const materialSchema = require('../model/material')
const viewMaterial = async (req,res) => {
   const studentID = req.param.id
   const material = await materialSchema.findOne({studentID: studentID})
   if(!material) {
      return res.status(400).json({success:false, msg:'can not find what your looking for'})
   }
   res.status(200).json({success:true, data: material})
}
const createMaterial = async (req, res)=>{
   const material = await materialSchema.create({ ...req.body })
   res.status(200).json({msg: "created successfully", data: material})
}
const updateMaterials = async (req,res) =>{
   const studentID = req.param.id
   const material = materialSchema.findByIdAndUpdate({studentID:studentID}, ...req.body, {
      new: true,
      runValidators: true,
  })
  res.status(200).json({success: true, data: material})
}

module.exports = {viewMaterial,createMaterial,updateMaterials}