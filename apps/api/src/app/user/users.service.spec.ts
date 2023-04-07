import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { Model, Types } from 'mongoose';
import { Gender } from '../shared/gender.model';
import { User, UserDocument } from './user.model';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;
  let userModel: Model<UserDocument>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getModelToken('user'),
          useValue: {
            create: jest.fn(),
            find: jest.fn(),
            findById: jest.fn(),
            findOne: jest.fn(),
            findOneAndUpdate: jest.fn(),
            findOneAndDelete: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    userModel = module.get<Model<UserDocument>>(getModelToken('user'));
  });

  describe('getAllUsers', () => {
    it('should return an array of users', async () => {
      const users: User[] = [
        {
          _id: '63cebf7e4c7901d85d826b11',
          name: 'John Doe',
          email: 'john.doe@example.com',
          password: 'password',
          phoneNumber: '0612345678',
          birthday: new Date(),
          gender: Gender.male,
        },
        {
          _id: '63cebfc24c7901d85d826b1b',
          name: 'Jane Doe',
          email: 'jane.doe@example.com',
          password: 'password',
          phoneNumber: '0612345678',
          birthday: new Date(),
          gender: Gender.female,
        },
      ];

      jest.spyOn(userModel, 'find').mockResolvedValue(users);

      expect(await service.getAllUsers()).toEqual(users);

      expect(userModel.find).toBeCalledWith();
    });
  });

  describe('getUserById', () => {
    it('should return a user with the given id', async () => {
      const user: User = {
        _id: '63cebf7e4c7901d85d826b11',
        name: 'John Doe',
        email: 'john.doe@example.com',
        password: 'password',
        phoneNumber: '0612345678',
        birthday: new Date(),
        gender: Gender.male,
      };

      jest.spyOn(userModel, 'findById').mockResolvedValue(user);

      expect(await service.getUserById(user._id!)).toEqual(user);

      expect(userModel.findById).toBeCalledWith({
        _id: new Types.ObjectId('63cebf7e4c7901d85d826b11'),
      });
    });

    it('should return null if user with the given id is not found', async () => {
      jest.spyOn(userModel, 'findById').mockResolvedValue(null);

      expect(await service.getUserById('63cebf7e4c7901d85d826b11')).toBeNull();

      expect(userModel.findById).toBeCalledWith({
        _id: new Types.ObjectId('63cebf7e4c7901d85d826b11'),
      });
    });
  });
});
