class Parametro {
    constructor(str, startChar, length, type) {
        this.str = str;
        this.startChar = startChar;
        this.length = length;
        this.type = type;
    }
    get getStr() {
        return this.str;
    }
    get getStartChar() {
        return this.startChar;
    }
    get getLength() {
        return this.length;
    }
    get getType() {
        return this.type;
    }
}
const arrParametros = [
    new Parametro('Nombres', 1, 30, 'string'),
    new Parametro('Apellidos', 31, 30, 'string'),
    new Parametro('Fecha Nacimiento', 1, 8, 'xx/xx/xxxx'),
    new Parametro('Importe', 9, 15, 'number'),
];
function formatearStr(str, type) {
    str = str.trim();
    if (!str.length)
        return '';
    switch (type) {
        case 'string':
            return str.trim();
        case 'xx/xx/xxxx':
            if (str.length !== 8)
                return '';
            return `${str.slice(0, 2)}/${str.slice(2, 4)}/${str.slice(4)}`;
        case 'number':
            return new Intl.NumberFormat('es-AR', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            }).format(Number(str) / 100);
        case '0number':
            return str.trim();
        case 'xx/xx/xx':
            if (str.length !== 6)
                return '';
            return `${str.slice(0, 2)}/${str.slice(2, 4)}/${str.slice(4)}`;
    }
    return '';
}
const contTabla = [];
let contTablaIndex = 0;
const dropZone = document.getElementById('drop-zone');
let tabla;
function actualizarTabla() {
    if (contTabla.length < 1)
        return;
    if (contTabla.length === 1) {
        dropZone.innerHTML = '';
        dropZone.classList.remove('centrar-texto');
        const tablaTemp = document.createElement('table');
        tablaTemp.classList.add('tabla-salida');
        const cabecera = document.createElement('tr');
        cabecera.classList.add('cabecera-fila-salida');
        for (const parametro of arrParametros) {
            const celda = document.createElement('th');
            celda.classList.add('cabecera-celda-salida');
            celda.innerText = parametro.getStr;
            cabecera.appendChild(celda);
        }
        tablaTemp.appendChild(cabecera);
        tabla = tablaTemp;
        dropZone.appendChild(tabla);
    }
    for (let i = contTablaIndex; i < contTabla.length; i++) {
        const charSaltos = [String(...(contTabla[i] || '').matchAll(/\r?\n/g))];
        const saltos = [...(contTabla[i] || '').matchAll(/\r?\n/g)].map((m) => m.index);
        const fila = document.createElement('tr');
        fila.classList.add('fila-salida');
        let indexChar = 0;
        let saltosHechos = [];
        for (const parametro of arrParametros) {
            const celda = document.createElement('td');
            celda.classList.add('celda-salida');
            const saltosHechosNum = saltosHechos.reduce((a, v) => a + v, 0);
            celda.innerText = formatearStr(contTabla[i]
                ?.slice(parametro.getStartChar - 1 + saltosHechosNum, parametro.getStartChar + parametro.getLength - 1 + saltosHechosNum)
                .trim() || '', parametro.getType);
            fila.appendChild(celda);
            indexChar += parametro.getLength;
            if (indexChar >= (saltos[0] || Infinity)) {
                saltosHechos.push(indexChar + (charSaltos[0]?.length || 0));
                indexChar = 0;
                saltos.shift();
                charSaltos.shift();
            }
        }
        tabla.appendChild(fila);
        contTablaIndex++;
    }
}
dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
});
dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    const files = e.dataTransfer?.files;
    if (!files)
        return;
    for (const file of files) {
        if (!file)
            return;
        leerArchivo(file);
    }
});
const inputArchivo = document.getElementById('input-archivo');
inputArchivo.addEventListener('input', (e) => {
    const files = inputArchivo.files;
    if (!files)
        return;
    for (const file of files) {
        if (!file)
            return;
        leerArchivo(file);
    }
});
function leerArchivo(file) {
    const reader = new FileReader();
    reader.onload = function (e) {
        contTabla.push(String(e.target?.result));
        actualizarTabla();
    };
    reader.readAsText(file);
}
export {};
//# sourceMappingURL=script.js.map