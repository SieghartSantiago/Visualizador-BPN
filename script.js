const dropZone = document.getElementById('drop-zone');
dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
});
dropZone.addEventListener('drop', (e) => {
    var _a;
    e.preventDefault();
    const files = (_a = e.dataTransfer) === null || _a === void 0 ? void 0 : _a.files;
    console.log(files);
});
export {};
//# sourceMappingURL=script.js.map