import { Injectable } from '@angular/core';
import { Gender } from '../shared/gender.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
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

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3333/api/users');
  }

  getUserById(id: string): User {
    return this.users.filter((user: User) => user.id == id)[0];
  }

  addUser(user: User) {
    this.users.push(user);
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
