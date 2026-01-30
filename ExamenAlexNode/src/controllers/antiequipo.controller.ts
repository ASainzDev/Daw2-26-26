import {Request, Response} from 'express';

import Antiequipo from '../models/antiequipo'
import Equipo from "../models/equipo";
import Heroe from "../models/heroe";
import Villano from "../models/villano";

export const listarEquipos = async (req: Request, res: Response) => {
    const listadoEquipos = await Antiequipo.findAll();

    res.json(listadoEquipos);
}

export async function listarEquipoPorId(req: Request, res: Response) {

    const idEquipo = Number(req.params.id);

    const equipo = await Antiequipo.findByPk(idEquipo);
    res.json(equipo);
}

export async function crearEquipo(req: Request, res: Response) {

    const nombre = req.body.nombre;
    const sede = req.body.sede;

    const nuevaPista = await Antiequipo.create({nombre,sede});

    res.status(201).json(nuevaPista);
}

export async function actualizarNombreYSedeEquipo(req: Request, res: Response) {

    const id = Number(req.params.id);
    const nombre = req.body.nombre;
    const sede = req.body.sede;

    const existente = await Antiequipo.findByPk(id);

    if(existente){
        await Antiequipo.update({nombre,sede},{where:{id}});
        res.status(200).json(existente);
    }

    res.status(400);

}

export async function eliminarEquipo(req: Request, res: Response) {
    const id = Number(req.params.id);

    const existente = await Antiequipo.findOne({where: {id: id}});

    if(existente){
        await Antiequipo.destroy({where:{id: id}});
        res.status(200).json(existente);
    }

    res.status(404);
}

export async function devolverRosterEquipo(req: Request, res: Response) {
    const idEquipo = Number(req.params.id);

    const listadoHeroes = await Antiequipo.findByPk(idEquipo, {include: [Villano]});

    return res.status(200).json(listadoHeroes);

}

