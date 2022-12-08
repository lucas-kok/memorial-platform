import { Component } from '@angular/core';
import { async, catchError, map, Subscription, tap } from 'rxjs';
import { UserLoginDto } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent {
  loginDto: UserLoginDto | undefined;
  subscription: Subscription | undefined;
  message: string | undefined;

  constructor(private userService: UserService) {
    this.loginDto = new UserLoginDto();
  }

  onLogin() {
    if (!this.loginDto) return;

    this.subscription = this.userService
      .login(this.loginDto)
      .pipe(
        map((res: any) => res),
        tap((res) => {
          console.log('Logged in');
          console.log('JwtToken: ' + res.result);
          this.message = 'Succesvol ingelogd';
        }),
        catchError(async () => {
          this.message = 'Er is iets fout gegaan';
        })
      )
      .subscribe();
  }

  ngOnDestory() {
    if (this.subscription) this.subscription.unsubscribe();
  }
}
