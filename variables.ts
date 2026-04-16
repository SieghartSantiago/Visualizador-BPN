//! ELEMENTOS HTML

const btnDescargarExcel = document.getElementById(
  'btn-descargar-excel',
) as HTMLButtonElement
const dropZone = document.getElementById('drop-zone') as HTMLDivElement
const inputArchivo = document.getElementById(
  'input-archivo',
) as HTMLInputElement

//! CONSTANTES

const contTabla: string[] = []

export { btnDescargarExcel, contTabla, dropZone, inputArchivo }
