import {User} from './user';
import {IParticipiant} from './iparticipant';
import {BoardPoint} from './boardpoint';
import{EventEmitter} from '@angular/core'
export class Player implements IParticipiant{
    Mark:string;
    User:User;
    IsAlive:boolean=true;
    stepHandled = new EventEmitter<BoardPoint>();
    Step(){
    }
    constructor(user:User, mark:string){
        this.User=user;
        this.Mark=mark;
    }

    Win(){
     this.User.gameStat.win();
    }
    Lose(){
     this.User.gameStat.lose();
    }
    StandOff(){
     this.User.gameStat.gameEnd();
    }
}