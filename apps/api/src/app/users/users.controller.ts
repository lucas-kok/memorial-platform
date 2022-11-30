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
} from '@nestjs/common';
import { User } from './user.model';
import { UsersService } from './users.service';
import { Response } from 'express';
import { UserDto } from './user.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  addUser(@Body() createUserDto: UserDto, @Res() res: Response) {
    Logger.log('AddUser called');
    Logger.log(createUserDto);

    let user = this.usersService.addUser(createUserDto);
    res.status(201).json({
      status: 201,
      result: user,
    });
  }

  @Get()
  getAllUsers(@Res() res: Response) {
    Logger.log('GetAllUsers called');
    let users = this.usersService.getAllUsers();

    res.status(200).json({
      status: 200,
      result: users,
    });
  }

  @Get(':id')
  getUserById(@Param('id') id: string, @Res() res: Response) {
    Logger.log('GetUserById called with id {' + id + '}');
    let user: User | null = this.usersService.getUserById(id);

    if (user == null) {
      res.status(404).json({
        status: 404,
        error: 'User with id {' + id + '} not found',
      });
    }

    res.status(200).json({
      status: 200,
      result: user,
    });
  }

  @Put()
  updateUser() {
    Logger.log('UpdateUser called');
    return 'updateUser called';
  }

  @Delete(':id')
  removeUser(@Param('id') id: string, @Res() res: Response) {
    Logger.log('RemoveUser called with id {' + id + '}');
    let user: User | null = this.usersService.getUserById(id);

    if (user == null) {
      res.status(404).json({
        status: 404,
        error: 'User with id {' + id + '} not found',
      });
    }

    this.usersService.removeUserById(id);

    res.status(200).json({
      status: 200,
      message: 'User with id {' + id + '} deleted',
    });

    return 'removeUser called';
  }
}
