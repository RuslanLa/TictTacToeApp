import { Component, ViewChild } from '@angular/core';
import { TicTacProcessorComponent } from "./tictacprocessor.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

/*
Центральный компонент окна 
*/
export class AppComponent {
  /*Заголовок*/
  title = 'Tic tac toe game!';
}
