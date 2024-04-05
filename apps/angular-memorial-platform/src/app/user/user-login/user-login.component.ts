import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { async, catchError, map, Subscription, tap, throwError } from 'rxjs';
import { UserLoginDto } from '../user.model';
import { UserService } from '../user.service';
import { NotificationService } from '../../notification/notification.service';
import { error } from 'console';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent {
  loginDto: UserLoginDto | undefined;

  constructor(
    private userService: UserService,
    private router: Router,
    private notificationService: NotificationService
  ) {
    this.loginDto = new UserLoginDto();
  }

  onLogin() {
    if (!this.loginDto) return;

    this.userService
      .login(this.loginDto)
      .pipe(
        catchError((error) => {
          this.notificationService.showError(
            error.error.message?.join('\n\n') || 'Invalide login poging'
          );
          return error;
        })
      )
      .subscribe(() => {
        this.notificationService.showSuccess('Succesvol ingelogd');
        this.router.navigate(['/users']);
      });
  }
}
