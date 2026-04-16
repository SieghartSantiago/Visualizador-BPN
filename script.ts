import { arrParametros } from './configuracion.js'
import * as vars from './variables.js'

let tabla: HTMLTableElement
let contTablaIndex: number = 0

declare const XLSX : any

//! FUNCIONES

function formatearStr(str: string, type: string): string {
  str = str.trim()

  if (!str.length) return ''

  switch (type) {
    case 'string':
      return str

    case 'xx/xx/xxxx':
      if (str.length !== 8) return ''
      return `${str.slice(0, 2)}/${str.slice(2, 4)}/${str.slice(4)}`

    case 'number':
      return String(Number(str))

    case 'numbercoma':
      return new Intl.NumberFormat('es-AR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(Number(str) / 100)

    case '0number':
      return str

    case 'xx/xx/xx':
      if (str.length !== 6) return ''
      return `${str.slice(0, 2)}/${str.slice(2, 4)}/${str.slice(4)}`
    
    case 'moneda':
      switch (str) {
        case '80':
          return 'Pesos'
      
        case '82':
          return 'Dolares'
      }
  }

  return ''
}

function actualizarTabla(): void {
  if (vars.contTabla.length < 1) return

  //* Crea tabla
  if (vars.contTabla.length === 1) {
    vars.dropZone.innerHTML = ''
    vars.dropZone.classList.remove('flex-center')

    const tablaTemp = document.createElement('table')
    tablaTemp.classList.add('table')

    const cabecera = document.createElement('tr')

    for (const parametro of arrParametros) {
      const celda = document.createElement('th')
      celda.innerText = parametro.getStr

      cabecera.appendChild(celda)
    }

    tablaTemp.appendChild(cabecera)

    tabla = tablaTemp
    vars.dropZone.appendChild(tabla)

    vars.btnDescargarExcel.disabled = false
  }

  //* Agrega archivos añadidos
  for (let i = contTablaIndex; i < vars.contTabla.length; i++) {
    const charSaltos = [String(...(vars.contTabla[i] || '').matchAll(/\r?\n/g))]

    const saltos = [...(vars.contTabla[i] || '').matchAll(/\r?\n/g)].map(
      (m) => m.index!,
    )

    const fila = document.createElement('tr')

    let indexChar = 0
    let saltosHechos: number[] = []

    for (const parametro of arrParametros) {
      const celda = document.createElement('td')

      const saltosHechosNum = saltosHechos.reduce((a, v) => a + v, 0)

      celda.innerText = formatearStr(
        vars.contTabla[i]
          ?.slice(
            parametro.getStartChar - 1 + saltosHechosNum,
            parametro.getStartChar + parametro.getLength - 1 + saltosHechosNum,
          )
          .trim() || '',
        parametro.getType,
      )

      fila.appendChild(celda)
      indexChar += parametro.getLength

      if (indexChar >= (saltos[0] || Infinity)) {
        saltosHechos.push(indexChar + (charSaltos[0]?.length || 0))
        indexChar = 0
        saltos.shift()
        charSaltos.shift()
      }
    }

    tabla.appendChild(fila)
    contTablaIndex++
  }
}

function leerArchivo(file: File) {
  const reader = new FileReader()

  reader.onload = function (e) {
    vars.contTabla.push(String(e.target?.result))
    actualizarTabla()
  }

  reader.readAsText(file)
}

//* Exporta a Excel con un CDN
//? Ver de hacerlo 100% offline
function exportarAExcel(): void {
  const wb = XLSX.utils.table_to_book(tabla, { sheet: 'Hoja1' })
  XLSX.writeFile(wb, 'tabla.xlsx')
}

//! EVENT LISTENERS

vars.dropZone.addEventListener('dragover', (e) => {
  e.preventDefault()
})

vars.dropZone.addEventListener('drop', (e) => {
  e.preventDefault()

  const files = e.dataTransfer?.files

  if (!files) return

  for (const file of files) {
    if (!file) return

    leerArchivo(file)
  }
})

vars.inputArchivo.addEventListener('input', (e) => {
  const files = vars.inputArchivo.files

  if (!files) return

  for (const file of files) {
    if (!file) return

    leerArchivo(file)
  }
})

vars.btnDescargarExcel.addEventListener('click', exportarAExcel)
