import { Message } from '../message/message.model';

export class Memorial {
  _id: string | undefined;
  userId: string | undefined;
  funeralId: string | undefined;
  description: string | undefined;
  imageBase64: string | undefined;
  messages: Message[] | undefined;
}
