import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Celda } from '../celda';

@Component({
  selector: 'app-tablero',
  standalone: true,
  imports: [],
  templateUrl: './tablero.component.html',
  styleUrl: './tablero.component.css',
})
export class TableroComponent implements OnInit {
  @Input({ required: true }) largoTablero: number = 3;
  @Input({ required: true }) modalidad: number = 1;
  @Output() juegoFinalizado = new EventEmitter<boolean>();
  tablero: Celda[][] = [];

  ngOnInit(): void {
    this.iniciarTablero();
    this.iniciarCeldas();
  }

  iniciarTablero(): void {
    for (let row = 0; row < this.largoTablero; row++) {
      this.tablero[row] = [];
    }
  }

  iniciarCeldas(): void {
    for (let row = 0; row < this.largoTablero; row++) {
      for (let col = 0; col < this.largoTablero; col++) {
        let estado = Math.round(Math.random() + 1) === 1;
        this.tablero[row][col] = new Celda(estado);
      }
    }
  }

  apretarCelda(_row: number, _col: number): void {
    if (this.validarJuego() === true) {
      this.juegoFinalizado.emit(true);
    } else {
      this.tablero[_row][_col].cambiarEstado();
      if (this.modalidad === 1) {
        this.intercambiarColumnaM1(_row, _col);
        this.intercambiarFilaM1(_row, _col);
      } else {
        this.intercambiarColumnaM2(_row, _col);
        this.intercambiarFilaM2(_row, _col);
      }
      if (this.validarJuego() === true) {
        this.juegoFinalizado.emit(true);
      }
    }
  }

  validarJuego() {
    let estado = false;
    for (let row = 0; row < this.largoTablero; row++) {
      for (let col = 0; col < this.largoTablero; col++) {
        estado = estado || this.tablero[row][col].getEstado();
      }
    }
    return estado === false; // Si es true, hay una celda encendida
  }

  intercambiarFilaM1(_row: number, _col: number): void {
    for (let row = 0; row < this.largoTablero; row++)
      if (row != _row) this.tablero[row][_col].cambiarEstado();
  }

  intercambiarColumnaM1(_row: number, _col: number): void {
    for (let col = 0; col < this.largoTablero; col++)
      if (col != _col) this.tablero[_row][col].cambiarEstado();
  }

  intercambiarFilaM2(_row: number, _col: number): void {
    let rowAnt = _row - 1,
      rowPost = _row + 1;
    if (_row === 0) this.tablero[rowPost][_col].cambiarEstado();
    else if (_row === this.largoTablero - 1)
      this.tablero[rowAnt][_col].cambiarEstado();
    else {
      this.tablero[rowAnt][_col].cambiarEstado();
      this.tablero[rowPost][_col].cambiarEstado();
    }
  }

  intercambiarColumnaM2(_row: number, _col: number): void {
    let colAnt = _col - 1,
      colPost = _col + 1;
    if (_col === 0) this.tablero[_row][colPost].cambiarEstado();
    else if (_col === this.largoTablero - 1)
      this.tablero[_row][colAnt].cambiarEstado();
    else {
      this.tablero[_row][colAnt].cambiarEstado();
      this.tablero[_row][colPost].cambiarEstado();
    }
  }
}
