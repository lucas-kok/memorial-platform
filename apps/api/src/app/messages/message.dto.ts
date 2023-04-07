import {
  IsBase64,
  IsBoolean,
  IsDateString,
  IsMongoId,
  IsNotEmpty,
  IsNumber,
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

export class MessageRequestDto {
  @IsNotEmpty()
  @IsNumber()
  readonly _id: number | undefined;

  @IsNotEmpty()
  @IsString()
  @IsMongoId()
  readonly memorialId: string | undefined;
}
