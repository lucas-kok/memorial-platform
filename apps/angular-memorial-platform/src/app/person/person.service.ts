import { HttpClient } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { prodEnvironment } from '../../environments/environment.prod';
import { Person } from './person.model';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  apiUri: string | undefined;

  constructor(private http: HttpClient) {
    this.apiUri = isDevMode() ? environment.API_URL : prodEnvironment.API_URL;
  }

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

  removePersonById(id: string, jwtToken: string): Observable<string> {
    return this.http.delete<string>(this.apiUri + '/persons/' + id, {
      headers: { Authorization: `Bearer ${jwtToken}` },
    });
  }
}
