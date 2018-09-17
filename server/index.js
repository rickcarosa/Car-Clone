require('dotenv').config();
const express = require('express')
    , app = express()


const {
    SERVER_PORT
} = process.env

app.use(express.static(`${__dirname}/../build`))

app.listen(SERVER_PORT, () => console.log(`Fast and Furious`))