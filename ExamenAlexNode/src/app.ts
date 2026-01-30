import express from 'express';

import sequelize from './config/db';

import equipoRoutes from "./routes/equipo.routes";
import antiequipoRoutes from "./routes/antiequipo.routes";
import heroesRoutes from "./routes/heroe.routes";
import villanoRoutes from "./routes/villano.routes";


const app = express();


app.use(express.json());

app.use('/api', equipoRoutes);
app.use('/api', antiequipoRoutes);
app.use('/api', heroesRoutes);
app.use('/api', villanoRoutes);


sequelize.sync().then(() => {
    console.log('Base de datos sincronizada');
});

sequelize.authenticate()
    .then(() => {
        console.log('Conexión a la base de datos establecida correctamente' + sequelize.getDatabaseName());
    })
    .catch((error) => {
        console.log('No se pudo conectar a la base de datos:', error);
    });



app.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000');
});