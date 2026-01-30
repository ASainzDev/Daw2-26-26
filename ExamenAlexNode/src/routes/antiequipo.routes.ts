import {Router} from 'express';
import {
    actualizarNombreYSedeEquipo,
    crearEquipo, eliminarEquipo,
    listarEquipoPorId,
    listarEquipos,
    devolverRosterEquipo
} from "../controllers/antiequipo.controller";

const router: Router = Router();

router.get('/antiequipos', listarEquipos);
router.get('/antiequipos/:id', listarEquipoPorId);
router.post('/antiequipos', crearEquipo);
router.put('/antiequipos/:id', actualizarNombreYSedeEquipo);
router.delete('/antiequipos/:id', eliminarEquipo);


router.get('/antiequipos/:id/villanos', devolverRosterEquipo);

export default router;