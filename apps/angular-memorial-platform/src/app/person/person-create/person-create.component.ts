import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private personService: PersonService, router: Router) {
    if (!this.loggedIn) router.navigate(['/users/login']);

    this.newPerson = new Person();
    this.genders = Object.keys(Gender);
  }

  onCreate() {
    if (this.newPerson == null) return;

    this.personService.addPerson(this.newPerson);
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
