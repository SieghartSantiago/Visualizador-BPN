const dropZone = document.getElementById('drop-zone');
dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
});
dropZone.addEventListener('drop', (e) => {
    var _a;
    e.preventDefault();
    const file = (_a = e.dataTransfer) === null || _a === void 0 ? void 0 : _a.files[0];
    if (!file)
        return;
    leerArchivo(file);
});
const inputArchivo = document.getElementById('input-archivo');
inputArchivo.addEventListener('input', (e) => {
    var _a;
    const file = (_a = inputArchivo.files) === null || _a === void 0 ? void 0 : _a[0];
    if (!file)
        return;
    leerArchivo(file);
});
function leerArchivo(file) {
    const reader = new FileReader();
    reader.onload = function (e) {
        var _a;
        console.log((_a = e.target) === null || _a === void 0 ? void 0 : _a.result);
    };
    reader.readAsText(file);
}
export {};
//# sourceMappingURL=script.js.map