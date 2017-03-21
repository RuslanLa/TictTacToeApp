import {BoardPoint} from './boardpoint';
import {Board} from './board';
export class State{
       private _combinations:BoardPoint[][];
       constructor( board:Board){
            this._combinations=[];
            for(var i=0; i<3; i++){
                this._combinations[i]=[];
                delete this._combinations[i];
            }            
       }
}