import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { FuneralsService } from './funerals.service';

@Controller('funerals')
export class FuneralsController {
  constructor(private funeralsService: FuneralsService) {}

  @Post()
  addFuneral() {}

  @Get()
  getAllFunerals() {}

  @Get(':id')
  getFuneralById() {}

  @Put()
  updateFuneral() {}

  @Delete(':id')
  removeFuneralById() {}
}
