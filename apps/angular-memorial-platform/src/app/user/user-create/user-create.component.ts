import { Component } from '@angular/core';
import { Gender } from '../../shared/gender.model';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css'],
})
export class UserCreateComponent {
  newUser: User | undefined;
  genders: String[] | undefined;

  constructor(private userService: UserService) {
    this.newUser = new User();
    this.genders = Object.values(Gender);
  }

  onCreate() {
    if (this.newUser == null) return;

    this.userService.addUser(this.newUser);
  }
}
