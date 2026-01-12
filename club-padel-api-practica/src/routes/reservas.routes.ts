import {Router} from 'express';
import {reservarPista, obtenerReservas, cancelarReserva} from '../controllers/reservas.controller';


const router: Router = Router();

router.get('/reservas', obtenerReservas );

router.post('/reservas', reservarPista );

router.delete('/reservas/:id', cancelarReserva);

export = router;
