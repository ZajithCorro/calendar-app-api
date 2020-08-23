const express = require('express');
const dotenv = require('dotenv').config();
const morgan = require('morgan');
const cors = require('cors');

const dbConnection = require('./database/config');

const app = express();
dbConnection();

app.use(cors());
app.use(express.static('public'));
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/auth', require('./routes/auth'));
// TODO: CRUD: eventos

app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});
