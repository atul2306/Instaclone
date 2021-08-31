const mongoose = require("mongoose")
const dotenv = require("dotenv")
const express = require("express")
const app = express();
const PORT = process.env.PORT | 5000
dotenv.config({ path: "./config.env" })
require("./db/conn")
app.use(express.json())
//CORS Policy
app.use((req, res, next) => {
   res.setHeader("Access-Control-Allow-Origin", "*");
   res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
   );
   res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
   next();
});
app.use(require("./Router/oauth"))
app.listen(PORT, () => {
   console.log(`server is running at port ${PORT}`)
})