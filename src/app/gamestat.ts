import { Component } from '@angular/core';

@Component({
  selector: 'game-stat',
  templateUrl: './gamestat.html',
  styleUrls: ['./app.component.css']
})
export class GameStat {
  loses:number=0;
  wins:number=0;
  allcount:number=0;
  lose(){
    this.loses++;
    this.gameEnd();
  } 

  gameEnd(){
    this.allcount++;
  }

  win(){
    this.wins++;
     this.gameEnd();
  }
}