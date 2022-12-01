import { Gender } from '../shared/gender.model';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  id: string | undefined;

  @Prop()
  name: string | undefined;

  @Prop()
  email: string | undefined;

  @Prop()
  passwordHash: string | undefined;

  @Prop()
  phoneNumber: string | undefined;

  @Prop()
  birthday: Date | undefined;

  @Prop()
  gender: Gender | undefined;
}

export const UserSchema = SchemaFactory.createForClass(User);
