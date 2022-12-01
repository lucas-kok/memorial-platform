import { Gender } from '../shared/gender.model';

export class User {
  id: string | undefined;
  name: string | undefined;
  email: string | undefined;
  passwordHash: string | undefined;
  phoneNumber: string | undefined;
  birthday: Date | undefined;
  gender: Gender | undefined;
}
