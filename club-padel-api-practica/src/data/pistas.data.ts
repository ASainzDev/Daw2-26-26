type tipo = 'INDOOR' | 'OUTDOOR';

export interface Pista {
	id: number;
	nombre: string;
	tipo?: tipo;
	precioHora?: number;
	reservada: boolean;
}

export const pistas: Pista[] = [
	{id:1,nombre:'Pista 1',reservada:false},
	{id:2,nombre:'Pista 2',reservada:false}
];
