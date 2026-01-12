import express = require('express');
import pistasRoutes = require('./routes/pistas.routes');
import reservasRoutes = require('./routes/reservas.routes')

const app = express();


app.use(express.json());
app.use('/api', pistasRoutes);
app.use('/api', reservasRoutes);


app.listen(3000, () => {
	console.log('Servidor escuchando en http://localhost:3000');
});

