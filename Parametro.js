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
export { Parametro };
