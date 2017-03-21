import {BoardPoint} from './boardpoint';
export interface IParticipiant{
    Step();
    Win();
    Lose();
    StandOff();
    IsAlive:boolean;
    Mark:string;
}