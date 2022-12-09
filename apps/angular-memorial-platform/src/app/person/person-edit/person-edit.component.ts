import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Gender } from '../../shared/gender.model';
import { Person } from '../person.model';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css'],
})
export class PersonEditComponent {
  componentId: string | null | undefined;
  personExists: boolean = false;
  person: Person | undefined;
  genders: string[] | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private personService: PersonService
  ) {
    this.genders = Object.values(Gender);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.componentId = params.get('id');

      if (this.componentId == null) return;

      this.person = this.personService.getPersonById(this.componentId);

      if (this.person != null) this.personExists = true;
    });
  }

  onEdit() {
    if (this.person == null) return;

    this.personService.updatePerson(this.person);
  }

  onDelete() {
    // Person must exist for removing
    if (this.person != null && this.componentId != null) {
      this.personService.removePersonById(this.componentId);
    }
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
    this.person!.imageBase64 = 'data:image/png;base64,' + btoa(binaryString);
  }
}
