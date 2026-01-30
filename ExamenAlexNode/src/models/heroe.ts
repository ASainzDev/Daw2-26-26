import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db';
import Equipos from '../models/equipo';

class Heroe extends Model {
    public id!: number;
    public nombre!: string;
    // Para evitar problemas con la bd y tener que definir el field uso snake_case como en la BD
    public equipo_id!: number;
}

Heroe.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        equipo_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
},
},
{
    sequelize,
        tableName: 'heroes',
        timestamps: false,
}
);

// Debo definir las relaciones para que todo encaje con lo representado en la BD.

Equipos.hasMany(Heroe, {foreignKey: 'equipo_id'});
Heroe.belongsTo(Equipos, {foreignKey: 'equipo_id'});

export default Heroe;