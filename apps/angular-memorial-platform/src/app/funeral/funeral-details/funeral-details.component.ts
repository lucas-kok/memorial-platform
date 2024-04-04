import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FuneralService } from '../funeral.service';
import { Subscription, map, tap } from 'rxjs';
import { Funeral } from '../funeral.model';
import { MessageDTO } from '../../message/message.dto';

@Component({
  selector: 'app-funeral-details',
  templateUrl: './funeral-details.component.html',
  styleUrls: ['./funeral-details.component.css'],
})
export class FuneralDetailsComponent {
  componentId: string | null | undefined;
  userId: string | null;
  funeralExists: boolean = false;
  funeral: Funeral | undefined;

  loggedIn: boolean = localStorage.getItem('jwtToken') != null;
  isUserProperty: boolean = false;

  subscription: Subscription | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private funeralService: FuneralService
  ) {
    if (!this.loggedIn) router.navigate(['/users/login']);

    this.userId = localStorage.getItem('userId');
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.componentId = params.get('id');

      if (this.componentId == null) return;

      const jwtToken = localStorage.getItem('jwtToken');
      this.subscription = this.funeralService
        .getFuneralById(this.componentId, jwtToken!)
        .pipe(
          map((res: any) => res),
          tap((res) => {
            console.log(res);
            this.funeral = res.result;

            if (this.funeral != null) {
              this.funeralExists = true;
              this.isUserProperty = res.result.userId == this.userId;
            }
          })
        )
        .subscribe();

      if (this.funeral != null) this.funeralExists = true;
    });
  }

  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
  }

  dateToString(date: Date): string {
    return new Date(date).toLocaleDateString();
  }
}
