import { BoardPoint } from './boardpoint';
import { Board } from "./board";

/**Интерфейс участника игры */
export interface IParticipiant{

    /**Выполняет шаг */
    Step(board:Board);

    /**Обработчик выигрыша */
    Win();

    /**Обработчик проигрыша */
    Lose();

    /**Обработчик ничьи */
    StandOff();

    /**Признак что участник живой */
    IsAlive:boolean;

    /**Знак участника */
    Mark:string;
}