const express = require('express')
const bodyParser = require('body-parser')

const {mongoose} = require('./db.js')
var LocationController = require('./Controllers/locationContoller')

const port = 3000;

var app = express();

app.use(bodyParser.json());

app.listen(port, () =>  console.log(`server started at port ${port}`));

app.use('/pincodes', LocationController)