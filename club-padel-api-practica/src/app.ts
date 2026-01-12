import express = require('express');
import pistasRoutes = require( './routes/pistas.routes');

const app = express();


app.use(express.json());
app.use('/api', pistasRoutes);


app.listen(3000, () => {
	console.log('Servidor escuchando en http://localhost:3000');
});

