require('dotenv').config();
const express = require('express')
    , app = express()


const {
    SERVER_PORT
} = process.env

app.listen(SERVER_PORT, () => console.log(`Fast and Furious`))