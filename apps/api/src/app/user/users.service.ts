import { Gender } from '../shared/gender.model';
import { UserDto } from './user.dto';
import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { User, UserDocument } from './user.model';

@Injectable()
export class UsersService {
  idCounter = 1;
  users: User[] = [
    {
      _id: '1',
      name: 'Lucas Kok',
      email: 'lucas.kok@hotmail.nl',
      password: 'Secret!123',
      phoneNumber: '0640052439',
      birthday: new Date('09-01-2005'),
      gender: Gender.male,
    },
  ];

  constructor(
    @InjectModel('user') private readonly userModel: Model<UserDocument>
  ) {}

  addUser(userDto: UserDto): Promise<User> {
    Logger.log('[UsersService] addUser called');
    Logger.log(userDto);

    return this.userModel.create(userDto);
  }

  async getAllUsers(): Promise<User[]> {
    Logger.log('[UsersSerivce] getAllUsers called');

    return await this.userModel.find();
  }

  async getUserById(id: string): Promise<User | null> {
    Logger.log('[UsersServices] getUserById(' + id + ') called');

    return await this.userModel.findById({ _id: new Types.ObjectId(id) });
  }

  async getUserByEmail(email: string): Promise<User | null> {
    Logger.log('[UsersServices] getUserByEmail(' + email + ') called');

    return await this.userModel.findOne({ email: email });
  }

  updateUser(_id: string, userDto: UserDto) {
    const user: User = {
      _id,
      ...userDto,
    };

    this.removeUserById(user._id!);
    return this.addUser(user);
  }

  // Validation of user existing happens in Controller
  removeUserById(id: string) {
    // let user: User = this.getUserById(id)!;
    // let index = this.users.indexOf(user, 0);
    // this.users.splice(index, 1);
  }
}
