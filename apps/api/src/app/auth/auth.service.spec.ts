import { AuthService } from './auth.service';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { MongoClient } from 'mongodb';
import { Test } from '@nestjs/testing';
import { MongooseModule } from '@nestjs/mongoose';
import { sign } from 'jsonwebtoken';
import { User, UserSchema } from '../user/user.model';
import { disconnect } from 'process';
import { Logger } from '@nestjs/common';

describe('AuthService', () => {
  let service: AuthService;
  let mongod: MongoMemoryServer;
  let mongoc: MongoClient;

  beforeAll(async () => {
    let uri: string = '';

    const app = await Test.createTestingModule({
      imports: [
        MongooseModule.forRootAsync({
          useFactory: async () => {
            mongod = await MongoMemoryServer.create();
            uri = mongod.getUri();
            return { uri };
          },
        }),
        MongooseModule.forFeature([{ name: 'user', schema: UserSchema }]),
      ],
      providers: [AuthService],
    }).compile();

    service = app.get<AuthService>(AuthService);

    mongoc = new MongoClient(uri);
    await mongoc.connect();
  });

  beforeEach(async () => {
    await mongoc.db('test').collection('user').deleteMany({});
  });

  afterAll(async () => {
    await mongoc.close();
    await disconnect();
    await mongod.stop();
  });

  describe('login', () => {
    const user: User = {
      email: 'lucas.kok@hotmail.nl',
      password: 'secret',
      _id: '6390c98572a64ed377b9f469',
      name: undefined,
      phoneNumber: undefined,
      birthday: undefined,
      gender: undefined,
    };

    const expectedToken = sign(
      { _id: user._id, email: user.email },
      'keyboard cat'
    );
    const resultToken = service.login(user);

    expect(resultToken).toEqual(expectedToken);
  });
});
