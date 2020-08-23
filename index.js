const express = require('express');
const dotenv = require('dotenv').config();

const dbConnection = require('./database/config');

const app = express();
dbConnection();

app.use(express.static('public'));
app.use(express.json());

app.use('/api/auth', require('./routes/auth'));
// TODO: CRUD: eventos

app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});
