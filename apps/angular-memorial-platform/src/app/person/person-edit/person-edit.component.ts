import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, map, Subscription, tap } from 'rxjs';
import { Gender } from '../../shared/gender.model';
import { UserService } from '../../user/user.service';
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
  isUserProperty: boolean = false;
  person: Person | undefined;
  genders: string[] | undefined;

  subscription: Subscription | undefined;
  message: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private personService: PersonService,
    private userService: UserService
  ) {
    this.genders = Object.keys(Gender);
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
            this.person = res.result;
            if (this.person) this.personExists = true;

            this.userService.getUserId().subscribe((id) => {
              this.isUserProperty = res.result.userId == id;
            });
          })
        )
        .subscribe();
    });
  }

  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
  }

  onEdit() {
    if (this.person == null) return;

    const jwtToken = localStorage.getItem('jwtToken');
    this.subscription = this.personService
      .updatePerson(this.person, jwtToken!)
      .pipe(
        map((res: any) => res),
        tap((res) => {
          this.router.navigate(['/persons/' + this.componentId]);
        }),
        catchError(async () => {
          this.message = 'Er is iets fout gegaan';
        })
      )
      .subscribe();
  }

  onDelete() {
    // Person must exist for removing
    if (this.person != null && this.componentId != null) {
      const jwtToken = localStorage.getItem('jwtToken');

      this.subscription = this.personService
        .removePersonById(this.componentId, jwtToken!)
        .pipe(
          map((res: any) => res),
          tap(() => {
            this.message = 'Persoon succesvol verwijderd';
            this.router.navigate(['/persons']);
          }),
          catchError(async () => (this.message = 'Er is iets fout gegaan'))
        )
        .subscribe();
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
    this.person!.imageBase64 = btoa(binaryString);
  }
}
