const mongoose = require("mongoose")
// ye pichla mongoose ko connect krne ke lie hai
const {ObjectId} =mongoose.Schema.Types
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        default: "no photos"
    },
    postedby:{
        // mtlb database me sirf id dikhega
      type:ObjectId,
      ref: "USER"
    }


})
mongoose.model("POST",postSchema)