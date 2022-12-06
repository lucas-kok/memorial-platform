import { Controller, Delete, Get, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('persons')
export class PersonsController {
  @UseGuards(JwtAuthGuard)
  @Post()
  addPerson() {}

  @UseGuards(JwtAuthGuard)
  @Get()
  getAllPersonsFromUser() {}

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  getPersonById() {}

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  updatePerson() {}

  @UseGuards(JwtAuthGuard)
  @Delete()
  removePerson() {}
}
