import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MessageSchema } from './message.model';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'message', schema: MessageSchema }]),
  ],
  providers: [MessagesService],
  controllers: [MessagesController],
})
export class MessageModule {}
