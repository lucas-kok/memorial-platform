import { Component } from '@angular/core';
import { catchError, map, Subscription, tap } from 'rxjs';
import { User } from './user.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  users: User[] | undefined;
  subscription: Subscription | undefined;
  loggedIn = this.userService.getIsLoggedIn();
  email: string | null;

  constructor(private userService: UserService) {
    this.email = localStorage.getItem('email');
  }

  ngOnInit() {
    this.userService.getAllUsers().subscribe((res: any) => {
      this.users = res.result;
    });
  }

  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
  }

  onLogOut() {
    this.userService.logout();
  }

  dateToString(date: Date): string {
    return new Date(date).toLocaleDateString();
  }
}
