import { Injectable } from '@angular/core';
import { Game } from "./game";
import { UserService } from "./user.service";
import { BoardService } from "./board.service";
import { ParticipiantsService } from "./participiants.service";
@Injectable()
/**Сервис пользователя*/
export class GameService{

    constructor(private participiantsService:ParticipiantsService){
        
    }
    /**Текущая игра */
    private _game:Game;
    
    /**Начало новой игры */
    StartNew(){
        this._game=new Game(this.participiantsService);
    }
    
    /**Получение текущей игры */
    get Game():Game{
        return this._game;
    }
    

    /**Окончание игры */
    EndGame(){
        this._game=null;
    }
}