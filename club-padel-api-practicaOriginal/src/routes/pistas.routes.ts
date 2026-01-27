import {Router} from 'express';
import {listarPistas, obtenerPistaId, crearPista, modificarNombrePista, eliminarPista } from '../controllers/pistas.controller';

const router: Router = Router();

/**
 * @openapi
 * /api/pistas:
 *   get:
 *     summary: Obtener todas las pistas
 *     tags:
 *       - Pistas
 *     responses:
 *       200:
 *         description: Lista de pistas
 */
router.get('/pistas', listarPistas);

router.get('/pistas/:id', obtenerPistaId);

/**
 * @openapi
 * /api/pistas:
 *   post:
 *     summary: Crear una nueva pista
 *     tags:
 *       - Pistas
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nombre
 *               - tipo
 *             properties:
 *               nombre:
 *                 type: string
 *               tipo:
 *                 type: string
 *                 enum: [INDOOR, OUTDOOR]
 *               precioHora:
 *                 type: number
 *     responses:
 *       201:
 *         description: Pista creada correctamente
 *       409:
 *         description: Ya existe una pista con ese nombre
 */
router.post('/pistas', crearPista);

router.post('/pistas',crearPista);

router.put('/pistas/:id',modificarNombrePista);

router.delete('/pistas/:id', eliminarPista);

export =  router;

