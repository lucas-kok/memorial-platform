import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Subscription, tap } from 'rxjs';
import { Person } from '../funeral.model';
import { PersonService } from '../funeral.service';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css'],
})
export class PersonDetailsComponent {
  componentId: string | null | undefined;
  userId: string | null;
  personExists: boolean = false;
  person: Person | undefined;

  loggedIn: boolean = localStorage.getItem('jwtToken') != null;
  isUserProperty: boolean = false;

  subscription: Subscription | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private personService: PersonService
  ) {
    if (!this.loggedIn) router.navigate(['/users/login']);

    this.userId = localStorage.getItem('userId');
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.componentId = params.get('id');

      if (this.componentId == null) return;

      const jwtToken = localStorage.getItem('jwtToken');
      this.subscription = this.personService
        .getPersonById(this.componentId, jwtToken!)
        .pipe(
          map((res: any) => res),
          tap((res) => {
            console.log(res);
            this.person = res.result;

            if (this.person != null) {
              this.personExists = true;
              this.isUserProperty = res.result.userId == this.userId;
            }
          })
        )
        .subscribe();

      if (this.person != null) this.personExists = true;
    });
  }

  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
  }

  dateToString(date: Date): string {
    return new Date(date).toLocaleDateString();
  }
}
