import {Request, Response} from 'express';
//import {pistas, Pista} from '../data/pistas.data';
//import {reservas, Reserva} from '../data/reservas.data';
import Reserva from '../models/Reserva'
import Pista from '../models/Pista';

export async function obtenerReservas(req: Request, res: Response) {
	const reservas = await Reserva.findAll();
	res.status(200).json(reservas);
}

export async function reservarPista(req: Request, res: Response) {
	
	const pistaId = Number(req.body.pistaId);
	const {fecha, horaInicio, horaFin} = req.body;

	if(Number.isNaN(pistaId)){
		res.status(400).json({
			error: 'El campo id es obligatorio y debe de ser un valor numérico'
			});
		return;
		
	}

	if(!fecha || typeof fecha !== 'string'){
		res.status(400).json({
			error: 'El campo fecha es obligatorio'
		});
		return;
	}

	if(!horaInicio || typeof horaInicio !== 'string'){
		res.status(400).json({
			error: 'El campo hora de inicio es obligatiorio'
		});
		return;
	}

	if(!horaFin || typeof horaFin !== 'string'){
		res.status(400).json({
			error: 'El campo hora de fin es obligatorio'
		});
		return;
	}

	if(horaFin < horaInicio){
		res.status(400).json({
			error: 'La hora de fin debe de ser posterior a la hora de inicio'
		});
		return;
	}

	const pistaExistente = await Pista.findByPk(pistaId);

	if(!pistaExistente){
	
		res.status(404).json({
			error: 'No existe una pista con la id indicada'
		});
		return;
	}

	const reservasPista = await Reserva.findAll(
		{where: {pistaId,fecha}
	});

	const haySolape = reservasPista.some(reserva => req.body.horaInicio < reserva.horaFin && req.body.horaFin > reserva.horaInicio); 

	if(haySolape){
		res.status(409).json({
			error: 'La pista solicitada esta ocupada en esa franja de tiempo'
		});
		return;
	}

	const nuevaReserva = await Reserva.create({
		pistaId,
		fecha,
		horaInicio,
		horaFin
	});	

	res.status(201).json(nuevaReserva);

}

export async function cancelarReserva(req: Request, res: Response){

	const reservaId = Number(req.params.id);

	if(Number.isNaN(reservaId)){
		res.status(400).json({
			error: 'La id de la pista o bien está vacia o no es un formato válido'
		});
		return;
	}

	const existe = await Reserva.findByPk(reservaId);

	if(!existe){
		res.status(404).json({
			error: 'No se encuentra una reserva con esa id'
		});
		return;
	}

	await Reserva.destroy({ where: { id: reservaId } });

	res.status(200).json(existe);

		
}

export async function obtenerReservaPorFecha(req: Request, res: Response){

	const fecha = req.params.fecha;

	if(!fecha || typeof fecha !== 'string'){
		res.status(400).json({
			error: 'La fecha de la reserva está vacia o no es una fecha válida'
		});
		return;
	}

	const listadoFecha = await Reserva.findAll( {where: {fecha} });

	res.status(200).json(listadoFecha);
}
