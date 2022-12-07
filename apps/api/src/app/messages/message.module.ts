import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MemorialSchema } from '../memorials/memorial.model';
import { MemorialsService } from '../memorials/memorials.service';
import { MessageSchema } from './message.model';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'message', schema: MessageSchema }]),
    MongooseModule.forFeature([{ name: 'memorial', schema: MemorialSchema }]),
  ],
  providers: [MessagesService, MemorialsService],
  controllers: [MessagesController],
})
export class MessageModule {}
