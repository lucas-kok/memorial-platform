import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type MessageDocument = Message & Document;

@Schema()
export class Message {
  _id: string | undefined;

  @Prop({ type: 'string' })
  userId: string | undefined;

  @Prop({ type: 'string' })
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
