import express = require('express');
import pistasRoutes = require('./routes/pistas.routes');
import reservasRoutes = require('./routes/reservas.routes')
import sequelize from './config/database';
import Pista from './models/Pista';


const app = express();


app.use(express.json());
app.use('/api', pistasRoutes);
app.use('/api', reservasRoutes);

sequelize.authenticate()
	.then(() => {
		console.log('Conexión a la base de datos establecida correctamente');
	})
	.catch((error) => {
		console.log('No se pudo conectar a la base de datos:', error);
	});

Pista.findAll()
	.then(pistas => {
		console.log('Modelo Pista cargado correctamente');
	})
	.catch(error => {
		console.log('Error al cargar el modelo Pista:', error);
	});


app.listen(3000, () => {
	console.log('Servidor escuchando en http://localhost:3000');
});

