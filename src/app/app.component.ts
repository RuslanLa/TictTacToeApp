import { Component, ViewChild } from '@angular/core'; 
import {User} from "./user";
import {Board} from './board';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tic tac toe game!';
 
  @ViewChild('playerUser')
  public user:User;

  @ViewChild('board')
  public board:Board;
    ngOnInit() { 
      this.user.UserName="Ваня"; 
    }
}
