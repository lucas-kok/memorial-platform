import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private messagesService: MessagesService) {}

  @Post()
  addMessage() {}

  @Get()
  getMessageFromMemorialId() {}

  @Get(':id')
  getMessageById() {}

  @Put(':id')
  updateMessage() {}

  @Delete(':id')
  removeMessageById() {}
}
