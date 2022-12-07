import { IsBase64, IsMongoId, IsNotEmpty, IsString } from 'class-validator';

export class MemorialDto {
  @IsNotEmpty()
  @IsString()
  @IsMongoId()
  readonly personId: string | undefined;

  @IsNotEmpty()
  @IsString()
  @IsMongoId()
  readonly funeralId: string | undefined;

  @IsNotEmpty()
  @IsString()
  readonly description: string | undefined;

  @IsNotEmpty()
  @IsString()
  @IsBase64()
  readonly imageBase64: string | undefined;
}
