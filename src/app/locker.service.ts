import { Injectable } from '@angular/core';
@Injectable()

/**Сервис блокировщик */
export class LockerService{
    private _isLocked:boolean=false;

    /**Вовзращает признак блокировки */
    get IsLocked():boolean{
        return this._isLocked;
    }
 
    /**Навешивает блокировку */
    SetLock(){
       this._isLocked=true;
    }
    

    /**Снимает блокировку */
    Unlock(){
        this._isLocked=false;
    }
}