import { Injectable } from '@angular/core';
import { Board } from "./board";
import { LockerService } from "./locker.service";
import { MatrixService } from "./matrix.service";
import { BoardPoint } from "./boardpoint";
import { GameService } from "./game.service";
@Injectable()
/**Сервис пользователя*/
export class BoardService{

    constructor(private lockerService:LockerService, private matrixService:MatrixService,
    private gameService:GameService){
        
    }
    /**Текущий пользователь */
    private _board:Board;
   
    
    /**Текущий пользователь */
    get Board():Board{
       if(this._board==null){
           this._board=new Board(this.lockerService, this.matrixService, this.gameService);
       }

       return this._board;
    }
}