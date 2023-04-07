import { Gender } from '../shared/gender.model';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  _id: string | undefined;

  @Prop({ type: 'string' })
  name: string | undefined;

  @Prop({ type: 'string', unique: true })
  email: string | undefined;

  @Prop({ type: 'string' })
  password: string | undefined;

  @Prop({ type: 'string' })
  phoneNumber: string | undefined;

  @Prop({ type: 'Date' })
  birthday: Date | undefined;

  @Prop({ type: 'string' })
  gender: Gender | undefined;
}

export const UserSchema = SchemaFactory.createForClass(User);
