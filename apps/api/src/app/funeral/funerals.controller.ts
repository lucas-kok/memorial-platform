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
} from '@nestjs/common';
import { Response } from 'express';
import { IGetUserAuthInfoReqeust } from '../shared/auth.inforequest.interface';
import { FuneralDto } from './funeral.dto';
import { FuneralsService } from './funerals.service';

@Controller('funerals')
export class FuneralsController {
  constructor(private funeralsService: FuneralsService) {}

  @Post()
  async addFuneral(
    @Body() funeralDto: FuneralDto,
    @Req() req: IGetUserAuthInfoReqeust,
    @Res() res: Response
  ) {
    const requestId = req.user._id;
    Logger.log('[FuneralsController][POST]/funerals called');
    Logger.log(funeralDto);

    const funeral = await this.funeralsService.addFuneral(
      funeralDto,
      requestId
    );
    return res.status(201).json({
      status: 201,
      result: funeral,
    });
  }

  @Get()
  getAllFunerals() {
    Logger.log('[FuneralsController][GET]/funerals called');
  }

  @Get(':id')
  getFuneralById(@Param('id') id: string) {
    Logger.log('[FuneralsController][GET]/funerals/' + id + ' called');
  }

  @Put(':id')
  updateFuneral(@Param('id') id: string) {
    Logger.log('[FuneralsController][PUT]/funerals/' + id + ' called');
  }

  @Delete(':id')
  removeFuneralById(@Param('id') id: string) {
    Logger.log('[FuneralsController][DELETE]/funerals/' + id + ' called');
  }
}
