const express = require ('express')
const app = express()
require('dotenv').config()
const cors = require ('cors')
const port = process.env.PORT 
const userRoutes=require('./routes/user.routes')

app.use(cors())
app.use(express.json())

(async()=>{
    try {
        app.use(userRoutes)
        
    } catch (error) {
        console.log (error)
        
    }
})()

app.listen(port,(res,req)=>{
    console.log ("hola")
})