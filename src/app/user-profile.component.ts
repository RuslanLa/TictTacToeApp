import { Component, Input } from '@angular/core';
import { User } from './user'
@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html'
})

/**Информация о пользователе */
export class UserProfileComponent {
    @Input() data:User;
}