import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, map, Subscription, tap } from 'rxjs';
import { UserService } from '../../user/user.service';
import { Funeral, FuneralDto } from '../funeral.model';
import { FuneralService } from '../funeral.service';

@Component({
  selector: 'app-funeral-create',
  templateUrl: './funeral-create.component.html',
  styleUrls: ['./funeral-create.component.css'],
})
export class FuneralCreateComponent {
  newFuneral: FuneralDto | undefined;
  subscription: Subscription | undefined;
  personId: string | undefined;
  funeralExists: boolean | undefined = false;

  message: string | undefined;

  constructor(
    private funeralService: FuneralService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.newFuneral = new FuneralDto();
    this.newFuneral.isPrivate = true;

    this.userService.getIsLoggedIn().subscribe((isLoggedIn) => {
      if (!isLoggedIn) router.navigate(['/users/login']);
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const personId = params.get('id');
      if (!personId) return;

      const funeral = this.funeralService.getFuneralByPersonId(personId);
      if (funeral) this.funeralExists = true;
    });
  }

  onCreate() {
    this.userService.getUserId().subscribe((id) => {
      // Getting userId from UserService
      if (this.newFuneral == null) return;

      this.newFuneral.userId = id;
      this.newFuneral.personId = this.personId;

      const jwtToken = localStorage.getItem('jwtToken');

      this.subscription = this.funeralService // Adding funeral to FuneralService
        .addFuneral(this.newFuneral, jwtToken!)
        .pipe(
          map((res: any) => res),
          tap((res) => {
            this.message = 'Uitvaart succesvol toegevoegd';

            this.router.navigate(['/funerals']);
          }),
          catchError(async () => {
            this.message = 'Er is iets fout gegaan';
          })
        )
        .subscribe();
    });
  }

  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
  }
}
