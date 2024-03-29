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
import { IdValidator } from '../shared/id.validator';
import { MessageDto, MessageRequestDto } from './message.dto';
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

  @Get('/memorial/:id')
  async getMessageFromMemorialId(
    @Param('id') id: string,
    @Res() res: Response
  ) {
    Logger.log('[MessagesController][GET]/messages/memorial/' + id + ' called');

    const messages = await this.messagesService.getAllMessagesFromMemorialId(
      id
    );
    return res.status(200).json({
      status: 200,
      result: messages,
    });
  }

  @Get()
  async getMessage(
    @Body() messageRequestDto: MessageRequestDto,
    @Res() res: Response
  ) {
    const { _id, memorialId } = messageRequestDto!;

    Logger.log('[MessagesService][GET]/messages/' + _id + ' called');

    const message = await this.messagesService.getMessageById(
      memorialId!,
      _id!
    );
    if (!message) {
      return res.status(404).json({
        status: 404,
        message: 'Message with id: {' + _id + '} not found',
      });
    }

    return res.status(200).json({
      status: 200,
      result: message,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async updateMessage(
    @Param('id') id: number,
    @Body() messageDto: MessageDto,
    @Req() req: IGetUserAuthInfoReqeust,
    @Res() res: Response
  ) {
    const memorialId = messageDto.memorialId;
    Logger.log('[MessagesController][PUT]/messages/' + id + ' called');
    Logger.log(messageDto);

    const findMesssage = await this.messagesService.getMessageById(
      memorialId!,
      id
    );
    if (!findMesssage) {
      return res.status(404).json({
        statut: 404,
        error:
          'Message with id: {' +
          id +
          '} not found at memorialId: {' +
          memorialId +
          '}',
      });
    }

    const requestId = req.user._id;
    if (requestId != findMesssage.userId) {
      return res.status(403).json({
        status: 403,
        error: "You don't have permission to update this message",
      });
    }

    const message = await this.messagesService.updateMessage(
      memorialId!,
      id,
      requestId,
      messageDto
    );
    return res.status(201).json({
      status: 201,
      result: message,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Delete()
  async removeMessageById(
    @Body() messageRequestDto: MessageRequestDto,
    @Req() req: IGetUserAuthInfoReqeust,
    @Res() res: Response
  ) {
    const { _id, memorialId } = messageRequestDto;
    Logger.log('[MessagesService][DELETE]/messages/' + _id + ' called');

    const message = await this.messagesService.getMessageById(
      memorialId!,
      _id!
    );
    if (!message) {
      return res.status(404).json({
        status: 404,
        error: 'Message with id: {' + _id + '} not found',
      });
    }

    const requestId = req.user._id;
    if (requestId != message.userId) {
      return res.status(403).json({
        status: 403,
        error: "You don't have permission to delete this message",
      });
    }

    await this.messagesService.removeMessageById(memorialId!, _id!);
    return res.status(200).json({
      status: 200,
      message: 'Message with id: {' + _id + '} deleted',
    });
  }
}
