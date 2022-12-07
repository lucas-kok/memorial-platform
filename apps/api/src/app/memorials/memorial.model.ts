import { Prop, Schema } from '@nestjs/mongoose';

@Schema()
export class Memorial {
  _id: string | undefined;

  @Prop({ type: 'string ' })
  userId: string | undefined;

  @Prop({ type: 'string ' })
  personId: string | undefined;

  @Prop({ type: 'string ' })
  funeralId: string | undefined;

  @Prop({ type: 'string ' })
  description: string | undefined;

  @Prop({ type: 'string ' })
  imageBase64: string | undefined;
}
