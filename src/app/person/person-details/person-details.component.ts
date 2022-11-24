import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from '../person.model';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css'],
})
export class PersonDetailsComponent {
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

  dateToString(date: Date): string {
    return new Date(date).toLocaleDateString();
  }
}
