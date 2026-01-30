import {Request, Response} from 'express';

import Villano from "../models/villano";
import Antiequipo from "../models/antiequipo";
import {where} from "sequelize";

export const listarEquipos = async (req: Request, res: Response) => {
    const listadoEquipos = await Villano.findAll({include: [Antiequipo]});

    res.json(listadoEquipos);
}

export async function listarEquipoPorId(req: Request, res: Response) {

    const idEquipo = Number(req.params.id);

    const equipo = await Villano.findByPk(idEquipo, { include: [Antiequipo]});
    res.json(equipo);
}

export async function crearEquipo(req: Request, res: Response) {

    const nombre = req.body.nombre;
    const antiequipo_id = req.body.antiequipo_id;

    const nuevaPista = await Villano.create({nombre,antiequipo_id});

    res.status(201).json(nuevaPista);
}

export async function actualizarNombreYSedeEquipo(req: Request, res: Response) {

    const id = Number(req.params.id);
    const nombre = req.body.nombre;
    const antiequipo_id = req.body.antiequipo_id;

    const existente = await Villano.findByPk(id);

    if(existente){
        await Villano.update({nombre,antiequipo_id},{where:{id}});
        res.status(200).json(existente);
    }

    res.status(400);

}

export async function eliminarEquipo(req: Request, res: Response) {
    const id = Number(req.params.id);

    const existente = await Villano.findByPk(id);

    if(existente){
        await Villano.destroy({where:{id}});
        res.status(200).json(existente);
    }

    res.status(404);
}

export async function getHeroesByEquipo(req: Request, res: Response) {
    const idEquipo = Number(req.params.equipo_id);

    const listadoHeroesEquipo = await Villano.findAll({where: {equipo_id:idEquipo}});

    res.status(200).json(listadoHeroesEquipo);
}

