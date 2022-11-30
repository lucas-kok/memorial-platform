import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getAllUsers() {}

  @Get()
  getUserById() {}

  @Post()
  addUser() {}

  @Put()
  updateUser() {}

  @Delete()
  removeUser() {}
}
