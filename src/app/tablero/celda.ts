export class Celda {
  private _estado?: boolean;

  asignarEstado(estado: boolean) 
    { this._estado = estado; }
  getEstado() 
    { return this._estado; }
  cambiarEstado()
    { this._estado = !this._estado; }
}
