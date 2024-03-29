import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { map, Subscription, tap } from 'rxjs';
import { Person } from './person.model';
import { PersonService } from './person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent {
  persons: Person[] | undefined;
  subscription: Subscription | undefined;
  loggedIn: boolean | undefined = localStorage.getItem('jwtToken') != null;

  constructor(private personService: PersonService, router: Router) {
    if (this.loggedIn == false) router.navigate(['/users/login']);
  }

  ngOnInit(): void {
    const jwtToken = localStorage.getItem('jwtToken');

    this.subscription = this.personService
      .getAllPersonsFromUser(jwtToken!)
      .pipe(
        map((res: any) => res),
        tap((res) => {
          this.persons = res.result;
        })
      )
      .subscribe();
  }

  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
  }

  dateToString(date: Date): string {
    return new Date(date).toLocaleDateString();
  }
}
