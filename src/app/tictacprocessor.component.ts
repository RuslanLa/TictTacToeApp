import { Component, ViewChild, OnInit } from '@angular/core';
import { User } from "./user";
import { Board } from './board';
import { UserService } from "./user.service";
import { BoardService } from "./board.service";

@Component({
    selector: 'tic-tac',
    templateUrl: './tictacprocessor.component.html',
})
/**Компонент игрового окна */
export class TicTacProcessorComponent implements OnInit {
    constructor(private userService: UserService, private boardService: BoardService) {

    }
    ngOnInit(): void {
        this.User = this.userService.User;
        this.Board = this.boardService.Board;
    }
    /**Пользователь */
    User: User;
    Board: Board;

    /**Указатель на то что игра находится в процессе */
    isProcessing: boolean = false;

    /**Запуск игры
     * Связывает пользователя и доску
     */
    start(mark: string) {
        debugger;
        this.Board.BindUser();
        this.isProcessing = true;
    }

    /**
     * Обработчик окончания игры
     */
    onGameEnded() {
        this.isProcessing = false;
    }
}
