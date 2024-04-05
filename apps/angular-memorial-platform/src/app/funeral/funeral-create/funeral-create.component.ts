import { Component } from '@angular/core';
import { Subscription, catchError, map, tap } from 'rxjs';
import { FuneralService } from '../funeral.service';
import { Router } from '@angular/router';
import { Person } from '../../person/person.model';
import { Funeral } from '../funeral.model';
import { PersonService } from '../../person/person.service';
import { NotificationService } from '../../notification/notification.service';

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

  constructor(
    private funeralService: FuneralService,
    private personService: PersonService,
    private router: Router,
    private notificationService: NotificationService
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
    this.funeralService
      .addFuneral(this.newFuneral, jwtToken!)
      .pipe(
        catchError((error) => {
          this.notificationService.showError(
            error.error.message?.join('\n\n') || 'Er is een fout opgetreden'
          );
          return error;
        })
      )
      .subscribe((res) => {
        this.notificationService.showSuccess('Uitvaart succesvol aangemaakt');
        this.router.navigate(['/funerals']);
      });
  }
}
