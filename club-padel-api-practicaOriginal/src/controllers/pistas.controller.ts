import { Request, Response} from 'express';
import Pista from '../models/Pista';

export const listarPistas = async(req: Request, res: Response) => {
	const listadoPistas = await Pista.findAll();
	res.json(listadoPistas);
}


export async function crearPista(req: Request, res: Response) {

	const nombre = req.body.nombre;
	const tipo = req.body.tipo;
	const precioHora = req.body.precioHora ?? 0.00;
	

	if(!nombre || typeof nombre !== 'string') {
		res.status(400).json({
		error: 'Se debe proporcionar un dato nombre con el formato correcto'
		});
		return;
	}

	const pistaExistente = await Pista.findOne({ where: {nombre} });

	if(pistaExistente) {
		res.status(409).json({
			error: 'Ya existe una pista con ese nombre'
		});
		return;
	}

	if(tipo !== 'INDOOR' && tipo !== 'OUTDOOR'){
		res.status(400).json({
		error: 'El parámetro tipo proporcionado no corresponde con los permitidos'
		});
		return;
	}

	if(typeof precioHora !== 'number' || precioHora < 0){
		res.status(400).json({
			error: 'El precio por hora debe ser un número positivo'
		});
		return;
	}
	
	const nuevaPista = await Pista.create({
		nombre,
		tipo,
		precioHora
	});

	res.status(201).json(nuevaPista);
}

export async function modificarNombrePista(req: Request, res: Response) {

	const nombre = req.body.nombre;

	const id = Number(req.params.id);

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

	const existente = await Pista.findByPk(id);

	if(!existente){
		res.status(404).json({
		error: 'No existe una pista con la id proporcionada'
		});
		return;
	}

	const nombreDuplicado = await Pista.findOne({where: {nombre} });

	if(nombreDuplicado && nombreDuplicado.id !== id){
		res.status(409).json({
		error: 'El nombre proporcinado coincide con un nombre ya existente o se está intentando dar el mismo nombre a una pista ya existente'
		});
		return;
	}
	
	 await Pista.update(
		{nombre},
		{where: {id} }
	);
	
	const pistaActualizada = await Pista.findByPk(id);
			
	res.status(200).json(pistaActualizada);		
}

export async function eliminarPista(req : Request, res: Response){
	
	const id = Number(req.params.id);

	if(Number.isNaN(id)){
		res.status(400).json({
			error: 'La id proporcionada no es válida'
		});
		return;
	}

	const existe = await Pista.findByPk(id);

	if(!existe){
		res.status(404).json({
		error: 'La pista buscada no existe'
		});
		return;
	}

	await Pista.destroy({ where: {id} });

	res.status(200).json(existe);
}

export async function obtenerPistaId(req: Request, res: Response){
	
	const id = Number(req.params.id);

	if(Number.isNaN(id)){
		res.status(400).json({
			error: 'La id proporcionada no es valida'
		});
		return;
	}
	
	const pistaBuscada = await Pista.findByPk(id);

	if(!pistaBuscada){
		res.status(404).json({
			error: 'La pista buscada no existe'
		});
		return;
	}

	res.status(200).json(pistaBuscada);
}

