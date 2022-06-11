const express = require('express');
const cors = require('cors');
const { dbConnection } = require ('./DB/config');
const PORT = 4001;

//Se crea el servidor de express
const app = express();

//Se ejecuta la función de conexión a la BD
dbConnection();

//CORS
app.use(cors())

//Directorio

//Lectura y parseo del body
app.use (express.json());

//Rutas
app.use('/api/equipo', require('./routes/equipos'));



//Escuchar peticiones
app.listen ( PORT, () => {
    console.log(`Servidor corriendo en puerto ${ PORT }`);
});