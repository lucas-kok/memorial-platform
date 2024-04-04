import { Component } from '@angular/core';
import { Funeral } from '../funeral.model';
import { Person } from '../../person/person.model';
import { Subscription, catchError, map, tap } from 'rxjs';
import { FuneralService } from '../funeral.service';
import { PersonService } from '../../person/person.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-funeral-edit',
  templateUrl: './funeral-edit.component.html',
  styleUrls: ['./funeral-edit.component.css'],
})
export class FuneralEditComponent {
  componentId: string | null | undefined;
  funeralExists: boolean = false;
  isUserProperty: boolean = false;

  funeral: Funeral | undefined;
  isPrivate: string | undefined;
  personId: string | undefined;
  persons: Person[] | undefined;
  loggedIn: boolean = localStorage.getItem('jwtToken') != null;

  subscription: Subscription | undefined;
  message: string | undefined;

  constructor(
    private funeralService: FuneralService,
    private personService: PersonService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    if (!this.loggedIn) router.navigate(['/users/login']);

    this.funeral = new Funeral();
    this.funeral.person = new Person();
    this.funeral.isPrivate = true;
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.componentId = params.get('id');

      if (this.componentId == null) return;
      const jwtToken = localStorage.getItem('jwtToken');
      this.personService
        .getAllPersonsFromUser(jwtToken!)
        .subscribe((persons: any) => {
          this.persons = persons.result;
        });

      this.funeralService
        .getFuneralById(this.componentId, jwtToken!)
        .subscribe((funeral: any) => {
          this.funeral = funeral.result;
          this.isPrivate = this.funeral?.isPrivate ? 'true' : 'false';
          this.personId = this.funeral?.person?._id;
        });
    });
  }

  onEdit() {
    if (this.funeral == null) return;

    this.funeral.person = this.persons?.find((p) => p._id == this.personId);
    this.funeral.isPrivate = this.isPrivate == 'true';

    const jwtToken = localStorage.getItem('jwtToken');
    this.subscription = this.funeralService
      .updateFuneral(this.funeral, jwtToken!)
      .pipe(
        map((res: any) => res),
        tap((res) => {
          this.router.navigate(['/funerals/' + this.componentId]);
        }),
        catchError(async () => (this.message = 'Er is iets fout gegaan'))
      )
      .subscribe();
  }

  onDelete() {
    if (this.funeral == null) return;

    const jwtToken = localStorage.getItem('jwtToken');
    this.subscription = this.funeralService
      .deleteFuneral(this.funeral._id!, jwtToken!)
      .pipe(
        map((res: any) => res),
        tap((res) => {
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
