import {
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { FuneralsService } from './funerals.service';

@Controller('funerals')
export class FuneralsController {
  constructor(private funeralsService: FuneralsService) {}

  @Post()
  addFuneral() {
    Logger.log('[FuneralsController][POST]/funerals called');
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
