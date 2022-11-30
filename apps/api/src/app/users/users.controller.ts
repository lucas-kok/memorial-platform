import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getAllUsers(): string {
    return 'getAllUsers called';
  }

  @Get()
  getUserById(): string {
    return 'getUserById called';
  }

  @Post()
  addUser(): string {
    return 'addUser called';
  }

  @Put()
  updateUser(): string {
    return 'updateUser called';
  }

  @Delete()
  removeUser(): string {
    return 'removeUser called';
  }
}
