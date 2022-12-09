import { HttpClient } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { prodEnvironment } from '../../environments/environment.prod';
import { Gender } from '../shared/gender.model';
import { Person } from './person.model';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  apiUri: string | undefined;

  constructor(private http: HttpClient) {
    this.apiUri = isDevMode() ? environment.API_URL : prodEnvironment.API_URL;
  }

  persons: Person[] = [
    {
      _id: '1',
      name: 'Lucas Kok',
      birthday: new Date('09-01-2005'),
      deathday: new Date(),
      gender: Gender.male,
      imageBase64:
        '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',
    },
  ];

  addPerson(person: Person, jwtToken: string): Observable<Person> {
    console.log('Adding person: {' + person + '}');

    return this.http.post<Person>(this.apiUri + '/persons', person, {
      headers: { Authorization: `Bearer ${jwtToken}` },
    });
  }

  getAllPersonsFromUser(jwtToken: string): Observable<Person[]> {
    console.log('Retrieving all persons');

    return this.http.get<Person[]>(this.apiUri + '/persons', {
      headers: { Authorization: `Bearer ${jwtToken}` },
    });
  }

  getPersonById(id: string, jwtToken: string): Observable<Person> {
    console.log('Retrieving person with id: {' + id + '}');

    return this.http.get<Person>(this.apiUri + '/persons/' + id, {
      headers: { Authorization: `Bearer ${jwtToken}` },
    });
  }

  updatePerson(person: Person, jwtToken: string): Observable<Person> {
    console.log('Updating person: {' + person + '}');

    return this.http.put<Person>(
      this.apiUri + '/persons/' + person._id,
      person,
      {
        headers: { Authorization: `Bearer ${jwtToken}` },
      }
    );
  }

  removePersonById(id: string): void {
    // console.log('Removing person with id: {' + id + '}');
    // let person: Person = this.getPersonById(id);
    // if (person == null) return;
    // let index = this.persons.indexOf(person, 0);
    // this.persons.splice(index, 1);
  }
}
