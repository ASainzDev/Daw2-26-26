import express = require('express');

import sequelize from './config/database';

// Hago imports de los Models para poder hacer comprobaciones
// import Antiequipo from "./models/antiequipos";
// import Villano from "./models/villanos";
import Equipos from "./models/equipos";
// import Heroe from "./models/heroes";





const app = express();


app.use(express.json());


sequelize.authenticate()
    .then(() => {
        console.log('Conexión a la base de datos establecida correctamente');
    })
    .catch((error) => {
        console.log('No se pudo conectar a la base de datos:', error);
    });

// Para asegurarme de que todo carga comom debería de ser voy a hacer comprobaciones con los diferentes models.
// Así, al cargar el back, me irá dando indicaciones de que todo está correcto. Es solo por comprobación.

// Antiequipo.findAll()
//     .then(pistas => {
//         console.log('Modelo Antiequipo cargado correctamente');
//     })
//     .catch(error => {
//         console.log('Error al cargar el modelo Pista:', error);
//     });

Equipos.findAll()
    .then(pistas => {
        console.log('Modelo Equipos cargado correctamente');
    })
    .catch(error => {
        console.log('Error al cargar el modelo Pista:', error);
    });

// Heroe.findAll()
//     .then(pistas => {
//         console.log('Modelo Heroes cargado correctamente');
//     })
//     .catch(error => {
//         console.log('Error al cargar el modelo Pista:', error);
//     });

// Villano.findAll()
//     .then(pistas => {
//         console.log('Modelo Villano cargado correctamente');
//     })
//     .catch(error => {
//         console.log('Error al cargar el modelo Villano:', error);
//     });


app.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000');
});