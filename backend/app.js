const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

// it is just to create a express app
// express provided lots of functionalioty to behave like a middleware b/w req and resp
const app = express();


// body-parser is a npm module which allow to parse the body of the request
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true}));

// cross origin
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Headers','Origin, X-Requested-With, Authorization, Content-Type, Accept');
	res.setHeader('Access-Control-Allow-Methods',"GET, POST, PATCH,PUT, DELETE, OPTIONS");
	next();
});

//to export the express js app
module.exports = app;






