import { IsBoolean, IsDateString, IsNotEmpty, IsString } from 'class-validator';

export class FuneralDto {
  @IsNotEmpty()
  @IsDateString()
  readonly dateTime: Date | undefined;

  @IsNotEmpty()
  @IsString()
  readonly adress: string | undefined;

  @IsNotEmpty()
  @IsString()
  readonly postalCode: string | undefined;

  @IsNotEmpty()
  @IsString()
  readonly city: string | undefined;

  @IsNotEmpty()
  @IsString()
  readonly description: string | undefined;

  @IsNotEmpty()
  @IsBoolean()
  readonly isPrivate: boolean | undefined;
}
