import { Router } from 'express';
import { listarPistas, agregarPista, reservarPista, cancelarReserva } from
'../controllers/pistaController';

export const router = Router();
router.get('/pistas', listarPistas);
router.post('/pistas/agregar', agregarPista);
router.put('/pistas/reservar/:id', reservarPista);
router.put('/pistas/cancelar/:id', cancelarReserva);