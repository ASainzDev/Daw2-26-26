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
	const {fechaString, horaInicio, horaFin} = req.body;

	if(Number.isNaN(pistaId)){
		res.status(400).json({
			error: 'El campo id es obligatorio y debe de ser un valor numérico'
			});
		return;
		
	}

	if(!fechaString || typeof fechaString !== 'string'){
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

	if(horaFin <= horaInicio){
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

	const fecha = new Date(fechaString);
	
	const reservasPista = await Reserva.findAll(
		{where: {pistaId,fecha}
	});

	const haySolape = reservasPista.some(reserva => horaInicio < reserva.horaFin && horaFin > reserva.horaInicio); 

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

	const fechaDate = new Date(fecha);

	const listadoFecha = await Reserva.findAll( {where: { fecha: fechaDate } });

	res.status(200).json(listadoFecha);
}

export async function obtenerReservaPorIdPista(req: Request, res: Response){
	
	const idPista =Number(req.params.pistaId);

	if(Number.isNaN(idPista)){
		res.status(400).json({
			error: 'Se debe de proporcionar una id de pista'
		});
		return;
	}

	const existe = await Pista.findByPk(idPista);

	if(!existe){
		res.status(404).json({
			error: 'La pista buscada no existe'
		});
		return;
	}

	const listadoReservasPista = await Reserva.findAll( {where: { pistaId: idPista } });

	res.status(200).json(listadoReservasPista);
}
