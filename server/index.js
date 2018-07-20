require('dotenv').config();
const express = require('express')
    , bodyParser = require('body-parser')
    , app = express()
    , controller = require('./controller')
    , cors = require('cors')
    , session = require('express-session')
    , passport = require('passport')
    , Auth0Strategy = require('passport-auth0')
    , massive = require('massive')

app.use(bodyParser.json());
app.use(cors());

const {
    SERVER_PORT
} = process.env

app.listen(SERVER_PORT, () => console.log(`Fast and Furious`))