import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, map, Subscription, tap } from 'rxjs';
import { User } from '../user.model';
import { UserService } from '../user.service';

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
  subscription: Subscription | undefined;

  constructor(private route: ActivatedRoute, private userService: UserService) {
    this.userService.getUserId().subscribe((id) => {
      this.userId = id;
      this.isUserProperty = this.user!._id === id;
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.componentId = params.get('id');

      if (this.componentId == null) return;

      this.subscription = this.userService
        .getUserById(this.componentId)
        .pipe(
          map((res: any) => res),
          tap((res) => {
            this.user = res.result;

            if (this.user!._id == this.userId) this.isUserProperty = true;
          }),
          catchError(async () => (this.userExists = false))
        )
        .subscribe();
    });
  }

  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
  }

  dateToString(date: Date): string {
    return new Date(date).toLocaleDateString();
  }
}
