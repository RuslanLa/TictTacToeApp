import { Component, Output, EventEmitter, Input } from '@angular/core';
import { UserService } from "./user.service";
@Component({
    selector: 'ribbon',
    templateUrl: './gameribbon.component.html',
})

/**Компонент риббона */
export class GameRibbonComponent {

   constructor(private userService:UserService){
       
   }
    /**Событие нажатия кнопки  начала игры*/
    @Output() OnStart = new EventEmitter<string>();
   
    /**Символ, которым играет пользователь */
    userMark: string = "X";

    private _userMark:string="X";

    get UserMark():string{
        return this._userMark;
    }

    set UserMark(value:string){
         this._userMark=value;
         this.userService.Mark=value;
    }
    /**Указатель на необходимость отображения риббона */
    @Input() Show: boolean;

    /**Обработчик нажатия кнопки начала игры */
    clicked(event) {
        debugger;
        if (this.userMark == null) {
            event.preventDefault();
            return;
        }
        this.OnStart.emit(this.userMark);
    };

}