'use strict';

const express = require('express');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const port = process.env.PORT || '3000';
const path = require('path');
const app = express();


app.set('port', port)

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

let v1 = express.Router()

//////////////// API ROUTES ////////////////

//Users
v1.use('/', indexRouter);
v1.use('/users', usersRouter);

//Auth

////////////////////////////////////////////

// Api version
app.use('/v1', v1);

// Default API Version
app.use('/', v1);

// catch 404 and forward to error handler
app.use((req, res) => {
  res.status(404).json({
    message: 'Route not found'
  })
})

app.listen(port, function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log('API is running on port', app.get('port'))
  }
});

module.exports = app;
