import express from 'express';
import contactRoutes from './routes/contactRoutes';

const app = express();
const port = 3000;

// Middleware para procesar el cuerpo de las solicitudes en formato JSON
app.use(express.json());

// Rutas para la agenda de contactos
app.use('/api/contacts', contactRoutes);

// Iniciar el servidor
app.listen(port, () => {
console.log(`Servidor corriendo en http://localhost:${port}`);
});