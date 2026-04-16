import { Parametro } from './Parametro.js';
const arrParametros = [
    new Parametro('Nombres', 1, 30, 'string'),
    new Parametro('Apellidos', 31, 30, 'string'),
    new Parametro('Fecha Nacimiento', 1, 8, 'xx/xx/xxxx'),
    new Parametro('Importe', 9, 15, 'number'),
];
export { arrParametros };
