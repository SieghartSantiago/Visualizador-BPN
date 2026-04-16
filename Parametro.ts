class Parametro {
  private str: string
  private startChar: number
  private length: number
  private type: string

  constructor(str: string, startChar: number, length: number, type: string) {
    this.str = str
    this.startChar = startChar
    this.length = length
    this.type = type
  }

  public get getStr(): string {
    return this.str
  }

  public get getStartChar(): number {
    return this.startChar
  }

  public get getLength(): number {
    return this.length
  }

  public get getType(): string {
    return this.type
  }
}

export { Parametro }
