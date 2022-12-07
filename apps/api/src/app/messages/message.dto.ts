import {
  IsBase64,
  IsBoolean,
  IsDateString,
  IsMongoId,
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class MessageDto {
  @IsNotEmpty()
  @IsString()
  @IsMongoId()
  readonly memorialId: string | undefined;

  @IsNotEmpty()
  @IsDateString()
  readonly dateTime: Date | undefined;

  @IsString()
  readonly qoute: string | undefined;

  @IsNotEmpty()
  @IsString()
  readonly message: string | undefined;

  @IsString()
  @IsBase64()
  readonly imageBase64: string | undefined;

  @IsNotEmpty()
  @IsBoolean()
  readonly showName: boolean | undefined;
}
