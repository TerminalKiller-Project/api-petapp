require("dotenv").config();
const morgan = require('morgan');
const cors = require('cors')
const express = require('express');
const server = express;
const routes = require('./routes/index.js');

const corsOptions = {
    origin: '*', // Permitir solicitudes desde este origen
    methods: ['GET', 'POST'], // Permitir solo estos métodos HTTP
    optionsSuccessStatus: 200 // Permitir el uso del código de estado 200 en respuestas pre-vuelo (preflight)
};

server.use(cors(corsOptions));

server.use(express.json())
server.use(express.urlencoded({ extended: true }));
server.use(morgan('dev'))

server.use('/', routes);


module.exports = server