import { Injectable, isDevMode } from '@angular/core';
import { Gender } from '../shared/gender.model';
import { User, UserLoginDto } from './user.model';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, tap } from 'rxjs';
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

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUri! + '/users', user);
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUri! + '/users');
  }

  getUserById(id: string): Observable<User> {
    return this.http.get<User>(this.apiUri + '/users/' + id);
  }

  updateUser(user: User, jwtToken: string): Observable<User> {
    return this.http.put<User>(this.apiUri! + '/users/' + user._id, user, {
      headers: { Authorization: `Bearer ${jwtToken}` },
    });
  }

  removeUserById(id: string, jwtToken: string): Observable<User> {
    return this.http.delete<User>(this.apiUri + '/users/' + id, {
      headers: { Authorization: `Bearer ${jwtToken}` },
    });
  }

  login(loginDto: UserLoginDto): Observable<string> {
    return this.http.post<string>(this.apiUri + '/auth/login', loginDto);
  }

  logout() {
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('userId');
  }
}
