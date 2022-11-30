import { createHash, Hash, randomBytes, randomInt } from 'crypto';
import { Gender } from '../shared/gender.model';
import { UserDto } from './user.dto';
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

  addUser(userDto: UserDto): User {
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

  updateUser(id: string, userDto: UserDto) {
    const user: User = {
      id,
      ...userDto,
    };

    this.removeUserById(user.id!);
    return this.addUser(user);
  }

  // Validation of user existing happens in Controller
  removeUserById(id: string) {
    let user: User = this.getUserById(id)!;
    let index = this.users.indexOf(user, 0);

    this.users.splice(index, 1);
  }
}
