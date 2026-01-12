import {Request, Response} from 'express';
import {pistas, Pista} from '../data/pistas.data';
import {reservas, Reserva} from '../data/reservas.data';

export function reservarPista(req: Request, res: Response): void {
	
	const id = Number(req.body.pistaId);

	if(Number.isNaN(id)){
		res.status(400).json({
			error: 'El campo id es obligatorio y debe de ser un valor numérico'
			});
		return;
		
	}

	if(req.body.horaFin < req.body.horaInicio){
		res.status(400).json({
			error: 'La hora de fin debe de ser posterior a la hora de inicio'
		});
		return;
	}

	const pistaExistente = pistas.some(pista => pista.id === id);

	if(!pistaExistente){
	
		res.status(404).json({
			error: 'No existe una pista con la id indicada'
		});
		return;
	}

	const reservasPista = reservas.filter(reserva => reserva.pistaId === id && reserva.fecha === req.body.fecha);

	const haySolape = reservasPista.some(reserva => req.body.horaInicio < reserva.horaFin && req.body.horaFin > reserva.horaInicio); 

	if(haySolape){
		res.status(409).json({
			error: 'La pista solicitada esta ocupada en esa franja de tiempo'
		});
		return;
	}

	const nuevaReserva: Reserva = {
		id: reservas.length +1,
		pistaId: id,
		fecha: req.body.fecha,
		horaInicio: req.body.horaInicio,
		horaFin: req.body.horaFin
	}	

	reservas.push(nuevaReserva);

	res.status(201).json(nuevaReserva);

}
