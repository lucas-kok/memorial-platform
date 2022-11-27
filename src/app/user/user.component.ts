import { Component } from '@angular/core';
import { User } from './user.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  users: User[] | undefined;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users = this.userService.getAllUsers();
  }

  dateToString(date: Date): string {
    return new Date(date).toLocaleDateString();
  }
}
