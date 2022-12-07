import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Post,
  Put,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { MemorialsService } from '../memorials/memorials.service';
import { IGetUserAuthInfoReqeust } from '../shared/auth.inforequest.interface';
import { MessageDto } from './message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(
    private messagesService: MessagesService,
    private memorialsService: MemorialsService
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async addMessageToMemorial(
    @Body() messageDto: MessageDto,
    @Req() req: IGetUserAuthInfoReqeust,
    @Res() res: Response
  ) {
    Logger.log('[MessagesController][POST]/messages called');
    Logger.log(messageDto);

    const memorialId = messageDto.memorialId!;
    const memorial = this.memorialsService.getMemorialById(memorialId);
    if (!memorial) {
      return res.status(404).json({
        status: 404,
        error: 'Memorial with id: {' + memorialId + '} not found',
      });
    }

    const requestId = req.user._id;
    const message = await this.messagesService.addMessageToMemorial(
      messageDto,
      requestId
    );

    return res.status(201).json({
      status: 201,
      result: message,
    });
  }

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
