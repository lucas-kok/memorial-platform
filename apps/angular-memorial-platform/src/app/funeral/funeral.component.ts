import { Component } from '@angular/core';
import { map, Subscription, tap } from 'rxjs';
import { Funeral } from './funeral.model';
import { FuneralService } from './funeral.service';

@Component({
  selector: 'app-funeral',
  templateUrl: './funeral.component.html',
  styleUrls: ['./funeral.component.css'],
})
export class FuneralComponent {
  funerals: Funeral[] | undefined;
  subscription: Subscription | undefined;

  constructor(private funeralService: FuneralService) {}

  ngOnInit() {
    this.subscription = this.funeralService
      .getAllFunerals()
      .pipe(
        map((res: any) => res),
        tap((res) => {
          this.funerals = res.result;
        })
      )
      .subscribe();
  }

  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
  }

  dateToString(date: Date): string {
    return new Date(date).toLocaleDateString();
  }
}
