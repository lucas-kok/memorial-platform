import { Controller, Delete, Get, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../app/auth/jwt-auth.guard';

@Controller('persons')
export class PersonsController {
  @UseGuards(JwtAuthGuard)
  @Post()
  addUser() {}

  @UseGuards(JwtAuthGuard)
  @Get()
  getAllUsers() {}

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  getUserById() {}

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  updateUser() {}

  @UseGuards(JwtAuthGuard)
  @Delete()
  removeUser() {}
}
