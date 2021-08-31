const mongoose=require("mongoose")
// take as object
const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
      type:String,
      required:true
    },
    password:{
        type:String,
        required:true
    },
    secretToken:String,
    resetPasswordToken:String, 
    resetPasswordExpire:Date,
    

})
const User=mongoose.model("USER",userSchema)
module.exports=User
