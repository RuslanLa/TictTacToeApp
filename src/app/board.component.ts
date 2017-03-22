import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Board } from './board'
import { BoardPoint } from "./boardpoint";
@Component({
    selector: 'board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.css'],
})

/**Компонент доски */
export class BoardComponent implements OnInit {
        ngOnInit(): void {
            this.data.OnFinished=this.onFinished;
        }


   /**Сами данные */
    @Input() data: Board;
 
    /**Событие на завершение игры */
    @Output() onFinished:EventEmitter<any>=new EventEmitter<any>();

    /**Обработчик нажатия на  клетку доски*/
    Clicked(point: BoardPoint, isManually: boolean) {
        debugger;
        if (this.data != null) {
            this.data.Step(point, isManually);
        }
    }
}