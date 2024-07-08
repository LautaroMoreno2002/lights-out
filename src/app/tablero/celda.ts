export class Celda {
  private _estado: boolean;

  constructor(estado: boolean) {
    this._estado = estado;
  }
  asignarEstado(estado: boolean) 
    { this._estado = estado; }
  getEstado(): boolean
    { return this._estado; }
  cambiarEstado()
    { this._estado = !this._estado; }
}
