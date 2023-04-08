import { Component } from '@angular/core';
import { catchError, map, Subscription, tap } from 'rxjs';
import { UserService } from '../../user/user.service';
import { Funeral } from '../funeral.model';
import { FuneralService } from '../funeral.service';

@Component({
  selector: 'app-funeral-create',
  templateUrl: './funeral-create.component.html',
  styleUrls: ['./funeral-create.component.css'],
})
export class FuneralCreateComponent {
  newFuneral: Funeral | undefined;
  subscription: Subscription | undefined;

  message: string | undefined;

  constructor(
    private funeralService: FuneralService,
    private userService: UserService
  ) {
    this.newFuneral = new Funeral();
  }

  onCreate() {
    if (this.newFuneral == null) return;

    this.subscription = this.funeralService
      .addFuneral(this.newFuneral)
      .pipe(
        map((res: any) => res),
        tap((res) => {
          this.message = 'Uitvaart succesvol toegevoegd';
        }),
        catchError(async () => {
          this.message = 'Er is iets fout gegaan';
        })
      )
      .subscribe();
  }

  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
  }
}
