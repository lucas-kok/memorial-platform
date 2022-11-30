import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { json } from 'stream/consumers';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

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
