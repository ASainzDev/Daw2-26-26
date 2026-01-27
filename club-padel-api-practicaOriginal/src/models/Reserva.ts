import {DataTypes, Model, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';
import sequelize from '../config/database';
import Pista from './Pista';

class Reserva extends Model<InferAttributes<Reserva>, InferCreationAttributes<Reserva>>{
	declare id: CreationOptional<number>;
	declare pistaId: number;
	declare fecha: Date;
	declare horaInicio: string;
	declare horaFin: string;
}

Reserva.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		
		pistaId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'pista_id'
		},

		fecha: {
			type: DataTypes.DATEONLY,
			allowNull: false,
		},
		
		horaInicio: {
			type: DataTypes.TIME,
			allowNull: false,
			field: 'hora_inicio'
		},
		horaFin: {
			type: DataTypes.TIME,
			allowNull: false,
			field: 'hora_fin'
		}
	},
	{
		sequelize,
		tableName: 'reservas',
		timestamps: false
	}
);

Pista.hasMany(Reserva, {
	foreignKey: 'pistaId'
});

Reserva.belongsTo(Pista, {
	foreignKey: 'pistaId'
});

export default Reserva;
