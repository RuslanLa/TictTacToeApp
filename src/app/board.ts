import { Component, ViewChild } from '@angular/core';
import { PointComponent } from './pointcomponent';
import { BoardPoint } from './boardpoint';
import { IParticipiant } from './iparticipant'
import { User } from './user';
import { Game } from './game';
@Component({
    selector: 'board',
    templateUrl: './board.html',
    styleUrls: ['./board.css']
})
export class Board {
    Points: BoardPoint[][];
    private _marks: string[] = ["X", "O"];
    private _participiants: IParticipiant[];
    private i: number = 0;
    private _user: User;
    private _game: Game;
    private _lock: boolean = false;
    Combinations:BoardPoint[][]
    ngOnInit() {
        this.Points = [[]];
        //  this.Points=[
        //      [new PointComponent(new BoardPoint(0,0)), new PointComponent(new BoardPoint(0,1)), new PointComponent(new BoardPoint(0,2))],
        //       [new PointComponent(new BoardPoint(1,0)), new PointComponent(new BoardPoint(1,1)), new PointComponent(new BoardPoint(1,2))],
        //       [new PointComponent(new BoardPoint(3,0)), new PointComponent(new BoardPoint(3,1)), new PointComponent(new BoardPoint(3,2))],
        //       ];
        for (var i = 0; i < 3; i++) {
            this.Points[i] = [];
            for (var j = 0; j < 3; j++) {
                this.Points[i][j] = new BoardPoint(i, j);
            }
        }

        this.Combinations=this.getAllCombinations();
    }

    bindUser(user: User) {
        this._user = user;
        this._game = new Game(user, this);
        var currentParticipiant=this._game.GetCurrent();
        debugger;
        currentParticipiant.Step();
    }

    getAllCombinations():BoardPoint[][]{
          var combinations=[this.getDiagonal(true), this.getDiagonal(false)];
          for(var i=0; i<this.Points.length; i++){
              combinations.push(this.Points[i]);
              var column=[];
              for(var j=0; j<this.Points.length; j++){
                  column.push(this.Points[j][i]);
              }
              combinations.push(column);
          }
          return combinations;
    }

    clicked(point: BoardPoint, isManually:boolean) {
        debugger;
        console.log(this._game.stepsCount);
        if (point.IsSelected || this._user == null || this._game == null || this._lock) {
            return;
        }
        this._lock = true;
        var currentParticipiant = this._game.GetCurrent();
        if (!currentParticipiant.IsAlive&&!isManually) {
            this._lock = false;
            return;
        }
        point.IsSelected = true;
        point.Mark = currentParticipiant.Mark;
        var isWon = this.checkIsWon(point);
        var isStandoff = this.checkIsStandoff();
        if (isWon || isStandoff) {
            if (isWon) {
                this._game.Win();
            }
            else {
                this._game.Standoff();
            }
            this.clear();
            return;
        }
        this._lock = false;
        this._game.NextStep();
    }

    clear() {
        for (var i = 0; i < this.Points.length; i++) {
            for (var j = 0; j < this.Points.length; j++) {
                this.Points[i][j].IsSelected = false;
                this.Points[i][j].Mark = "blank"
            }
        }
        this._game = new Game(this._user, this);
        this._lock = false;
    }

    checkIsStandoff():boolean {
        return this._game.stepsCount === (this.Points.length * this.Points.length - 1);
    }

    checkIsWon(point: BoardPoint): boolean {
        var checked = this.checkLine(this.Points[point.Horizontal], point.Mark);
        if (checked) {
            return true;
        }
        var column = [];
        for (var i = 0; i < this.Points.length; i++) {
            column.push(this.Points[i][point.Vertical]);
        }
        checked = this.checkLine(column, point.Mark);
        return checked || this.checkDiagonal(point, true) || this.checkDiagonal(point, false);
    }

    checkLine(points: BoardPoint[], mark: string): boolean {
        return points.every((value: BoardPoint) => {
            return value.Mark === mark;
        });
    }

    getDiagonal(isMain: boolean):BoardPoint[]{
        var result=[];
        for (var i = 0; i < this.Points.length; i++) {
            var j = isMain ? i : (this.Points.length - 1 - i);
            result.push(this.Points[i][j]);
        }

        return result;
    }

    checkDiagonal(boardpoint: BoardPoint, isMain: boolean): boolean {
        var vertical = isMain ? boardpoint.Vertical : (this.Points.length - 1 - boardpoint.Vertical)
        if (boardpoint.Horizontal !== vertical) {
            return false;
        }

        for (var i = 0; i < this.Points.length; i++) {
            var j = isMain ? i : (this.Points.length - 1 - i);
            if (this.Points[i][j].Mark != boardpoint.Mark) {
                return false;
            }
        }

        return true;
    }
}