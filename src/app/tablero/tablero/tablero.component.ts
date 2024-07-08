import { Component, Input, OnInit } from '@angular/core';
import { Celda } from '../celda';

@Component({
  selector: 'app-tablero',
  standalone: true,
  imports: [
  ],
  templateUrl: './tablero.component.html',
  styleUrl: './tablero.component.css'
})
export class TableroComponent implements OnInit {
  @Input({ required: true }) largoTablero: number = 3;
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
        this.tablero[row][col] = new Celda();
        let estado = Math.round(Math.random() + 1) === 1;
        this.tablero[row][col].asignarEstado(estado);
      }
    }
  }

  
}
