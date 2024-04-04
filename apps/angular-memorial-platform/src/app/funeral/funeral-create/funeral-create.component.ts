import { Component } from '@angular/core';
import { Subscription, catchError, map, tap } from 'rxjs';
import { FuneralService } from '../funeral.service';
import { Router } from '@angular/router';
import { Person } from '../../person/person.model';
import { Funeral } from '../funeral.model';
import { PersonService } from '../../person/person.service';

@Component({
  selector: 'app-funeral-create',
  templateUrl: './funeral-create.component.html',
  styleUrls: ['./funeral-create.component.css'],
})
export class FuneralCreateComponent {
  newFuneral: Funeral | undefined;
  isPrivate: string | undefined;
  persons: Person[] | undefined;
  loggedIn: boolean = localStorage.getItem('jwtToken') != null;

  subscription: Subscription | undefined;
  message: string | undefined;

  constructor(
    private funeralService: FuneralService,
    private personService: PersonService,
    private router: Router
  ) {
    if (!this.loggedIn) router.navigate(['/users/login']);

    this.newFuneral = new Funeral();
    this.newFuneral.person = new Person();
    this.newFuneral.isPrivate = true;
  }

  ngOnInit() {
    const jwtToken = localStorage.getItem('jwtToken');
    this.personService
      .getAllPersonsFromUser(jwtToken!)
      .subscribe((persons: any) => {
        this.persons = persons.result;
      });
  }

  onCreate() {
    if (this.newFuneral == null) return;

    this.newFuneral.person = this.persons?.find(
      (p) => p._id == this.newFuneral?.person
    );
    this.newFuneral.isPrivate = this.isPrivate == 'true';

    const jwtToken = localStorage.getItem('jwtToken');
    this.subscription = this.funeralService
      .addFuneral(this.newFuneral, jwtToken!)
      .pipe(
        map((res: any) => res),
        tap((res) => {
          console.log('[PersonCreateComponent] Person created');

          this.message = 'Person created succesfully';
          this.router.navigate(['/funerals']);
        }),
        catchError(async () => (this.message = 'Er is iets fout gegaan'))
      )
      .subscribe();
  }

  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
  }
}
