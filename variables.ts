//! ELEMENTOS HTML

const btnDescargarExcel = document.getElementById(
  'btn-download',
) as HTMLButtonElement
const dropZone = document.getElementById('drop-zone') as HTMLDivElement
const inputArchivo = document.getElementById(
  'input-file',
) as HTMLInputElement

//! CONSTANTES

const contTabla: string[] = []

export { btnDescargarExcel, contTabla, dropZone, inputArchivo }
