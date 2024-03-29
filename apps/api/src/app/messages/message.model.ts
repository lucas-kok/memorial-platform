import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

export type MessageDocument = Message & Document;

@Schema()
export class Message {
  @Prop({ type: 'number' })
  _id: number | undefined;

  @Prop({ type: Types.ObjectId, ref: 'user' })
  userId: string | undefined;

  @Prop({ type: Types.ObjectId, ref: 'memorial' })
  memorialId: string | undefined;

  @Prop({ type: 'Date' })
  dateTime: Date | undefined;

  @Prop({ type: 'string' })
  qoute: string | undefined;

  @Prop({ type: 'string' })
  message: string | undefined;

  @Prop({ type: 'string' })
  imageBase64: string | undefined;

  @Prop({ type: 'boolean' })
  showName: boolean | undefined;
}

export const MessageSchema = SchemaFactory.createForClass(Message);
