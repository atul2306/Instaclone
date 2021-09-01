const client_origin = process.env.CLIENT_ORIGIN;
module.exports={
    //Forgot-pswd-template
  forgotPswdTemp: (token, name) => ({
    subject: "Instagram Password Reset",
    html: `
      <h2>Hello, ${name}</h2>
      <p><br>You are receiving this because you (or someone else) have requested the reset of the password for your account.
         <br>Please <a href='${client_origin}/reset/${token}'> CLICK HERE</a>
         <br>Please click on the following link, or paste this into your browser to complete the process:
         <br>${client_origin}/reset/${token}
         <br>
         If you did not request this, please ignore this email and your password will remain unchanged
      </p>`,
  }),



  //pswd-change-template
  pswdChangeTemp: (name, email) => ({
    subject: "Your password has been changed",
    text:
      `Hello, ${name} \n\n` +
      `This is a confirmation that the password for your account ${email} \n` +
      " has just been changed.\n",
  }),

}


