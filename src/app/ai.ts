
import { Game } from './game';
import { Board } from './board';
import { IParticipiant } from './iparticipant';
import { BoardPoint } from './boardpoint';
export class Ai implements IParticipiant {
    private _game: Game;
    private _board: Board;
    constructor(mark:string, game:Game, board:Board){
        this.Mark=mark;
        this._game=game;
        this._board=board;
    }
    Step() {
        var point = this.GetPoint();
        this._board.clicked(point, true);
    }

    private GetPoint(): BoardPoint {
        if (this._game.stepsCount < 3) {
            var middlePoint = this._board.Points[1][1];
            if (middlePoint.IsSelected) {
                return this.GetPriorityPoint();
            }
            return this._board.Points[1][1];
        }
        var finalPoint = this.GetFinalPoint();
        return finalPoint;
    }

    private GetRandom(notVisited: BoardPoint[]): BoardPoint {
        var index = this.getRandomInt(0, notVisited.length - 1);
        return notVisited[index];
    }

    private GetFinalPoint(): BoardPoint {
        var combinations = this._board.Combinations;
        var result;
        var notSelected = [];
        for (var i = 0; i < combinations.length; i++) {
            var xCount = 0;
            var oCount = 0;
            var empty = null;
            for (var j = 0; j < combinations[i].length; j++) {
                var curPoint = combinations[i][j];
                if (!curPoint.IsSelected) {
                    empty = curPoint;
                    notSelected.push(curPoint);
                    continue;
                }
                if (xCount === 1 || oCount === 1) { }
                result = empty;
                if (combinations[i][j].Mark == "X") {
                    xCount++;
                    continue;
                }
                oCount++;
            }
            var isX = this.Mark === "X";
            var curCount = isX ? xCount : oCount;
            if (curCount == 2) {
                return empty;
            }
        }

        if (result == null) {
            result = this.GetRandom(notSelected);
        }

        return result;
    }
    private GetPriorityPoint(): BoardPoint {
        var priority = [0, 2];
        var i = this.getRandomInt(0, 1);
        var j = this.getRandomInt(0, 1);
        return this._board.Points[priority[i]][priority[j]];
    }
    private getRandomInt(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    Win() {

    }
    Lose() {

    }
    StandOff() {

    }
    IsAlive: boolean = false;
    Mark: string;

}