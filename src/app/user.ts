import { Component, ViewChild } from '@angular/core';
import {GameStat} from "./gamestat"
@Component({
  selector: 'user',
  templateUrl: './user.html',
  styleUrls: ['./app.component.css']
})
export class User{
    public UserName:string;
      @ViewChild("gameStat")
       gameStat:GameStat;

        ngOnInit() { 
    }
    
}