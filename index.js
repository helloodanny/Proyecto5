const express = require('express')
const app = express()
require('dotenv').config();
const cors = require('cors');
const port = process.env.PORT || 3000
const userRoutes = require('./routes/user.routes.js')

app.use(cors())
app.use(express.json())

    (async () => {
        try {
            app.use(userRoutes)

        } catch (error) {
            console.log(error)

        }
    })()

app.listen(port, (req, res) => {
    console.log("hola")
})