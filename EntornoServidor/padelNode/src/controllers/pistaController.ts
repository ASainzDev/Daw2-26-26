import { Request, Response } from 'express';
import { pistas } from '../data';
export const listarPistas = (req: Request, res: Response) => {
// Explicación: Devolver las pistas disponibles en formato JSON
res.status(200).json(pistas);
};