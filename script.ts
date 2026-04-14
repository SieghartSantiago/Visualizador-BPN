const dropZone = document.getElementById('drop-zone') as HTMLDivElement

dropZone.addEventListener('dragover', (e) => {
  e.preventDefault()
})

dropZone.addEventListener('drop', (e) => {
  e.preventDefault()

  const file = e.dataTransfer?.files[0]

  if (!file) return

  leerArchivo(file)
})

const inputArchivo = document.getElementById(
  'input-archivo',
) as HTMLInputElement

inputArchivo.addEventListener('input', (e) => {
  const file = inputArchivo.files?.[0]

  if (!file) return

  leerArchivo(file)
})

function leerArchivo(file: File) {
  const reader = new FileReader()

  reader.onload = function (e) {
    console.log(e.target?.result)
  }

  reader.readAsText(file)
}
