const express=require("express")
const app=express();
const mongoose=require("mongoose")
const PORT=process.env.PORT ||5000
const {MONGOURI}=require("./keys")

mongoose.connect(MONGOURI,{
    useNewUrlParser: true,
    useUnifiedTopology:true
    
})
mongoose.connection.on("connected",()=>{
    console.log("connecton successful")
})
mongoose.connection.on("error",(err)=>{
    console.log(err)
})
require("./models/user")
require("./models/post")
app.use(express.json())
app.use(require("./Router/oauth"))
app.use(require("./Router/post"))

app.get("/",(req,res)=>{
  
    res.send("hello")
})
app.listen(PORT,()=>{
   console.log(`server is running at port ${PORT}`)
})