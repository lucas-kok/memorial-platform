import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Subscription, tap } from 'rxjs';
import { Funeral } from '../../funeral/funeral.model';
import { FuneralService } from '../../funeral/funeral.service';
import { UserService } from '../../user/user.service';
import { Person } from '../person.model';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css'],
})
export class PersonDetailsComponent {
  personId: string | null | undefined;
  userId: string | undefined = '';
  personExists: boolean = false;
  person: Person | undefined;

  funeral: Funeral | undefined;

  loggedIn = this.userService.getIsLoggedIn();
  isUserProperty: boolean = false;

  subscription: Subscription | undefined;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    private personService: PersonService,
    private userService: UserService,
    private funeralService: FuneralService
  ) {
    this.loggedIn.subscribe((isLoggedIn) => {
      if (!isLoggedIn) router.navigate(['/users/login']);
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.personId = params.get('id');
      if (this.personId == null) return;

      const jwtToken = localStorage.getItem('jwtToken');
      this.subscription = this.personService
        .getPersonById(this.personId, jwtToken!)
        .pipe(
          map((res: any) => res),
          tap((res) => {
            this.person = res.result;

            if (this.person) {
              this.personExists = true;

              this.funeralService
                .getFuneralByPersonId(this.personId!)
                .pipe(
                  map((response: any) => response),
                  tap((response) => {
                    this.funeral = response.resut; // Typo in the API
                  })
                )
                .subscribe();

              this.userService.getUserId().subscribe((id) => {
                this.isUserProperty = res.result.userId == id;
              });
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
