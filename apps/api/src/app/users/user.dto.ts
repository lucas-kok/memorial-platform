import { Gender } from '../shared/gender.model';

export class CreateUserDto {
  name: string | undefined;
  email: string | undefined;
  password: string | undefined;
  phoneNumber: string | undefined;
  birthday: Date | undefined;
  gender: Gender | undefined;
}
