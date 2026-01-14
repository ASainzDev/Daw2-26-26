import {DataTypes, Model, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';
import sequelize from '../config/database';

export type TipoPista = 'INDOOR' | 'OUTDOOR';

class Pista extends Model<InferAttributes<Pista>,InferCreationAttributes<Pista>> {
	declare id: CreationOptional<number>;
	declare nombre: string;
	declare tipo: TipoPista;
	declare precioHora: number;
}

Pista.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},

		nombre: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true
		},
		
		tipo: {
			type: DataTypes.ENUM('INDOOR', 'OUTDOOR'),
			allowNull: false
		},

		precioHora: {
			type: DataTypes.DECIMAL(4,2).UNSIGNED,
			allowNull: false,
			field: 'precio_hora'
		}
	},
	{
		sequelize,
		tableName: 'pistas',
		timestamps: false
	}
);

export default Pista;
