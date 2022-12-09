import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Subscription, tap } from 'rxjs';
import { Gender } from '../../shared/gender.model';
import { Person } from '../person.model';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-create',
  templateUrl: './person-create.component.html',
  styleUrls: ['./person-create.component.css'],
})
export class PersonCreateComponent {
  newPerson: Person | undefined;
  name: string | undefined;
  genders: string[] | undefined;
  loggedIn: boolean | undefined = localStorage.getItem('jwtToken') != null;

  subscription: Subscription | undefined;
  message: string | undefined;

  constructor(private personService: PersonService, private router: Router) {
    if (!this.loggedIn) router.navigate(['/users/login']);

    this.newPerson = new Person();
    this.genders = Object.keys(Gender);
  }

  onCreate() {
    if (this.newPerson == null) return;

    const jwtToken = localStorage.getItem('jwtToken');
    this.subscription = this.personService
      .addPerson(this.newPerson, jwtToken!)
      .pipe(
        map((res: any) => res),
        tap((res) => {
          console.log('[PersonCreateComponent] Person created');

          this.message = 'Person created succesfully';
          this.router.navigate(['/persons']);
        }),
        catchError(async () => (this.message = 'Er is iets fout gegaan'))
      )
      .subscribe();
  }

  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
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
