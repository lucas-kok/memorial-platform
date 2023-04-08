import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, map, Subscription, tap } from 'rxjs';
import { UserService } from '../../user/user.service';
import { Funeral } from '../funeral.model';
import { FuneralService } from '../funeral.service';

@Component({
  selector: 'app-funeral-details',
  templateUrl: './funeral-details.component.html',
  styleUrls: ['./funeral-details.component.css'],
})
export class FuneralDetailsComponent {
  componentId: string | null | undefined;
  userId: string | null = '';

  funeral: Funeral | undefined;
  funeralExists: boolean = true;
  isUserProperty: boolean = false;
  subscription: Subscription | undefined;

  constructor(
    private funeralService: FuneralService,
    private userService: UserService,
    private route: ActivatedRoute
  ) {
    this.userService.getUserId().subscribe((id) => {
      this.userId = id;
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.componentId = params.get('id');

      if (this.componentId == null) return;

      this.subscription = this.funeralService
        .getFuneralById(this.componentId)
        .pipe(
          map((res: any) => res),
          tap((res) => {
            this.funeral = res.result;

            if (this.funeral?.userId == this.userId) this.isUserProperty = true;
          }),
          catchError(async () => (this.funeralExists = false))
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
