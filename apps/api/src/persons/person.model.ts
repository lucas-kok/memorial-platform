import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Gender } from '../app/shared/gender.model';

export type PersonDocument = Person & Document;

@Schema()
export class Person {
  _id: string | undefined;

  @Prop({ type: 'string' })
  name: string | undefined;

  @Prop({ type: 'Date' })
  birthday: Date | undefined;

  @Prop({ type: 'Date' })
  deathday: Date | undefined;

  @Prop({ type: 'string' })
  gender: Gender | undefined;

  @Prop({ type: 'string' })
  imageBase64: string | undefined;
}

export const PersonSchema = SchemaFactory.createForClass(Person);
