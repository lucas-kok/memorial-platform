import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private userService: UserService, private router: Router) {
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

          localStorage.setItem('jwtToken', res.result.jwtToken);
          localStorage.setItem('userId', res.result.userId);
          localStorage.setItem('email', res.result.email);
          this.message = 'Succesvol ingelogd';

          this.router.navigate(['/users']);
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
