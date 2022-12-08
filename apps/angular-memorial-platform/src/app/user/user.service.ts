import { Injectable, isDevMode } from '@angular/core';
import { Gender } from '../shared/gender.model';
import { User } from './user.model';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { prodEnvironment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUri: string | undefined;
  constructor(private http: HttpClient) {
    this.apiUri = isDevMode() ? environment.API_URL : prodEnvironment.API_URL;
  }

  users: User[] = [
    {
      id: '1',
      name: 'Lucas Kok',
      email: 'lucas.kok@hotmail.nl',
      password: 'Secret!123',
      phoneNumber: '0640052439',
      birthday: new Date('09-01-2005'),
      gender: Gender.male,
    },
  ];

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUri! + '/users', user);
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUri! + '/users');
  }

  getUserById(id: string): User {
    return this.users.filter((user: User) => user.id == id)[0];
  }

  updateUser(user: User) {
    if (user == null) return;

    this.removeUserById(user.id!);
    this.addUser(user);
  }

  removeUserById(id: string) {
    let user: User | null = this.getUserById(id);
    if (user == null) return;

    let index = this.users.indexOf(user, 0);

    this.users.splice(index, 1);
  }
}
