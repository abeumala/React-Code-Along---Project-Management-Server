const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose     = require('mongoose');

const app = express();

// MONGOOSE CONNECTION
mongoose
  .connect('mongodb://localhost/project-management-server', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });


// MIDDLEWARE SETUP
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// CORS SETTINGS TO ALLOW CROSS-ORIGIN INTERACTION:
//  ...

// ROUTES MIDDLEWARE:
//  app.use('', projectRouter);
//  app.use('', taskRouter);


module.exports = app;