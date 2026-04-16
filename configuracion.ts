import { Parametro } from './Parametro.js'

const arrParametros: Parametro[] = [
  new Parametro('Tipo de novedad', 1, 1, 'string'),
  new Parametro('CUIT Empresa Originante', 2, 11, '0number'),
  new Parametro('Sector', 13, 3, 'string'),
  new Parametro('Prestación', 16, 10, 'string'),
  new Parametro('Fecha de Vencimiento', 26, 8, 'xx/xx/xxxx'),
  new Parametro('CBU Bloque 1', 34, 8, '0number'),
  new Parametro('Filler CBU2 (000)', 42, 3, '0number'),
  new Parametro('CBU Bloque 2', 45, 14, '0number'),
  new Parametro('Identificación del cliente', 59, 22, '0number'),
  new Parametro('Vto.del débito original', 81, 8, 'xx/xx/xxxx'),
  new Parametro('Ref.del débito', 89, 15, 'string'),
  new Parametro('Importe', 104, 10, 'numbercoma'),
  new Parametro('Moneda del débito', 114, 2, 'moneda'),
  new Parametro('Fecha de Vencimiento (2do Vto)', 116, 8, 'xx/xx/xxxx'),
  new Parametro('Importe (2do Vto)', 124, 10, 'numbercoma'),
  new Parametro('Fecha de Vencimiento (3er Vto)', 134, 8, 'xx/xx/xxxx'),
  new Parametro('Importe (3er Vto)', 142, 10, 'numbercoma'),
  new Parametro('Identificador pagador nuevo', 152, 22, 'string'),
  new Parametro('Codigo de Rechazos', 174, 3, '0number'),
  new Parametro('Nro. de Orden', 177, 10, 'number'),
  new Parametro('Nro de Movimiento', 187, 10, 'number'),
  new Parametro('FILLER', 197, 54, 'string'),

  new Parametro('Tipo de novedad', 1, 1, 'string'),
  new Parametro('Cant. de Reg. Totales', 2, 10, 'number'),
  new Parametro('Cant. de Reg. Monetarios', 12, 7, 'number'),
  new Parametro('Cant. de Reg. No Monetarios', 19, 7, 'number'),
  new Parametro('Fecha de Proceso', 26, 8, 'xx/xx/xxxx'),
  new Parametro('FILLER', 34, 70, 'string'),
  new Parametro('Suma de Importes de Registros', 104, 10, 'numbercoma'),
  new Parametro('FILLER', 114, 137, 'string'),
]

export { arrParametros }
