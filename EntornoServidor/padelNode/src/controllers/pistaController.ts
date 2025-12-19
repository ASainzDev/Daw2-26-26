import { Request, Response } from 'express';
import { pistas } from '../data';
export const listarPistas = (req: Request, res: Response) => {
// Explicación: Devolver las pistas disponibles en formato JSON
res.status(200).json(pistas);
};

export const agregarPista = (req: Request, res: Response) => {
  const nuevaPista = req.body;
  pistas.push(nuevaPista);
  res.status(201).json(nuevaPista);
};

export const reservarPista = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const pista = pistas.find(p => p.id === id);

  if (!pista) {
    return res.status(404).json({ mensaje: 'Pista no encontrada' });
  }

  pista.reservada = true;
  res.json(pista);
};

export const cancelarReserva = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const pista = pistas.find(p => p.id === id);

  if (!pista) {
    return res.status(404).json({ mensaje: 'Pista no encontrada' });
  }

  pista.reservada = false;
  res.json(pista);
};