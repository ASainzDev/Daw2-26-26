import {Request, Response} from 'express';

import Equipo from '../models/equipo'
import Heroe from "../models/heroe";

export const listarEquipos = async (req: Request, res: Response) => {
    const listadoEquipos = await Equipo.findAll();

    res.json(listadoEquipos);
}

export async function listarEquipoPorId(req: Request, res: Response) {

    const idEquipo = Number(req.params.id);

    const equipo = await Equipo.findByPk(idEquipo);
    res.json(equipo);
}

export async function crearEquipo(req: Request, res: Response) {

    const nombre = req.body.nombre;
    const sede = req.body.sede;

    const nuevaPista = await Equipo.create({nombre,sede});

    res.status(201).json(nuevaPista);
}

export async function actualizarNombreYSedeEquipo(req: Request, res: Response) {

    const id = Number(req.params.id);
    const nombre = req.body.nombre;
    const sede = req.body.sede;

    const existente = await Equipo.findByPk(id);

    if(existente){
        await Equipo.update({nombre,sede},{where:{id}});
        res.status(200).json(existente);
    }

    res.status(400);

}

export async function eliminarEquipo(req: Request, res: Response) {
    const id = Number(req.params.id);

    const existente = await Equipo.findOne({where: {id: id}});

    if(existente){
        await Equipo.destroy({where:{id: id}});
        res.status(200).json(existente);
    }

    res.status(404);
}

export async function devolverRosterEquipo(req: Request, res: Response) {
    const idEquipo = Number(req.params.id);

    const listadoHeroes = await Equipo.findByPk(idEquipo, {include: [Heroe]});

    return res.status(200).json(listadoHeroes);

}
