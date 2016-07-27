'use strict'
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const logger = require('morgan');
const request = require('request');
const mongoose = require('mongoose');
const path = require('path');
const port = process.env.PORT || 3000;
///// Use bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));
///// Morgan request logging
app.use(logger('dev'));
///// Creating connect URI based on local or deployed
var uristring =
    process.env.MONGODB_URI ||
    'mongodb://localhost/buy-demographics';
///// Connecting to MONGODB
mongoose.connect(uristring, function(error) {
  ///// If error connecting to MongoDB
  if (error) {
      console.error(error);
  ///// If successfully connected to MongoDB
  } else {
      console.log('Mongoose connected successfully');
  }
})
///// Route handler for homepage
app.get('/', function (req, res) {
  ///// Send homepage
  res.sendFile('index.html', {root : './www'});
});
///// Serving static files from ./www
app.use(express.static(path.join(__dirname, './www')));
///// Set up server listening port
app.listen(port, function () {
    console.log('Server started at http://localhost:3000');
})
