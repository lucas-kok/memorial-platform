import { Gender } from '../shared/gender.model';

export class User {
  _id: string | undefined;
  name: string | undefined;
  email: string | undefined;
  password: string | undefined;
  phoneNumber: string | undefined;
  birthday: Date | undefined;
  gender: Gender | undefined;
}

export class UserLoginDto {
  email: string | undefined;
  password: string | undefined;
}
