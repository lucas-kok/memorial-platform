import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, map, Subscription, tap } from 'rxjs';
import { Gender } from '../../shared/gender.model';
import { Person } from '../person.model';
import { PersonService } from '../person.service';
import { NotificationService } from '../../notification/notification.service';

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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private personService: PersonService,
    private notificationService: NotificationService
  ) {
    this.genders = Object.keys(Gender);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.componentId = params.get('id');

      if (this.componentId == null) return;

      const jwtToken = localStorage.getItem('jwtToken');
      this.personService
        .getPersonById(this.componentId, jwtToken!)
        .pipe(
          catchError((error) => {
            this.notificationService.showError(
              error.error.message.join('\n\n') || 'Er is een fout opgetreden'
            );
            return error;
          })
        )
        .subscribe((res: any) => {
          this.person = res.result;
          this.personExists = this.person != null;
          this.isUserProperty =
            this.person?.userId === localStorage.getItem('userId');
        });
    });
  }

  onEdit() {
    if (this.person == null) return;

    const jwtToken = localStorage.getItem('jwtToken');
    this.personService
      .updatePerson(this.person, jwtToken!)
      .pipe(
        catchError((error) => {
          this.notificationService.showError(
            error.error.message.join('\n\n') || 'Er is een fout opgetreden'
          );
          return error;
        })
      )
      .subscribe((res) => {
        this.notificationService.showSuccess('Persoon succesvol gewijzigd');
        this.router.navigate(['/persons/' + this.person!['_id']]);
      });
  }

  onDelete() {
    // Person must exist for removing
    if (this.person != null && this.componentId != null) {
      const jwtToken = localStorage.getItem('jwtToken');

      this.personService
        .removePersonById(this.componentId, jwtToken!)
        .pipe(
          catchError((error) => {
            this.notificationService.showError(
              error.error.message.join('\n\n') || 'Er is een fout opgetreden'
            );
            return error;
          })
        )
        .subscribe((res) => {
          this.notificationService.showSuccess('Persoon succesvol verwijderd');
          this.router.navigate(['/persons']);
        });
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
