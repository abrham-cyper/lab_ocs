const borrowBookSchema = require('../model/borrowBook')

const checkBorrow = async (req,res) =>{
    const studId = req.params.id
    const check = await borrowBookSchema.findOne({studentId:studId})
    if(check){
        if(check.status == 'borrowed' || check.status == 'extended'){
            return res.status(400).json({success:false, msg:'soory you have to return the book you borrowed first'})
        }  
    }
    return res.status(200).json({success:true, msg:"you can borrow"})
}
const createBorrow = async (req,res)=>{
    const {studentId} = req.body
    const check = await borrowBookSchema.findOne({studentId:studentId})
    if(check){
        if(check.status == 'borrowed' || check.status == 'extended'){
            return res.status(400).json({success:false, msg:'soory you have to return the book you borrowed first'})
        } 
    }
    const borrow = await borrowBookSchema.create({...req.body})
    res.status(200).json({success:true, data: borrow});
}
const updateBorrow = async (req,res) => {
    const borrow  = await borrowBookSchema.findByIdAndUpdate({_id:req.params.id}, ...req.body, {
        new: true,
        runValidators: true,
    })
    res.status(200).json({success: true, data: borrow})
}

module.exports = {checkBorrow,createBorrow, updateBorrow}