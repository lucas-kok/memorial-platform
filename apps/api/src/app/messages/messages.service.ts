import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Memorial, MemorialDocument } from '../memorials/memorial.model';
import { MessageDto } from './message.dto';
import { Message, MessageDocument } from './message.model';

@Injectable()
export class MessagesService {
  constructor(
    @InjectModel('message')
    private readonly messageModel: Model<MessageDocument>,
    @InjectModel('memorial')
    private readonly memorialModel: Model<MemorialDocument>
  ) {}

  async addMessageToMemorial(
    messageDto: MessageDto,
    userId: string
  ): Promise<any> {
    Logger.log(
      '[MessagesService] addMessage called with userId: {' + userId + '}'
    );

    const memorial = await this.memorialModel.findById({
      _id: new Types.ObjectId(messageDto.memorialId),
    });
    if (!memorial) throw new NotFoundException();

    const message = {
      _id: memorial!.messages!.length,
      userId,
      ...messageDto,
    };

    memorial!.messages!.push(message);
    await memorial.save();

    return memorial;
  }

  async getAllMessagesFromMemorialId(memorialId: string): Promise<Message[]> {
    Logger.log(
      '[MessagesService] getAllMessagesFromMemorialId(' +
        memorialId +
        ') called'
    );

    const memorial = await this.memorialModel.findById({
      _id: new Types.ObjectId(memorialId),
    });
    if (!memorial) throw new NotFoundException();

    return memorial!.messages!;
  }

  async getMessageById(
    memorialId: string,
    _id: number
  ): Promise<Message | null> {
    Logger.log(
      '[MessagesService] getMessageById(' +
        _id +
        ') called with memorialId: {' +
        memorialId +
        '}'
    );

    const memorial = await this.memorialModel.findById({
      _id: new Types.ObjectId(memorialId),
    });
    if (!memorial)
      throw new NotFoundException(
        'Memorial with id: {' + memorialId + '} not found'
      );

    if (
      memorial!.messages![_id] != null &&
      memorial!.messages![_id]._id == _id
    ) {
      return memorial!.messages![_id];
    }

    const findMessage = memorial!.messages!.find(
      (message) => message._id == _id
    );
    if (!findMessage)
      throw new NotFoundException('Message with id: {' + _id + '} not found');

    return findMessage;
  }

  async updateMessage(_id: string, userId: string, messageDto: MessageDto) {
    Logger.log(
      '[MessagesService] updateMessage(' +
        _id +
        ') called with userId: {' +
        userId +
        '}'
    );
    Logger.log(messageDto);

    const message = {
      _id,
      userId,
      messageDto,
    };

    return await this.messageModel.findOneAndUpdate({ _id: _id }, message, {
      new: true,
    });
  }

  async removeMessageById(_id: string): Promise<Message | null> {
    Logger.log('[MessagesService] removeMessageById(' + _id + ') called');

    return await this.messageModel.findOneAndDelete({ _id: _id });
  }
}
