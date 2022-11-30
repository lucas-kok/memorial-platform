import { Gender } from '../shared/gender.model';
import { IsNotEmpty, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  readonly name: string | undefined;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string | undefined;

  @IsNotEmpty()
  readonly password: string | undefined;

  @IsNotEmpty()
  readonly phoneNumber: string | undefined;

  @IsNotEmpty()
  readonly birthday: Date | undefined;

  @IsNotEmpty()
  readonly gender: Gender | undefined;
}
