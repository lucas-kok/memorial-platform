import { IsNotEmpty, IsString } from 'class-validator';

export class MemorialDto {
  @IsNotEmpty()
  @IsString()
  personId: string | undefined;

  @IsNotEmpty()
  @IsString()
  funeralId: string | undefined;

  @IsNotEmpty()
  @IsString()
  description: string | undefined;

  @IsNotEmpty()
  @IsString()
  imageBase64: string | undefined;
}
