import { Controller, Delete, Get, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private messagesService: MessagesService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  addMessage() {}

  @Get()
  getMessageFromMemorialId() {}

  @Get(':id')
  getMessageById() {}

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  updateMessage() {}

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  removeMessageById() {}
}
