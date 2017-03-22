import { Injectable } from '@angular/core';
import { User } from "./user";
@Injectable()
/**Сервис пользователя*/
export class UserService{

    /**Текущий пользователь */
    private _user:User;
    
    /**Метка пользователя */
    Mark:string="X";
   
   
    /**Текущий пользователь */
    get User():User{
       if(this._user==null){
           this._user=new User();
       }

       return this._user;
    }
}