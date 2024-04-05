import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Subscription, tap } from 'rxjs';
import { Gender } from '../../shared/gender.model';
import { Person } from '../person.model';
import { PersonService } from '../person.service';
import { NotificationService } from '../../notification/notification.service';

@Component({
  selector: 'app-person-create',
  templateUrl: './person-create.component.html',
  styleUrls: ['./person-create.component.css'],
})
export class PersonCreateComponent {
  newPerson: Person | undefined;
  name: string | undefined;
  genders: string[] | undefined;
  loggedIn: boolean = localStorage.getItem('jwtToken') != null;

  constructor(
    private personService: PersonService,
    private router: Router,
    private notificationService: NotificationService
  ) {
    if (!this.loggedIn) router.navigate(['/users/login']);

    this.newPerson = new Person();
    this.genders = Object.keys(Gender);
  }

  onCreate() {
    if (this.newPerson == null) return;

    const jwtToken = localStorage.getItem('jwtToken');
    this.personService
      .addPerson(this.newPerson, jwtToken!)
      .pipe(
        catchError((error) => {
          this.notificationService.showError(
            error.error.message.join('\n\n') || 'Er is een fout opgetreden'
          );
          return error;
        })
      )
      .subscribe((res) => {
        this.notificationService.showSuccess('Persoon succesvol aangemaakt');
        this.router.navigate(['/persons']);
      });
  }

  handleFileSelect(evt: any) {
    var file = evt.files[0];

    if (file) {
      var reader = new FileReader();

      reader.onload = this._handleReaderLoaded.bind(this);

      reader.readAsBinaryString(file);
    }
  }

  _handleReaderLoaded(readerEvt: any) {
    var binaryString = readerEvt.target.result;
    this.newPerson!.imageBase64 = btoa(binaryString);
  }
}
