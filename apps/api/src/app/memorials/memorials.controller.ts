import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { MemorialsService } from './memorials.service';

@Controller('memorials')
export class MemorialsController {
  constructor(private memorialsService: MemorialsService) {}

  @Post()
  addMemorial() {}

  @Get()
  getAllMemorials() {}

  @Get(':id')
  getMemorialById() {}

  @Get('/funeral/:id')
  getMemorialByFuneralId() {}

  @Put(':id')
  updateMemorial() {}

  @Delete(':id')
  removeMemorialById() {}
}
