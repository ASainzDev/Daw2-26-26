import { Request, Response} from 'express';
import { pistas, Pista} from '../data/pistas.data';

export function listarPistas(req: Request, res: Response): void {
	res.json(pistas);
}

export function crearPista(req: Request, res: Response) : void {

	const {nombre} = req.body;
	

	if(!nombre || typeof nombre !== 'string') {
		res.status(400).json({
		error: 'El campo nombre es obligatorio y debe de ser un string'
		});
		return;
	}

	const existe = pistas.some(pista => pista.nombre === nombre);

	if(existe) {
		res.status(409).json({
			error: 'Ya existe una pista con ese nombre'
		});
		return;
	}

	const nuevaPista: Pista = {
		id: pistas.length + 1,
		nombre,
		reservada: false
	};

	pistas.push(nuevaPista);

	res.status(201).json(nuevaPista);
}

export function modificarNombrePista(req: Request, res: Response) : void{

	const {nombre} = req.body;

	const id = Number(req.params.id);

	console.log(id);

	if(Number.isNaN(id)){
		res.status(400).json({
		error: 'No se ha proporcionado una id o la adjuntada no esté en formato válido'
		});
		return;
	}
	
	if(!nombre || typeof nombre !== 'string') {
		res.status(400).json({
		error: 'Se ha proporcionado una dato de nombre vacio o de formato incorrecto'
		});
		return;
	}

	const existente = pistas.some(pista => pista.id === id);

	if(!existente){
		res.status(404).json({
		error: 'No existe una pista con la id proporcionada'
		});
		return;
	}

	const duplicado = pistas.some(pista => pista.nombre === nombre && pista.id !== id);

	if(duplicado){
		res.status(409).json({
		error: 'El nombre proporcinado coincide con un nombre ya existente o se está intentando dar el mismo nombre a una pista ya existente'
		});
		return;
	}


	const pista = pistas.find(pista => pista.id === id);

	if(!pista){
		res.status(404).json({
			error: 'No existe una pista con la id seleccionada'
		});
		return;
	}

	pista.nombre = nombre;

	
	res.status(200).json(pista);		
}

export function eliminarPista(req : Request, res: Response){
	
	const id = Number(req.params.id);

	if(Number.isNaN(id)){
		res.status(400).json({
			error: 'La id proporcionada no es válida'
		});
		return;
	}

	const existe = pistas.some(pista => pista.id === id);

	if(!existe){
		res.status(404).json({
		error: 'La pista buscada no existe'
		});
		return;
	}

	var index = pistas.findIndex(pista => pista.id === id);

	if(index === -1){
		res.status(404).json({
		error: 'Se ha producido un fallo al buscar el elemento en la colección'
		});
		return;
	}

	const pista = pistas[index];

	pistas.splice(index, 1);

	res.status(200).json(pista);
}

export function obtenerPistaId(req: Request, res: Response){
	
	const id = Number(req.params.id);

	if(Number.isNaN(id)){
		res.status(400).json({
			error: 'La id proporcionada no es valida'
		});
		return;
	}
	
	const pistaBuscada = pistas.find(pista => pista.id === id);

	if(!pistaBuscada){
		res.status(404).json({
			error: 'La pista buscada no existe'
		});
		return;
	}

	res.status(200).json(pistaBuscada);
}
