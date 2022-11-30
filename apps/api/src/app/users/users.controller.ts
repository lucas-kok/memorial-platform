import { Controller, Delete, Get, Param, Post, Put, Res } from '@nestjs/common';
import { User } from './user.model';
import { UsersService } from './users.service';
import { Response } from 'express';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getAllUsers(): string {
    return 'getAllUsers called';
  }

  @Get(':id')
  getUserById(@Param('id') id: string, @Res() res: Response) {
    let user: User | null = this.usersService.getUserById(id);

    if (user == null) {
      res.status(404).json({
        status: 404,
        error: 'User with id: ' + id + ' not found',
      });
    }

    res.status(200).json({
      status: 201,
      result: user,
    });
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
