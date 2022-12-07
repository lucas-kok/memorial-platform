import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { MemorialDto } from '../memorials/memorial.dto';
import { MemorialsService } from '../memorials/memorials.service';
import { MessageDto } from './message.dto';
import { Message, MessageDocument } from './message.model';

@Injectable()
export class MessagesService {
  constructor(
    @InjectModel('message')
    private readonly messageModel: Model<MessageDocument>,
    private memorialsService: MemorialsService
  ) {}

  async addMessage(
    messageDto: MessageDto,
    userId: string,
    memorialId: string
  ): Promise<Message> {
    Logger.log(
      '[MessagesService] addMessage(' +
        memorialId +
        ') called with userId: {' +
        userId +
        '}'
    );

    const message = {
      userId,
      memorialId,
      ...messageDto,
    };

    return await this.messageModel.create(message);
  }

  async getAllMessagesFromMemorialId(memorialId: string): Promise<Message[]> {
    Logger.log(
      '[MessagesService] getAllMessagesFromMemorialId(' +
        memorialId +
        ') called'
    );

    return await this.messageModel.find({ memorialid: memorialId });
  }

  async getMessageById(_id: string): Promise<Message | null> {
    Logger.log('[MessagesService] getMessageById(' + _id + ') called');

    return await this.messageModel.findById({ _id: new Types.ObjectId(_id) });
  }

  updateMessage() {}

  removeMessageById() {}
}
