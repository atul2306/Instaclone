const express= require("express")
const router = express.Router();
const mongoose= require("mongoose");
const Post= mongoose.model("POST")
const middleware =require("../middleware/middleware");
const { post } = require("./oauth");

router.get("/allpostget",(req,res)=>{
    Post.find()
        .populate("postedby","_id name")
        .then(post=>{
         res.json({post})
        })
        .catch(err=>{
            console.log(err)
        })
})
router.post("/createpost",middleware,(req,res)=>{
    const {title,body}=req.body
    if(!title || !body){
        return res.status(422).json({error:"plz add all fields"})
    }
   // console.log(req.user)
    req.user.password= undefined
    const post= new Post({
        title,body,
        postedby:req.user
    })
    post.save()
    .then(result=>{
        res.json({post:result})
    })
    .catch(err=>{
        console.log(err)
    })
})
router.get("/mypost",middleware,(req,res)=>{
   Post.find({postedby:req.user._id})
   .populate("postedby","_id name")
   .then(mypost=>{
       res.json({mypost})
   })
   .catch(err=>{
       console.log(err)
   })
})
module.exports=router