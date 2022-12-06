import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('persons')
export class PersonsController {
  @Post()
  addUser() {}

  @Get()
  getAllUsers() {}

  @Get(':id')
  getUserById() {}

  @Put(':id')
  updateUser() {}

  @Delete()
  removeUser() {}
}
