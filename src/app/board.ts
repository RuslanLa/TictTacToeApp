import { EventEmitter } from '@angular/core';
import { BoardPoint } from './boardpoint';
import { IParticipiant } from './iparticipant'
import { User } from './user';
import { Game } from './game';
import { LockerService } from './locker.service';
import { MatrixService } from "./matrix.service";
import { GameService } from "app/game.service";

/**Доска */
export class Board {

    constructor(private locker: LockerService, private matrixService: MatrixService, private gameService:GameService) {

    }
    /**Точки доски */
    private _points: BoardPoint[][] = [];

    /**Точки доски */
    get Points(): BoardPoint[][] {
        if (this._points == null || this._points.length == 0) {
            for (var i = 0; i < 3; i++) {
                this._points[i] = [];
                for (var j = 0; j < 3; j++) {
                    this._points[i][j] = new BoardPoint(i, j);
                }
            }
        }

        return this._points;
    }

    /**Событие на завершение игры */
    private _onFinished: EventEmitter<any>;

    /**Событие на завершение игры */
    set OnFinished(value: EventEmitter<any>) {
        if (value == null) {
            throw "EventEmitter onfinished cannot be null";
        }
        this._onFinished = value;
    }

    /**Событие на завершение игры */
    get OnFinished(): EventEmitter<any> {
        if (this._onFinished == null) {
            throw "EventEmitter onfinished is null";
        }
        return this._onFinished;
    }

    /**Возможные комбинации */
    private _combinations: BoardPoint[][] = [];


    /**Возможные комбинации */
    get Combinations(): BoardPoint[][] {
        if (this._combinations == null || this._combinations.length == 0) {
            this._combinations = this.GetAllCombinations();
        }

        return this._combinations;
    }

    /**Привязка пользователя к доске */
    BindUser() {
        this.gameService.StartNew();
        if(this.gameService.Game==null){
            throw "Game is empty";
        }
        this.Сlear();
        var currentParticipiant = this.gameService.Game.GetCurrent();
        currentParticipiant.Step(this);
    }

    /**Возвращает все возможные комбинации */
    private GetAllCombinations(): BoardPoint[][] {
        var combinations = [this.matrixService.GetDiagonal<BoardPoint>(true, this.Points), this.matrixService.GetDiagonal<BoardPoint>(false, this.Points)];
        for (var i = 0; i < this.Points.length; i++) {
            combinations.push(this.Points[i]);
            var column = [];
            for (var j = 0; j < this.Points.length; j++) {
                column.push(this.Points[j][i]);
            }
            combinations.push(column);
        }
        return combinations;
    }

    /**Обработчик хода */
    Step(point: BoardPoint, isManually: boolean) {
        if (point == null || point.IsSelected || this.gameService.Game == null || this.locker.IsLocked) {
            return;
        }
        //Наложение блокировки на повторное нажатие 
        this.locker.SetLock();
        /**Получение текущего пользователя */
        var currentParticipiant = this.gameService.Game.GetCurrent();

        //Если текущий участник игры не живой игрок и ход выполнен не программно
        //- ход не считается
        if (!currentParticipiant.IsAlive && !isManually) {
            this.locker.Unlock();
            return;
        }
        point.Choose(currentParticipiant.Mark);

        //Проверка что игра закончилась
        if (this.CheckIsEnd(point)) {
            return;
        }

        //Разблокировка
        this.locker.Unlock();

        //Переход к следующему шагу
        this.gameService.Game.NextStep(this);
    }

    /**Очистка  поля*/
    private Сlear() {
        for (var i = 0; i < this.Points.length; i++) {
            for (var j = 0; j < this.Points.length; j++) {
                this.Points[i][j].Clear();
            }
        }
        this.locker.Unlock();
    }

    /**Проверка что игра закончилась ничьей */
    private СheckIsStandoff(): boolean {
        return this.gameService.Game.stepsCount === (this.Points.length * this.Points.length - 1);
    }

    /**Проверка что шаг привел к победе */
    private CheckIsWon(point: BoardPoint): boolean {
        var checked = this.CheckLine(this.Points[point.Horizontal], point.Mark);
        if (checked) {
            return true;
        }
        var column = [];
        for (var i = 0; i < this.Points.length; i++) {
            column.push(this.Points[i][point.Vertical]);
        }
        checked = this.CheckLine(column, point.Mark);
        return checked || this.CheckDiagonal(point, true) || this.CheckDiagonal(point, false);
    }

    /**Проверка что игра закончилась */
    private CheckIsEnd(point: BoardPoint): boolean {
        var isWon = this.CheckIsWon(point);
        var isStandoff = this.СheckIsStandoff();
        if (!isWon && !isStandoff) {
            return false;
        }

        if (isWon) {
            this.gameService.Game.Win();
        }
        else {
            this.gameService.Game.Standoff();
        }
        this.gameService.EndGame();
        this.OnFinished.emit();

        return true;
    }

    /**Проверка что массив заполнен одним знаком */
    CheckLine(points: BoardPoint[], mark: string): boolean {
        return this.matrixService.CheckLine<BoardPoint>(points, (value: BoardPoint) => {
            return value.Mark === mark;
        });
    }

    /**Проверка что диагональ заполнена одним знаком */
    CheckDiagonal(boardpoint: BoardPoint, isMain: boolean): boolean {
        var vertical = isMain ? boardpoint.Vertical : (this.Points.length - 1 - boardpoint.Vertical)
        if (boardpoint.Horizontal !== vertical) {
            return false;
        }

        return this.matrixService.СheckDiagonal<BoardPoint>(this.Points, isMain,
            (value: BoardPoint) => value.Mark === boardpoint.Mark);
    }
}