import { IsDateString, IsIn, IsNotEmpty, IsString } from 'class-validator';
import { Gender } from '../shared/gender.model';

export class PersonDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string | undefined;

  @IsNotEmpty()
  @IsDateString()
  readonly birthday: Date | undefined;

  @IsNotEmpty()
  @IsDateString()
  readonly deathday: Date | undefined;

  @IsNotEmpty()
  @IsIn(['male', 'female'])
  readonly gender: Gender | undefined;

  @IsNotEmpty()
  @IsString()
  readonly imageBase64: string | undefined;
}
