import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MessageSchema } from './message.model';
import { MessagesService } from './messages.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'message', schema: MessageSchema }]),
  ],
  providers: [MessagesService],
  controllers: [],
})
export class MessageModule {}
