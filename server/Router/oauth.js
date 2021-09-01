const express = require("express")
const router = express.Router()
const User = require("../models/user")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const JWT_SECRET = process.env.SECRET_KEY
const sendEmail = require("../config/nodemailer")
const emailTemplates = require("../config/emailTemplate")
const async = require("async")
const crypto = require("crypto")
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
                        res.status(201).json({ message: "Login Successful", userDetails: userDetails, ok: true, token })
                    }
                    else {
                        res.status(400).json({ message: "Invalid Credential", ok: false })
                    }
                }).catch((err) => console.log(err))

        }).catch((err) => {
            console.log(err)
        })
})

//forgot password
router.post("/forgot", (req, res,next) => {
    async.waterfall([
        (done) => {
            crypto.randomBytes(20, (err, buf) => {
                var token = buf.toString("hex");
                done(err, token);
            });
        },
        function (token, done) {
           // console.log(token)
            User.findOneAndUpdate(
                
                { email: req.body.email },
                {
                    $set: {
                        resetPasswordToken: token,
                        resetPasswordExpire: Date.now() + 3600000, //1 hour
                    },
                },
                (err, user) => {
                   
                    if (!user) {
                        return next(new Error("No user with that email exsists"));
                    }
                    done(err, token, user);
                }
            );
        },
        async (token, user, done) => {
            try {
                //Sending-Reset-Password-Email
                await sendEmail(
                    user.email,
                    emailTemplates.forgotPswdTemp(token, user.name)
                );

                return res.status(201).json({
                    message: "Email Successfully Sent. Please check your email account",
                    ok: true,
                });
            } catch (err) {
               // const errors = handleErrors(err);
                return next(err);
            }
        },
    ]);
})


// reset password
router.post("/reset/:token",async (req,res,next)=>{

    const token = req.params.token;
  const pswd = req.body.password;
  const confpswd = req.body.confirmPassword;
  console.log(token,pswd,confpswd)

  if (pswd !== confpswd) {
    return res.json({ message: "Password Not Matching" });
  }
  try {
    const hashPswd = await bcrypt.hash(pswd, 10);

    const user = await User.findOneAndUpdate(
      {
        resetPasswordToken: token,
        resetPasswordExpire: { $gt: Date.now() },
      },
      {
          // database value will be updated
        $set: {
          password: hashPswd,
          resetPasswordToken: undefined,
          resetPasswordExpire: undefined,
          
        },
      }
    );
    console.log(user)
    if (!user) {
      return next(
        new Error("Password reset token has expired or is invalid")
      );
    } else {
      //Sending-Success-Email
      await sendEmail(
        user.email,
        emailTemplates.pswdChangeTemp(user.name, user.email)
      );

      res.json({
        message: "Password Successfully Changed",
        ok: true,
      });
    }
  } catch (error) {
    //const errors = handleErrors(error);
    return next(error);
  }
})

module.exports = router