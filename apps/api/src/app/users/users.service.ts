import { Gender } from '../shared/gender.model';
import { User } from './user.model';

export class UsersService {
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
  getAllUsers(): User[] {
    return this.users;
  }

  getUserById(id: string): User | null {
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

  // Validation of user existing happens in Controller
  removeUserById(id: string) {
    let user: User = this.getUserById(id)!;
    let index = this.users.indexOf(user, 0);

    this.users.splice(index, 1);
  }
}
