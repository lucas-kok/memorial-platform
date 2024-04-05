import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FuneralService } from '../funeral.service';
import { Subscription, catchError, map, tap } from 'rxjs';
import { Funeral } from '../funeral.model';
import { MessageDTO } from '../../message/message.dto';
import { NotificationService } from '../../notification/notification.service';
import { withJsonpSupport } from '@angular/common/http';

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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private funeralService: FuneralService,
    private notificationService: NotificationService
  ) {
    if (!this.loggedIn) router.navigate(['/users/login']);

    this.userId = localStorage.getItem('userId');
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.componentId = params.get('id');

      if (this.componentId == null) return;

      const jwtToken = localStorage.getItem('jwtToken');
      this.funeralService
        .getFuneralById(this.componentId, jwtToken!)
        .pipe(
          catchError((error) => {
            this.notificationService.showError(
              error.error.message?.join('\n\n') || 'Er is een fout opgetreden'
            );
            return error;
          })
        )
        .subscribe((res: any) => {
          this.funeral = res.result;
          this.funeralExists = this.funeral != null;
          this.isUserProperty =
            this.funeral?.userId === localStorage.getItem('userId');
        });
    });
  }

  dateToString(date: Date): string {
    return new Date(date).toLocaleDateString();
  }
}
