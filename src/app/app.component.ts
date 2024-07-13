import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BoardComponent } from './board-game/board/board.component';
import { FormConfigComponent } from './form-config/form-config.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    BoardComponent,
    FormConfigComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  finished: boolean = false;
  level: number = 3;
  mod: number = 1;

  StateBoard($event: boolean) {
    this.finished = $event;
  }

}
