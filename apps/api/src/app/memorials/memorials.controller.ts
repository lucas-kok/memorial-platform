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
import { MemorialDto } from './memorial.dto';
import { MemorialsService } from './memorials.service';

@Controller('memorials')
export class MemorialsController {
  constructor(private memorialsService: MemorialsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async addMemorial(
    @Body() memorialDto: MemorialDto,
    @Req() req: IGetUserAuthInfoReqeust,
    @Res() res: Response
  ) {
    Logger.log('[MemorialsController][POST]/memorials called');
    Logger.log(memorialDto);

    const requestId = req.user._id;
    const memorial = await this.memorialsService.addMemorial(
      memorialDto,
      requestId
    );

    return res.status(201).json({
      status: 201,
      result: memorial,
    });
  }

  @Get()
  async getAllMemorials(@Res() res: Response) {
    Logger.log('[MemorialsController][GET]/memorials called');

    const memorials = await this.memorialsService.getAllMemorials();

    return res.status(200).json({
      status: 200,
      result: memorials,
    });
  }

  @Get(':id')
  async getMemorialById(@Param('id') id: string, @Res() res: Response) {
    Logger.log('[MemorialsController][GET]/memorials/' + id + ' called');

    if (!IdValidator.validate(id)) {
      return res.status(400).json({
        status: 400,
        error: 'Id is not in a valid string format',
      });
    }

    const memorial = await this.memorialsService.getMemorialById(id);
    if (!memorial) {
      return res.status(404).json({
        status: 404,
        error: 'Memorial with id: {' + id + '} not found',
      });
    }

    return res.status(200).json({
      status: 200,
      result: memorial,
    });
  }

  @Get('/funeral/:id')
  getMemorialByFuneralId() {}

  @Put(':id')
  updateMemorial() {}

  @Delete(':id')
  removeMemorialById() {}
}
