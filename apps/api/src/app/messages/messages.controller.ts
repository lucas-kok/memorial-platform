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

  @Get(':id')
  async getMessageById(@Param('id') id: string, @Res() res: Response) {
    Logger.log('[MessagesService][GET]/messages/' + id + ' called');

    const message = await this.messagesService.getMessageById(id);
    if (!message) {
      return res.status(404).json({
        status: 404,
        message: 'Message with id: {' + id + '} not found',
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
    @Param('id') id: string,
    @Body() messageDto: MessageDto,
    @Req() req: IGetUserAuthInfoReqeust,
    @Res() res: Response
  ) {
    Logger.log('[MessagesController][PUT]/messages/' + id + ' called');
    Logger.log(messageDto);

    if (!IdValidator.validate(id)) {
      return res.status(400).json({
        status: 400,
        error: 'Id is not in a valid string format',
      });
    }

    const findMesssage = await this.messagesService.getMessageById(id);
    if (!findMesssage) {
      return res.status(404).json({
        statut: 404,
        error: 'Message with id: {' + id + '} not found',
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
  @Delete(':id')
  async removeMessageById(
    @Param('id') id: string,
    @Req() req: IGetUserAuthInfoReqeust,
    @Res() res: Response
  ) {
    Logger.log('[MessagesService][DELETE]/messages/' + id + ' called');

    if (!IdValidator.validate(id)) {
      return res.status(400).json({
        status: 400,
        error: 'Id is not in a valid string format',
      });
    }

    const message = await this.messagesService.getMessageById(id);
    if (!message) {
      return res.status(404).json({
        status: 404,
        error: 'Message with id: {' + id + '} not found',
      });
    }

    const requestId = req.user._id;
    if (requestId != message.userId) {
      return res.status(403).json({
        status: 403,
        error: "You don't have permission to delete this message",
      });
    }

    await this.messagesService.removeMessageById(id);
    return res.status(200).json({
      status: 200,
      message: 'Message with id: {' + id + '} deleted',
    });
  }
}
