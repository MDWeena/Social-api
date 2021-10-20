const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const routers = require('./routes/index')

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))

routers(app);
app.use(logger('dev'));

module.exports = app;