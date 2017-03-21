import { Component, ViewChild } from '@angular/core'; 
import {User} from "./user"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tic tac toe game!';
 
  @ViewChild('playerUser')
  public user:User;

    ngOnInit() { 
      this.user.UserName="Ваня"; 
    }
}
