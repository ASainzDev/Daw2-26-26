// import { DataTypes, Model } from 'sequelize';
// import sequelize from '../config/database';
// import Antiequipo from '../models/antiequipos';
// import Antiequipos from "../models/antiequipos";
//
// class Villano extends Model {
//     public id!: number;
//     public nombre!: string;
//     // Para evitar problemas con la bd y tener que definir el field uso snake_case como en la BD
//     public antiequipo_id!: number;
// }
//
// Villano.init(
//     {
//         id: {
//             type: DataTypes.INTEGER,
//             autoIncrement: true,
//             primaryKey: true,
//         },
//         nombre: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//         antiequipo_id: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//         },
//     },
//     {
//         sequelize,
//         tableName: 'villanos',
//     }
// );
//
// // Debo definir las relaciones para que todo encaje con lo representado en la BD.
//
// Antiequipo.hasMany(Villano, {foreignKey: 'antiequipo_id'});
// Villano.belongsTo(Antiequipos, {foreignKey: 'antiequipo_id'});
//
// export default Villano;