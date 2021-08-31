const express = require("express")
const router = express.Router()
const User = require("../models/user")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const JWT_SECRET = process.env.SECRET_KEY
router.post("/signup", (req, res) => {
    const { email, name, password } = req.body

    if (!email || !name || !password) {
        return res.status(400).json({ message: "Incomplete details", ok: false })
    }
    // const userDetails={name,email} check krne ke lie
    User.findOne({ email: email })
        .then((check) => {
            if (check) {
                return res.status(400).json({ message: "Email registered Already", ok: false })
            }
            bcrypt.hash(password, 12)
                .then((hashed) => {
                    const user = new User({
                        name, email, password: hashed
                    })
                    user.save()
                        .then(() => {
                            return res.status(201).json({ message: "Registered Successfully", ok: true })
                        }).catch((err) => console.log(err))
                }).catch((err) => console.log(err))


        })

})




// route for signin
router.post("/signin", (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        return res.status(400).json({ message: "Incomplete Details", ok: false })
    }
    User.findOne({ email: email })
        .then((check) => {
            // console.log(check)
            if (!check) {
                res.status(400).json({ message: "Invalid Credential" })
            }
            bcrypt.compare(password, check.password)
                .then((checkedpass) => {
                    // console.log(checkedpass)
                    if (checkedpass) {
                        const token = jwt.sign({ _id: check._id }, JWT_SECRET)
                        // console.log(token)
                        const userDetails = {
                            id: check._id,
                            email: check.email,
                            name: check.name,
                            password: check.password
                           
                           

                        }
                        res.status(201).json({ message: "Login Successful", userDetails: userDetails ,ok:true,token})
                    }
                    else {
                        res.status(400).json({ message: "Invalid Credential",ok:false })
                    }
                }) .catch((err)=>console.log(err))

        }).catch((err) => {
            console.log(err)
        })
})
module.exports = router