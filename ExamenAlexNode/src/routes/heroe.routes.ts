import {Router} from 'express';
import {
    actualizarNombreYSedeEquipo,
    crearEquipo, eliminarEquipo, getHeroesByEquipo,
    listarEquipoPorId,
    listarEquipos
} from "../controllers/heroes.controller";

const router: Router = Router();

router.get('/heroes', listarEquipos);
router.get('/heroes/:id', listarEquipoPorId);
router.post('/heroes', crearEquipo);
router.put('/heroes/:id', actualizarNombreYSedeEquipo);
router.delete('/heroes/:id', eliminarEquipo);

router.get('/equipos/heroes:equipo_id', getHeroesByEquipo);

export default router;