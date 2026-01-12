import {Router} from 'express';
import {listarPistas, crearPista, modificarNombrePista, eliminarPista, obtenerPistaId } from '../controllers/pistas.controller';

const router: Router = Router();

router.get('/pistas', listarPistas);

router.get('/pistas/:id', obtenerPistaId);

router.post('/pistas',crearPista);

router.put('/pistas/:id',modificarNombrePista);

router.delete('/pistas/:id', eliminarPista);

export =  router;

