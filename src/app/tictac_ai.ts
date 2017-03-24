
import { Game } from './game';
import { Board } from './board';
import { IParticipiant } from './iparticipant';
import { BoardPoint } from './boardpoint';
import { RandomService } from "./random.service";

/**имитатор искусственного интелекта*/
export class TicTacAi implements IParticipiant {

    /**Игра */
    private _game: Game;


    constructor(mark: string, game: Game, private randomService: RandomService) {
        this.Mark = mark;
        this._game = game;
    }

    /**Выполняет шаг */
    Step(board:Board) {
        var point = this.GetPoint(board);
        board.Step(point, true);
    }
    /**Возвращает точку в которую будет выполнен шаг */
    private GetPoint(board:Board): BoardPoint {
        if (this._game.stepsCount < 3) {
            var middlePoint = board.Points[1][1];
            if (middlePoint.IsSelected) {
                return this.GetPriorityPoint(board);
            }
            return board.Points[1][1];
        }
        var notSelected = [];
        var finalPoint = this.GetFinalPoint(notSelected, board);
        if (finalPoint == null) {
            finalPoint = this.randomService.GetRandomFromArray(notSelected);
        }
        return finalPoint;
    }


    /**Возвращает точку для финальных стадий игры */
    private GetFinalPoint(notSelected: BoardPoint[], board:Board): BoardPoint {
        var combinations = board.Combinations;
        var result;
        //Проход по всем тройкам
        for (var i = 0; i < combinations.length; i++) {
            var xCount = 0;
            var oCount = 0;
            var empty = null;

            //Перебор точек тройки
            for (var j = 0; j < combinations[i].length; j++) {
                var curPoint = combinations[i][j];

                //Сохрняем пустую точку
                if (!curPoint.IsSelected) {
                    empty = curPoint;
                    notSelected.push(curPoint);
                    continue;
                }

                //Считаем маркеры X
                if (combinations[i][j].Mark == "X") {
                    xCount++;
                    continue;
                }

                //Считаем маркеры O
                oCount++;
            }
            var isX = this.Mark === "X";
            var curCount = isX ? xCount : oCount;
            var otherCount = isX ? oCount : xCount;

            //Если в тройке 2 наших маркера и ни одного чужого - выбираем 
            //пустую точку
            if (curCount === 2 && otherCount === 0) {
                return empty;
            }
            
            //Если в тройке один свободный и 2 противника
            //запоминаем точку и если не найдем точки
            //для победы - используем еёы
            if (otherCount === 2 && curCount === 0) {
                result = empty;
            }
        }

        return result;
    }

    /**Возвращает точку для первых действий */
    private GetPriorityPoint(board:Board): BoardPoint {
        var priority = [0, 2];
        var point:BoardPoint=null;
        var checker=0;
        while((point==null||(point.IsSelected))&&checker<4){
            checker++;
        var i = this.randomService.GetRandomInt(0, 1);
        var j = this.randomService.GetRandomInt(0, 1);
         point= board.Points[priority[i]][priority[j]];
        }

        if(point==null){
            throw "Something is going wrong. Cannot find priority point";
        }

        return point;
    }

    /**Обработчик победы
     * статистику для ai не ведем
     */
    Win() {

    }

      /**Обработчик выигрыша
     * статистику для ai не ведем
     */
    Lose() {

    }

     /**Обработчик ничьи
     * статистику для ai не ведем
     */
    StandOff() {

    }

    /**Признак что участник игры живой */
    IsAlive: boolean = false;
    
    /**Маркер */
    private _mark:string;
  
    /**Маркер */
    get Mark(): string{
        return this._mark;
    }

    /**Маркер */
    set Mark( value:string){

        if(value!=="X"&&value!=="O"){
            value="O";
        }
        this._mark=value;
    }

}