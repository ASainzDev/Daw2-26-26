import { DataTypes, Model} from 'sequelize';

import sequelize from '../config/database'

class Equipo extends Model {
    id!: number;
    nombre!: string;
    sede!: string;
}

Equipo.init(
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
}
)

export default Equipo;

