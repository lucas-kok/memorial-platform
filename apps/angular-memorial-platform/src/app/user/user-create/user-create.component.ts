import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Subscription, tap } from 'rxjs';
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
  subscription: Subscription | undefined;
  message: String | undefined;

  constructor(private userService: UserService, private router: Router) {
    this.newUser = new User();
    this.genders = Object.keys(Gender);
  }

  onCreate() {
    if (this.newUser == null) return;

    this.subscription = this.userService
      .addUser(this.newUser)
      .pipe(
        map((res: any) => res),
        tap((res) => {
          console.log('[UserCreateComponent] User created');

          this.message = 'User created succesfully!';
          this.router.navigate(['/users']);
        }),
        catchError(async () => {
          this.message = 'Er is iets fout gegaan';
        })
      )
      .subscribe();
  }

  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
  }
}
