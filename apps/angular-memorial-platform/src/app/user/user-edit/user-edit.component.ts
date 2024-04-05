import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Subscription, tap } from 'rxjs';
import { catchError } from 'rxjs/internal/operators/catchError';
import { Gender } from '../../shared/gender.model';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { NotificationService } from '../../notification/notification.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
})
export class UserEditComponent {
  componentId: string | null | undefined;
  userExists: boolean = false;
  isUserProperty: boolean = false;
  user: User | undefined;
  genders: string[] | undefined;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router,
    private notificationService: NotificationService
  ) {
    this.genders = Object.keys(Gender);
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.componentId = params.get('id');

      if (this.componentId == null) return;

      this.userService
        .getUserById(this.componentId)
        .pipe(
          catchError((error) => {
            this.notificationService.showError(
              error.error.message?.join('\n\n') || 'Er is een fout opgetreden'
            );
            return error;
          })
        )
        .subscribe((res: any) => {
          this.user = res.result;
          this.user!.password = '';
          if (this.user != null) this.userExists = true;

          this.userService.getUserId().subscribe((id) => {
            this.isUserProperty = this.componentId === id;
          });
        });
    });
  }

  onEdit() {
    if (this.user == null) return;

    const jwtToken = localStorage.getItem('jwtToken');
    this.userService
      .updateUser(this.user, jwtToken!)
      .pipe(
        catchError((error) => {
          this.notificationService.showError(
            error.error.message?.join('\n\n') || 'Er is een fout opgetreden'
          );
          return error;
        })
      )
      .subscribe(() => {
        this.notificationService.showSuccess('Gebruiker successvol aangepast');
        this.router.navigate(['/users/' + this.componentId]);
      });
  }

  onDelete() {
    // User must exist before removing
    if (this.user != null && this.componentId != null) {
      const jwtToken = localStorage.getItem('jwtToken');

      this.userService
        .removeUserById(this.componentId, jwtToken!)
        .pipe(
          catchError((error) => {
            this.notificationService.showError(
              error.error.message?.join('\n\n') || 'Er is een fout opgetreden'
            );
            return error;
          })
        )
        .subscribe(() => {
          this.notificationService.showSuccess(
            'Gebruiker successvol verwijderd'
          );
          this.router.navigate(['/users']);
        });
    }
  }
}
