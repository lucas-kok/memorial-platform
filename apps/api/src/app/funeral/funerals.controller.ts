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
import { IGetUserAuthInfoReqeust } from '../shared/auth.inforequest.interface';
import { IdValidator } from '../shared/id.validator';
import { FuneralDto } from './funeral.dto';
import { FuneralsService } from './funerals.service';

@Controller('funerals')
export class FuneralsController {
  constructor(private funeralsService: FuneralsService) {}

  @UseGuards(JwtAuthGuard)
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
  async getAllFunerals(@Res() res: Response) {
    Logger.log('[FuneralsController][GET]/funerals called');

    const funerals = await this.funeralsService.getAllFunerals();

    return res.status(200).json({
      status: 200,
      result: funerals,
    });
  }

  @Get(':id')
  async getFuneralById(@Param('id') id: string, @Res() res: Response) {
    Logger.log('[FuneralsController][GET]/funerals/' + id + ' called');

    if (!IdValidator.validate(id)) {
      return res.status(400).json({
        status: 400,
        error: 'Id is not in a valid string format',
      });
    }

    const funeral = await this.funeralsService.getFuneralById(id);
    if (!funeral) {
      return res.status(404).json({
        status: 404,
        error: 'Funeral with id: {' + id + '} not found',
      });
    }

    return res.status(200).json({
      status: 200,
      result: funeral,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  updateFuneral(@Param('id') id: string) {
    Logger.log('[FuneralsController][PUT]/funerals/' + id + ' called');
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  removeFuneralById(@Param('id') id: string) {
    Logger.log('[FuneralsController][DELETE]/funerals/' + id + ' called');
  }
}
