import { Component } from '@angular/core';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  loggedIn = this.userService.getIsLoggedIn();
  userId: string | undefined;

  constructor(private userService: UserService) {
    console.log(this.loggedIn);

    this.userService.getUserId().subscribe((id) => {
      console.log('UserId: {' + this.userId + '}');
      this.userId = id;
    });
  }
}
