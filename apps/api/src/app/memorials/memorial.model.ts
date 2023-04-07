import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { Message } from '../messages/message.model';

export type MemorialDocument = Memorial & Document;

@Schema()
export class Memorial {
  _id: string | undefined;

  @Prop({ type: Types.ObjectId, ref: 'user' })
  userId: string | undefined;

  @Prop({ type: Types.ObjectId, ref: 'funeral' })
  funeralId: string | undefined;

  @Prop({ type: 'string' })
  description: string | undefined;

  @Prop({ type: 'string' })
  imageBase64: string | undefined;

  @Prop({ default: [], type: [] })
  messages: Message[] | undefined;
}

export const MemorialSchema = SchemaFactory.createForClass(Memorial);
