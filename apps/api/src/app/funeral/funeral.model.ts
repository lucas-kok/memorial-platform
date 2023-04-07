import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

export type FuneralDocument = Funeral & Document;

@Schema()
export class Funeral {
  _id: string | undefined;

  @Prop({ type: Types.ObjectId, ref: 'user' })
  userId: string | undefined;

  @Prop({ type: Types.ObjectId, ref: 'person' })
  person: string | undefined;

  @Prop({ type: 'Date' })
  dateTime: Date | undefined;

  @Prop({ type: 'string' })
  adress: string | undefined;

  @Prop({ type: 'string' })
  postalCode: string | undefined;

  @Prop({ type: 'string' })
  city: string | undefined;

  @Prop({ type: 'string' })
  description: string | undefined;

  @Prop({ type: 'boolean' })
  isPrivate: boolean | undefined;
}

export const FuneralSchema = SchemaFactory.createForClass(Funeral);
