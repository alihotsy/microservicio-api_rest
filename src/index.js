const express = require('express');
const morgan = require('morgan');
const dbConnection = require('../database/dbConnection');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(morgan('dev'));

dbConnection();

app.use('/api/project', require('./router/project.router'));


app.listen(process.env.SERVICE_PORT, () => {
    console.log('Listening to service port:', process.env.SERVICE_PORT);
})