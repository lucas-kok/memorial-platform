import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { async, catchError, map, Subscription, tap, throwError } from 'rxjs';
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
        tap(() => {
          console.log('Logged in');

          this.message = 'Succesvol ingelogd';

          this.router.navigate(['/']);
        }),
        catchError((error) => {
          if (error.status === 404) this.message = 'Invalide login poging';
          else this.message = 'Er is iets fout gegaan';

          return throwError(error);
        })
      )
      .subscribe();
  }

  ngOnDestory() {
    if (this.subscription) this.subscription.unsubscribe();
  }
}
