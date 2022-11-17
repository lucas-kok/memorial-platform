import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private personService: PersonService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.componentId = params.get('id');

      if (this.componentId == null) return;

      this.person = this.personService.getPersonById(this.componentId);

      if (this.person != null) this.personExists = true;
    });
  }

  onDelete() {
    // Person must exist for removing
    if (this.person != null && this.componentId != null) {
      console.log('Removing user with id: ' + this.componentId);

      this.personService.removePersonById(this.componentId);
    }
  }
}
