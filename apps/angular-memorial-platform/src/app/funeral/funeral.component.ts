import { Component } from '@angular/core';
import { Funeral } from './funeral.model';
import { FuneralService } from './funeral.service';
import { map, tap } from 'rxjs';

@Component({
  selector: 'app-funeral',
  templateUrl: './funeral.component.html',
  styleUrls: ['./funeral.component.css'],
})
export class FuneralComponent {
  funerals: Funeral[] | undefined;
  userId: string | null = null;

  constructor(private funeralService: FuneralService) {}

  ngOnInit(): void {
    const jwtToken = localStorage.getItem('jwtToken');
    this.userId = localStorage.getItem('userId');

    this.funeralService
      .getFunerals(jwtToken!)
      .pipe(
        map((res: any) => res),
        tap((res) => {
          this.funerals = res.result;
        })
      )
      .subscribe();
  }

  dateToString(date: Date): string {
    return new Date(date).toLocaleDateString();
  }
}
