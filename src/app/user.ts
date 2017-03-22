import { Component, ViewChild } from '@angular/core';
import { GameStat } from "./gamestat"
import { Player } from './player'
@Component({
  selector: 'user',
  templateUrl: './user.html',
  styleUrls: ['./app.component.css']
})
export class User {
  public UserName: string;
  @ViewChild("player")
  public player: Player;
  @ViewChild("gameStat")
  gameStat: GameStat;

  ngOnInit() {
  }

}