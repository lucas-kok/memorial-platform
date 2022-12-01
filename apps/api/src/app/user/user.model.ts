import { Gender } from '../shared/gender.model';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ type: 'string' })
  id: string | undefined;

  @Prop({ type: 'string' })
  name: string | undefined;

  @Prop({ type: 'string' })
  email: string | undefined;

  @Prop({ type: 'string' })
  passwordHash: string | undefined;

  @Prop({ type: 'string' })
  phoneNumber: string | undefined;

  @Prop({ type: 'Date' })
  birthday: Date | undefined;

  @Prop({ type: 'string' })
  gender: Gender | undefined;
}

export const UserSchema = SchemaFactory.createForClass(User);
