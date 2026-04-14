const dropZone = document.getElementById('drop-zone') as HTMLDivElement

dropZone.addEventListener('dragover', (e) => {
  e.preventDefault()
})

dropZone.addEventListener('drop', (e) => {
  e.preventDefault()
  const files = e.dataTransfer?.files
  console.log(files)
})
