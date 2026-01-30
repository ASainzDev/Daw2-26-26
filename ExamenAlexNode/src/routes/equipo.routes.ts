import {Router} from 'express';
import {
    actualizarNombreYSedeEquipo,
    crearEquipo, eliminarEquipo,
    listarEquipoPorId,
    listarEquipos,
    devolverRosterEquipo
} from "../controllers/equipo.controller";


const router: Router = Router();

router.get('/equipos', listarEquipos);
router.get('/equipos/:id', listarEquipoPorId);
router.post('/equipos', crearEquipo);
router.put('/equipos/:id', actualizarNombreYSedeEquipo);
router.delete('/equipos/:id', eliminarEquipo);


router.get('/equipos/:id/heroes', devolverRosterEquipo);

export default router;