import { createHash, Hash, randomBytes, randomInt } from 'crypto';
import { Gender } from '../shared/gender.model';
import { CreateUserDto } from './user.dto';
import { User } from './user.model';

export class UsersService {
  idCounter = 1;
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

  addUser(userDto: CreateUserDto): User {
    this.idCounter++;
    const user: User = {
      id: this.idCounter.toString(),
      ...userDto,
    };
    this.users.push(user);

    return user;
  }

  getAllUsers(): User[] {
    return this.users;
  }

  getUserById(id: string): User | null {
    return this.users.filter((user: User) => user.id == id)[0];
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
