import chalk from 'chalk';
import moment from 'moment';


// Este programa imprime un mensaje de saludo
console.log("Hola Mundo en Node.js Alejandro Sainz Sainz");

console.log(chalk.blue("Texto azul"));
console.log(chalk.green("Texto verde"));
console.log(chalk.red.bold("Texto rojo y en negrita"));

console.log("Fecha actual:", moment().format("YYYY-MM-DD HH:mm:ss"));