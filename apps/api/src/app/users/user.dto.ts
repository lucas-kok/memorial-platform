import { Gender } from '../shared/gender.model';
import {
  IsNotEmpty,
  IsEmail,
  IsString,
  IsDateString,
  Equals,
} from 'class-validator';

export class UserDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string | undefined;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string | undefined;

  @IsNotEmpty()
  @IsString()
  readonly passwordHash: string | undefined;

  @IsNotEmpty()
  @IsString()
  readonly phoneNumber: string | undefined;

  @IsNotEmpty()
  @IsString()
  @IsDateString()
  readonly birthday: Date | undefined;

  @IsNotEmpty()
  @Equals('male' || 'female')
  gender: Gender | undefined;
}
