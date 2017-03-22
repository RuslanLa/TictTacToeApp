import { Injectable } from '@angular/core';
import { User } from "./user";
import { Board } from "./board";
import { TicTacAi } from "./tictac_ai";
import { Player } from "./player";
import { RandomService } from "./random.service";
import { Game } from "./game";
import { UserService } from "./user.service";
import { BoardService } from "./board.service";
import { GameService } from "./game.service";
@Injectable()
/**Сервис участников игры */
export class ParticipiantsService{
    constructor(private randomService:RandomService, private userService:UserService){
        
    }

    /**Создает участников */
    GetParticipiants(game:Game){
         var aiMark=this.userService.Mark==="X"?"O":"X";
            return [new Player(this.userService.User, this.userService.Mark), new TicTacAi(aiMark, game, this.randomService)].sort((a)=>a.Mark=="X"?0:1);
    }
}