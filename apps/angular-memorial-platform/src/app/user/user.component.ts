import { Component } from '@angular/core';
import { map, Subscription, tap } from 'rxjs';
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

  constructor(private userService: UserService) {}

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

  dateToString(date: Date): string {
    return new Date(date).toLocaleDateString();
  }
}
