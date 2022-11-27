import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  getAllUsers(): User[] | null {
    return null;
  }

  getUserById(id: string): User | null {
    return null;
  }

  addUser(user: User) {}

  updateUser(user: User) {}

  deleteUser(user: User) {}
}
