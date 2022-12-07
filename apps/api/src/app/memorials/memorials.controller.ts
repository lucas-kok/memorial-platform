import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Post,
  Put,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { IGetUserAuthInfoReqeust } from '../shared/auth.inforequest.interface';
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
  getMemorialById() {}

  @Get('/funeral/:id')
  getMemorialByFuneralId() {}

  @Put(':id')
  updateMemorial() {}

  @Delete(':id')
  removeMemorialById() {}
}
