import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Subscription, tap } from 'rxjs';
import { catchError } from 'rxjs/internal/operators/catchError';
import { Gender } from '../../shared/gender.model';
import { User } from '../user.model';
import { UserService } from '../user.service';

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
  subscription: Subscription | undefined;
  message: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {
    this.genders = Object.keys(Gender);
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
            this.user!.password = '';
            if (this.user != null) this.userExists = true;

            // Checking if the visitor is the owner (following any changes)
            this.userService.getUserId().subscribe((id) => {
              this.isUserProperty = this.componentId === id;
            });
          })
        )
        .subscribe();
    });
  }

  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
  }

  onEdit() {
    if (this.user == null) return;

    const jwtToken = localStorage.getItem('jwtToken');
    this.subscription = this.userService
      .updateUser(this.user, jwtToken!)
      .pipe(
        map((res: any) => res),
        tap(() => {
          console.log('User updated');

          this.router.navigate(['/users/' + this.componentId]);
        }),
        catchError(async () => {
          this.message = 'Er is iets fout gegaan';
        })
      )
      .subscribe();
  }

  onDelete() {
    // User must exist before removing
    if (this.user != null && this.componentId != null) {
      const jwtToken = localStorage.getItem('jwtToken');

      this.subscription = this.userService
        .removeUserById(this.componentId, jwtToken!)
        .pipe(
          map((res: any) => res),
          tap(() => {
            this.userService.logout();
            this.router.navigate(['/users']);
          }),
          catchError(async () => {
            this.message = 'Er is iets fout gegaan';
          })
        )
        .subscribe();
    }
  }
}
