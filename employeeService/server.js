const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 8000;

app.listen(PORT);
console.log('Server started! At http://localhost:' + PORT);

const loggHandler = require('./handlers/logger');
const employeeHandler = require('./handlers/employee');
const deleteItemHandler = require('./handlers/deleteItem');

app.use(cors({
  origin: 'http://localhost:4200'
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(loggHandler);

app.get('/', employeeHandler);

app.delete('/:employeeId', deleteItemHandler);
