const express = require("express")
const bodyParser = require('body-parser')
const cors = require("cors")
const videoRoute = require("./route/videoDetails")
const dbConnection = require("./db")
require('dotenv/config')



const app = express()
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cors())


//route
app.get("/", (req, res)=>{
    res.send("API WORKING")
})

app.use('/video', videoRoute)


//LISTENING PORT
app.listen(5000, ()=> console.log("server running on port 5000"))

module.exports = app