import { DataTypes, Model} from 'sequelize';

import sequelize from '../config/db'

class Equipos extends Model {
    id!: number;
    nombre!: string;
    sede!: string;
}

Equipos.init(
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        sede: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    },
    {
        sequelize,
        tableName: 'equipos',
        timestamps: false,
    }
)

export default Equipos;