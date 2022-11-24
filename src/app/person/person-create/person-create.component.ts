import { Component } from '@angular/core';
import { Gender } from 'src/app/shared/gender.model';
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

  constructor(private personService: PersonService) {
    this.newPerson = new Person();
    this.genders = Object.values(Gender);
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
    this.newPerson!.image = btoa(binaryString);
  }
}
