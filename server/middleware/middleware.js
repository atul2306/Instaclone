const jwt =require("jsonwebtoken")
const {JWT_SECRET} =require("../keys")
const mongoose= require("mongoose")
const User = mongoose.model("USER")
module.exports=(req,res,next)=>{
    const {authorization}=req.headers
    // authorisatiom  ===Bearer<space> <tokens>  aise dikhega
    if(!authorization){
       return res.status(401).json({error:"login first"})
    }
    const token=authorization.replace("Bearer ","")
    jwt.verify(token,JWT_SECRET,(err,payload)=>{
        if(err){
           return res.status(401).json({error:"must be logged in"})

        }
        const { _id}= payload
        User.findById(_id)
        .then(userdata=>{
            req.user=userdata
        next()
        })
        
    })
}