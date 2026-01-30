import {Router} from 'express';
import {
    actualizarNombreYSedeEquipo,
    crearEquipo, eliminarEquipo, getHeroesByEquipo,
    listarEquipoPorId,
    listarEquipos
} from "../controllers/villanos.controller";

const router: Router = Router();

router.get('/villanos', listarEquipos);
router.get('/villanos/:id', listarEquipoPorId);
router.post('/villanos', crearEquipo);
router.put('/villanos/:id', actualizarNombreYSedeEquipo);
router.delete('/villanos/:id', eliminarEquipo);

router.get('/equipos/villanos{.:equipo_id}', getHeroesByEquipo);

export default router;