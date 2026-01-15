import {Router} from 'express';
import {reservarPista, obtenerReservas, cancelarReserva, obtenerReservaPorFecha, obtenerReservaPorIdPista} from '../controllers/reservas.controller';


const router: Router = Router();

router.get('/reservas', obtenerReservas );

router.post('/reservas', reservarPista );

router.delete('/reservas/:id', cancelarReserva);

router.get('/reservas/:fecha', obtenerReservaPorFecha);

router.get('/reservas/:pistaId', obtenerReservaPorIdPista);

export = router;
