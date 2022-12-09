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
  loggedIn: boolean | undefined = localStorage.getItem('jwtToken') != null;
  email: string | null;

  constructor(private userService: UserService) {
    this.email = localStorage.getItem('email');
  }

  ngOnInit() {
    this.subscription = this.userService
      .getAllUsers()
      .pipe(
        map((res: any) => res),
        tap((res) => {
          this.users = res.result;
        })
      )
      .subscribe();
  }

  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
  }

  onLogOut() {
    this.userService.logout();
    this.loggedIn = false;
  }

  dateToString(date: Date): string {
    return new Date(date).toLocaleDateString();
  }
}
