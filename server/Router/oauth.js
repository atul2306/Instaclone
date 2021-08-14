const express = require("express")
const router = express.Router()
// now posting data in the main database
const mongoose = require("mongoose")
const User = mongoose.model("USER")
const bcrypt = require("bcryptjs")
const jwt= require("jsonwebtoken")
const {JWT_SECRET}= require("../keys")
const middleware= require("../middleware/middleware")

router.get("/protected",middleware ,(req, res) => {
    res.send("hello user")
})
router.post("/signup", (req, res) => {
    //req ke body se sb frontent ka data aa jayega to hmko use destructure kr lete hai
    const { name, email, password } = req.body
    if (!name || !email || !password) {
        return res.status(404).json({ error: "pls complete the details" })
    }

    User.findOne({ email: email })
        .then((saveuser) => {
            if (saveuser) {
                return res.status(404).json({ error: "already exist email" })
            }
            // else hmlg database me savkrnge
            bcrypt.hash(password, 12)
                .then(hashedpassword => {
                    const user = new User({
                        email, password: hashedpassword, name
                    })
                    user.save()
                        .then(user => {
                            return res.status(200).json({ message: "data saved" })
                        }).catch(err => {
                            console.log(err)
                        })
                })

        }).catch(err => {
            console.log(err)
        })
})
router.post("/signin", (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(404).json({ error: "enter to login" })
    }
    User.findOne({ email: email })
        .then((check) => {
            if (!check) {
                return res.status(404).json({ error: "invalid credential" })
            }
            bcrypt.compare(password, check.password)
                .then(match => {
                    if (match) {
                        //return res.status(200).json({ message: "login suucess" })
                        // assigning token on the basis of _id
                        const token= jwt.sign({_id:check._id},JWT_SECRET)
                        res.json({token})

                    }
                    else {
                        return res.status(404).json({ error: "invalid credential" })
                    }
                })
                .catch(err => {
                    console.log(err)
                })

        }).catch(err => {
            console.log(err)
        })
})
module.exports = router 