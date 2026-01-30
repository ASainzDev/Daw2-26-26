import {Request, Response} from 'express';

import Heroe from "../models/heroe";
import Equipos from "../models/equipo";
import Equipo from "../models/equipo";
import {where} from "sequelize";

export const listarEquipos = async (req: Request, res: Response) => {
    const listadoEquipos = await Heroe.findAll({include: [Equipos]});

    res.json(listadoEquipos);
}

export async function listarEquipoPorId(req: Request, res: Response) {

    const idEquipo = Number(req.params.id);

    const equipo = await Heroe.findByPk(idEquipo, { include: [Equipos]});
    res.json(equipo);
}

export async function crearEquipo(req: Request, res: Response) {

    const nombre = req.body.nombre;
    const equipo_id = req.body.equipo_id;

    const nuevaPista = await Heroe.create({nombre,equipo_id});

    res.status(201).json(nuevaPista);
}

export async function actualizarNombreYSedeEquipo(req: Request, res: Response) {

    const id = Number(req.params.id);
    const nombre = req.body.nombre;
    const sede = req.body.sede;

    const existente = await Heroe.findByPk(id);

    if(existente){
        await Heroe.update({nombre,sede},{where:{id}});
        res.status(200).json(existente);
    }

    res.status(400);

}

export async function eliminarEquipo(req: Request, res: Response) {
    const id = Number(req.params.id);

    const existente = await Heroe.findByPk(id);

    if(existente){
        await Heroe.destroy({where:{id}});
        res.status(200).json(existente);
    }

    res.status(404);
}

export async function getHeroesByEquipo(req: Request, res: Response) {
    const idEquipo = Number(req.params.equipo_id);

    const listadoHeroesEquipo = await Heroe.findAll({where: {equipo_id:idEquipo}});

    res.status(200).json(listadoHeroesEquipo);
}


