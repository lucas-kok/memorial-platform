import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Subscription, tap } from 'rxjs';
import { Gender } from '../../shared/gender.model';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { NotificationService } from '../../notification/notification.service';

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

  constructor(
    private userService: UserService,
    private router: Router,
    private notificationService: NotificationService
  ) {
    this.newUser = new User();
    this.genders = Object.keys(Gender);
  }

  onCreate() {
    if (this.newUser == null) return;

    this.userService
      .addUser(this.newUser)
      .pipe(
        catchError((error) => {
          this.notificationService.showError(
            error.error.message?.join('\n\n') || 'Er is een fout opgetreden'
          );
          return error;
        })
      )
      .subscribe(() => {
        this.notificationService.showSuccess('Gebruiker succesvol aangemaakt');
        this.router.navigate(['/users']);
      });
  }

  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
  }
}
