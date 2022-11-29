import { Component } from '@angular/core';
import { Person } from './person.model';
import { PersonService } from './person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent {
  persons: Person[] | undefined;

  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.persons = this.personService.getAllPersons();
  }

  dateToString(date: Date): string {
    return new Date(date).toLocaleDateString();
  }
}
