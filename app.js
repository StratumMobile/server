const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

const swipesRouter = require('./routes/swipes_route');
const usersRouter = require('./routes/users_route');

mongoose
  .connect('mongodb://localhost/Stratum', { useNewUrlParser: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/swipes/:id', swipesRouter);
app.use('/user', usersRouter);

module.exports = app;
