import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, map, Subscription, tap } from 'rxjs';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { NotificationService } from '../../notification/notification.service';
import { error } from 'console';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent {
  componentId: string | null | undefined;
  userId: string | null = '';
  userExists: boolean = true;
  isUserProperty: boolean = false;
  user: User | undefined;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private notificationService: NotificationService
  ) {
    this.userService.getUserId().subscribe((id) => {
      this.userId = id;
      this.isUserProperty = this.user!._id === id;
    });
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
          if (this.user!._id == this.userId) this.isUserProperty = true;
        });
    });
  }

  dateToString(date: Date): string {
    return new Date(date).toLocaleDateString();
  }
}
