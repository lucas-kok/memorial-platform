import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Subscription, tap } from 'rxjs';
import { UserService } from '../../user/user.service';
import { Person } from '../person.model';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css'],
})
export class PersonDetailsComponent {
  componentId: string | null | undefined;
  userId: string | undefined = '';
  personExists: boolean = false;
  person: Person | undefined;

  loggedIn = this.userService.getIsLoggedIn();
  isUserProperty: boolean = false;

  subscription: Subscription | undefined;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    private personService: PersonService,
    private userService: UserService
  ) {
    this.loggedIn.subscribe((isLoggedIn) => {
      if (!isLoggedIn) router.navigate(['/users/login']);
    });

    this.userService.getUserId().subscribe((id) => {
      this.userId = id;
      this.isUserProperty = id == this.userId;
    });
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
