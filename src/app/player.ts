import {User} from './user';
import {IParticipiant} from './iparticipant';
import {BoardPoint} from './boardpoint';
import { EventEmitter } from '@angular/core'
import { Board } from "./board";
export class Player implements IParticipiant{
    Mark:string;
    User:User;
    IsAlive:boolean=true;
    stepHandled = new EventEmitter<BoardPoint>();
    Step(board:Board){
    }
    constructor(user:User, mark:string){
        this.User=user;
        this.Mark=mark;
    }

    Win(){
     this.User.win();
    }
    Lose(){
     this.User.lose();
    }
    StandOff(){
     this.User.gameEnd();
    }
}