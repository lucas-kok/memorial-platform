import { IsMongoId, IsNotEmpty, IsString } from 'class-validator';

export class MemorialDto {
  @IsNotEmpty()
  @IsString()
  @IsMongoId()
  personId: string | undefined;

  @IsNotEmpty()
  @IsString()
  @IsMongoId()
  funeralId: string | undefined;

  @IsNotEmpty()
  @IsString()
  description: string | undefined;

  @IsNotEmpty()
  @IsString()
  imageBase64: string | undefined;
}
