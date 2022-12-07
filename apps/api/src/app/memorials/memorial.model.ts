import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type MemorialDocument = Memorial & Document;

@Schema()
export class Memorial {
  _id: string | undefined;

  @Prop({ type: 'string' })
  userId: string | undefined;

  @Prop({ type: 'string' })
  personId: string | undefined;

  @Prop({ type: 'string' })
  funeralId: string | undefined;

  @Prop({ type: 'string' })
  description: string | undefined;

  @Prop({ type: 'string' })
  imageBase64: string | undefined;
}

export const MemorialSchema = SchemaFactory.createForClass(Memorial);
