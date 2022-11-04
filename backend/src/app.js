const express = require('express');

const app = express();

//Configuraciones
app.set('port', process.env.PORT || 5000); //Si no hay nada en PORT asignar 5000 por defecto

//Middlewares


//Routes

module.exports = app;