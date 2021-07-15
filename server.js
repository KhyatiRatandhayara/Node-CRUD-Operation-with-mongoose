require('./models/db');
const express = require('express');
const bodyparser = require('body-parser');
const routes = require('./routes/employeeRoute');
const employeeController = require('./controllers/employeeController');

var app = express();

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.use(routes);

app.listen(3000, () => {
    console.log('express server started at port: 3000');
})

